from fastapi import FastAPI
from pydantic import BaseModel
from resumir import resumenes
from traducir import traducir_texto
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción mejor restringir a ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de datos para recibir desde React
class Texto(BaseModel):
    mensaje: str
    id_entrada: Optional[str] = None
    id_salida: Optional[str] = None
    

@app.post('/resumir')
def procesar_texto(data: Texto):
    resumen = resumenes(data.mensaje, 3)
    return{"resumen": resumen}

@app.post('/traducir')
def traducir(data: Texto):
    traduccion = traducir_texto(data.id_entrada, data.mensaje, data.id_salida)
    return {'traduccion': traduccion}