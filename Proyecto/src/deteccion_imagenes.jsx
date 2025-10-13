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
          <header>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TextVision AI</span>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                  <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <a href="/" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Servicios <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg></button>
                        
                        <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                              <li>
                                <a href="/modulo1" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">RESUMIR</a>
                              </li>
                              <li>
                                <a href="/modulo2#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TRADUCTOR</a>
                              </li>
                              <li>
                                <a href="/modulo3" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">DETECCION</a>
                              </li>
                              <li>
                                <a href="/modulo4" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NO</a>
                              </li>
                              <li>
                                <a href="/modulo5" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NO</a>
                              </li>
                              <li>
                                <a href="/modulo6" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">NO</a>
                              </li>
                            </ul>
                            
                        </div>
                    </li>
                  
                
                  </ul>
                </div>
              </div>
            </nav>
        </header>

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
                          style={{ Width: "350px", borderRadius: "8px" }}
                        />
                      ))}
                    </div>
                  </div>
                )}

           </div>









       </div>
   )   

}