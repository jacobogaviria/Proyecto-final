import { useState } from 'react';


export function Modulo_deteccion_imagenes() {
    const [imagen, setImagen] = useState("");
    const [resultado, setResultado] = useState([]);
    const [preview, setPreview] = useState(null);


    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setPreview(URL.createObjectURL(file)); 
    }
  };
    const mandarAlBackend = async () => {
    try {
      const formData = new FormData();
      formData.append("file", imagen);

      const res = await fetch("http://127.0.0.1:8000/detectar", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      console.log(data); // <-- Agrega esto para depurar
      setResultado(data.resultados);
    } catch (err) {
      console.error("Error:", err);
    }
  };

   return (
       <div>

              <div className="header_resumen">
                <a className="modulo-link_resumen" onClick={() => window.location.href = "/"}>volver</a>
                <h1>DETECCION EN IMAGENES</h1>
                </div>




           <div className="entrada">

                <div className="file-upload">
                    <label className="file-upload-label">
                        📁 Subir imagen
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </label>
                </div>

                {preview && <img src={preview} alt="Vista previa" className='IMG_ENTRADA'/>}

           </div>
           <button onClick={mandarAlBackend} className='boton_detectar'>Detectar</button>

           <div>

                {resultado.length > 0 && (
                  <div>
                    <h3>Objetos detectados:</h3>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {resultado.map((recorte, i) => (
                        <img
                          key={i}
                          src={`data:image/jpeg;base64,${recorte.image_base64}`}
                          alt={`objeto-${i}`}
                          style={{ width: "150px", borderRadius: "8px" }}
                        />
                      ))}
                    </div>
                  </div>
                )}

           </div>









       </div>
   )   

}