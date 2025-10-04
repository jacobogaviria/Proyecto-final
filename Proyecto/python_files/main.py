from fastapi import FastAPI
from pydantic import BaseModel
from resumir import resumenes
from fastapi.middleware.cors import CORSMiddleware

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
    

@app.post('/resumir')
def procesar_texto(data: Texto):
    resumen = resumenes(data.mensaje, 2)
    return{"resumen": resumen}