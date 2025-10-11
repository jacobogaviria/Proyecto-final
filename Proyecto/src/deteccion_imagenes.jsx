
import { useState } from 'react';


export function Modulo_deteccion_imagenes() {
    const [imagen, setImagen] = useState("");
    const [resultado, setResultado] = useState("");
    const [preview, setPreview] = useState(null);


    const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setPreview(URL.createObjectURL(file)); 
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
           <button className='boton_detectar'>Detectar</button>









       </div>
   )   

}