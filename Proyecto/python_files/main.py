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


app = FastAPI()
model = YOLO("yolov8n.pt")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción mejor restringir a ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de datos para recibir desde React
class Texto(BaseModel):
    mensaje: Optional[str] = None
    id_entrada: Optional[str] = None
    id_salida: Optional[str] = None
    

@app.post('/resumir')
def procesar_texto(data: Texto):
    resumen = resumenes(data.mensaje, 2)
    return{"resumen": resumen}

@app.post('/traducir')
def traducir(data: Texto):
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