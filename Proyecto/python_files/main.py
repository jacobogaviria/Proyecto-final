from fastapi import FastAPI
from pydantic import BaseModel
from resumir import resumenes 
from traducir import traducir_texto 
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from fastapi import File, UploadFile
import cv2
import numpy as np
import base64
from ultralytics import YOLO
from PIL import Image
from io import BytesIO
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
import requests
# 🛑 Eliminamos las importaciones fallidas del SDK de Google
import os 

# --- CONFIGURACIÓN DE FASTAPI Y GEMINI CLIENT ---

# 🛑 1. CONFIGURACIÓN DE SEGURIDAD Y CLAVE
# Asegúrate de reemplazar el placeholder con tu clave real.
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyByAZHiS-fw8WioSp5Ay0_9W783nGsIkBM") 
# La inicialización global del cliente ya no es necesaria ni se hace.

app = FastAPI()
model = YOLO("yolov8n.pt") 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- MODELOS DE DATOS ---

class Texto(BaseModel):
    mensaje: Optional[str] = None
    id_entrada: Optional[str] = None
    id_salida: Optional[str] = None
    num_sentences: Optional[int] = 3
    prompt: Optional[str] = None
    language: Optional[str] = None
    
# --- RUTAS DE LA API ---

@app.get("/")
def read_root():
    return {"Hello": "Welcome to the Multipurpose API"}

@app.post('/resumir')
def procesar_texto(data: Texto):
    # Asume que la función existe en resumir.py
    resumen = resumenes(data.mensaje, data.num_sentences)
    return{"resumen": resumen}

@app.post('/traducir')
def traducir(data: Texto):
    # Asume que la función existe en traducir.py
    traduccion = traducir_texto(data.id_entrada, data.mensaje, data.id_salida)
    return {'traduccion': traduccion}


@app.post("/detectar/")
async def detectar(file: UploadFile = File(...)):
    contents = await file.read()
    nparr = np.frombuffer(contents, np.uint8)
    image = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

    # Ejecutar detección
    results = model(image)[0]

    detecciones = []
    for box in results.boxes:
        x1, y1, x2, y2 = map(int, box.xyxy[0])
        conf = float(box.conf[0])
        cls = int(box.cls[0])
        label = model.names[cls]

        # Recortar el objeto detectado
        cropped = image[y1:y2, x1:x2]
        _, buffer = cv2.imencode(".jpg", cropped)
        img_base64 = base64.b64encode(buffer).decode("utf-8")

        detecciones.append({
            "label": label,
            "confidence": conf,
            "image_base64": img_base64
        })

    return {"resultados": detecciones}


@app.post("/generate-code")
async def generate_code(request: Texto):
    try:
        prompt = (
            f"Generate a clean and complete {request.language} code function or script "
            f"that fulfills the following task: {request.prompt}. "
            f"Provide only the code block, without any extra text or explanation."
        )

        # 🛑 SOLUCIÓN DEFINITIVA: Usar peticiones REST directas con 'requests' para evitar el SDK roto.
        api_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
        
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.2,
                "maxOutputTokens": 1024
            }

        }

        # Realizar la petición POST
        response = requests.post(api_url, json=payload, timeout=30)
        response.raise_for_status()  # Lanza un error para códigos de estado 4xx/5xx

        json_response = response.json()
        
        # 1. Verificar si hay candidatos en la respuesta JSON
        if 'candidates' not in json_response or not json_response['candidates']:
            return {"error": "Generación bloqueada o fallida", 
                    "details": "El modelo no pudo generar una respuesta. El JSON estaba vacío o no contenía candidatos."}

        # Extraer texto y razón de finalización del primer candidato
        candidate = json_response['candidates'][0]
        # Usamos .get() con un valor por defecto para evitar KeyError
        generated_code = candidate.get('content', {}).get('parts', [{}])[0].get('text', '').strip()
        finish_reason = candidate.get('finishReason', 'UNSPECIFIED') 

        # 2. Verificar el motivo de finalización (si fue bloqueado por seguridad)
        if finish_reason == 'SAFETY':
             return {"error": "Contenido filtrado por seguridad", 
                     "details": "El contenido fue bloqueado por los filtros de seguridad de Gemini. Intenta reformular la tarea."}
        
        # 3. Respuesta Exitosa
        if generated_code:
            return {"generated_code": generated_code}
        else:
            # 4. Respuesta vacía (si no hay texto generado)
            return {"error": "Respuesta vacía o incompleta", 
                    "details": f"El modelo terminó con la razón: {finish_reason} pero no devolvió código legible."}

    except requests.HTTPError as http_err:
        print(f"Error HTTP de la API de Gemini: {http_err}")
        return {"error": "Error HTTP de la API de Gemini", 
                "details": f"Error: {http_err}. Verifica tu clave de API (código 400/403) o la URL del modelo."}
    except Exception as e:
        print(f"Error general: {e}")
        return {"error": "Error general al conectar con Gemini API", "details": str(e)}
