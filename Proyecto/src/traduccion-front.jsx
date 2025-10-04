import './traduccion-css.css'
import { useState } from 'react';



export function Modulo_traducir(){

    const [idioma_en, setIdioma_en] = useState("");
    const [idioma_sa, setIdioma_sa] = useState("");
    const [texto, setTexto] = useState("");
    const [Traduccion, setTraduccion] = useState("");
    
    
    const mandarAlBackend = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/traducir", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ mensaje: texto, id_entrada: idioma_en, id_salida: idioma_sa })  // aquí mandas lo que tienes en el input
      });

      // convierte la respuesta en JSON
      const data = await res.json();

      // guarda el resultado en el estado resumen
      setTraduccion(data.traduccion);
    } catch (err) {
      console.error("Error:", err);
    }
  };
    return(
        <div>
        <div className="header_resumen">
          <a className="modulo-link_resumen" onClick={() => window.location.href = "/"}>volver</a>
          <h1 className='titulo'>Traducir</h1>
        </div>

        <div className='entrada'>
            <textarea className="input-text" type="text" placeholder='Texto a Resumir' value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <select id="idiomas" value={idioma_en} onChange={(e) => setIdioma_en(e.target.value)} className='select_idioma' >
                <option value="" disabled selected hidden>Seleccione un idioma</option>
                <option value="af">Afrikáans</option>
                <option value="ar">Árabe</option>
                <option value="bn">Bengalí</option>
                <option value="bg">Búlgaro</option>
                <option value="ca">Catalán</option>
                <option value="zh-CN">Chino (Simplificado)</option>
                <option value="zh-TW">Chino (Tradicional)</option>
                <option value="hr">Croata</option>
                <option value="cs">Checo</option>
                <option value="da">Danés</option>
                <option value="nl">Neerlandés</option>
                <option value="en">Inglés</option>
                <option value="et">Estonio</option>
                <option value="fi">Finés</option>
                <option value="fr">Francés</option>
                <option value="de">Alemán</option>
                <option value="el">Griego</option>
                <option value="he">Hebreo</option>
                <option value="hi">Hindi</option>
                <option value="hu">Húngaro</option>
                <option value="id">Indonesio</option>
                <option value="it">Italiano</option>
                <option value="ja">Japonés</option>
                <option value="ko">Coreano</option>
                <option value="lv">Letón</option>
                <option value="lt">Lituano</option>
                <option value="ms">Malayo</option>
                <option value="fa">Persa</option>
                <option value="pl">Polaco</option>
                <option value="pt">Portugués</option>
                <option value="ro">Rumano</option>
                <option value="ru">Ruso</option>
                <option value="sk">Eslovaco</option>
                <option value="sl">Esloveno</option>
                <option value="es">Español</option>
                <option value="sv">Sueco</option>
                <option value="ta">Tamil</option>
                <option value="th">Tailandés</option>
                <option value="tr">Turco</option>
                <option value="uk">Ucraniano</option>
                <option value="vi">Vietnamita</option>
            </select>
        </div>
        <div>
            <button onClick={mandarAlBackend}>Traducir</button>
        </div>

        <div className='salida'>
            <textarea className="input-text" type="text" placeholder='Texto Resumido' value={Traduccion}/>
            <select id="idiomas" value={idioma_sa} onChange={(e) => setIdioma_sa(e.target.value)}className='select_idioma' >
                <option value="" disabled selected hidden>Seleccione un idioma</option>
                <option value="af">Afrikáans</option>
                <option value="ar">Árabe</option>
                <option value="bn">Bengalí</option>
                <option value="bg">Búlgaro</option>
                <option value="ca">Catalán</option>
                <option value="zh-CN">Chino (Simplificado)</option>
                <option value="zh-TW">Chino (Tradicional)</option>
                <option value="hr">Croata</option>
                <option value="cs">Checo</option>
                <option value="da">Danés</option>
                <option value="nl">Neerlandés</option>
                <option value="en">Inglés</option>
                <option value="et">Estonio</option>
                <option value="fi">Finés</option>
                <option value="fr">Francés</option>
                <option value="de">Alemán</option>
                <option value="el">Griego</option>
                <option value="he">Hebreo</option>
                <option value="hi">Hindi</option>
                <option value="hu">Húngaro</option>
                <option value="id">Indonesio</option>
                <option value="it">Italiano</option>
                <option value="ja">Japonés</option>
                <option value="ko">Coreano</option>
                <option value="lv">Letón</option>
                <option value="lt">Lituano</option>
                <option value="ms">Malayo</option>
                <option value="fa">Persa</option>
                <option value="pl">Polaco</option>
                <option value="pt">Portugués</option>
                <option value="ro">Rumano</option>
                <option value="ru">Ruso</option>
                <option value="sk">Eslovaco</option>
                <option value="sl">Esloveno</option>
                <option value="es">Español</option>
                <option value="sv">Sueco</option>
                <option value="ta">Tamil</option>
                <option value="th">Tailandés</option>
                <option value="tr">Turco</option>
                <option value="uk">Ucraniano</option>
                <option value="vi">Vietnamita</option>
            </select>
        </div>

















    </div>
    )
}
