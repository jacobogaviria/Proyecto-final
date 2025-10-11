import { useState } from "react";




export function Resumen_front() {
    const [draft, setDraft] = useState("");  
    const [resumen, setResumen] = useState("");

  
    
    const mandarAlBackend = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/resumir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ mensaje: draft })  // aquí mandas lo que tienes en el input
      });

      // convierte la respuesta en JSON
      const data = await res.json();

      // guarda el resultado en el estado resumen
      setResumen(data.resumen);
    } catch (err) {
      console.error("Error:", err);
    }
  };
    


    return (
      <div>
        
        <div className="header_resumen">
          <a className="modulo-link_resumen" onClick={() => window.location.href = "/"}>volver</a>
          <h1>RESUMIR TEXTOS</h1>
        </div>
        <main>
          <textarea 
            className="input-text"
            placeholder="Texto a resumir"
            onChange={(e) => setDraft(e.target.value)}
            
            
          />-

          <button onClick={mandarAlBackend}    className='boton_resumen'>Resumir</button>
          <textarea className="input-text" type="text" placeholder='resumen' value={resumen} />
        </main>
      </div>
    )

}