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
          <header class= 'sticky top-0 left-0 w-full z-50'>
            <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b-2">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-10 w-10" alt="Flowbite Logo" />
                    <span class="self-center text-4xl font-bold whitespace-nowrap dark:text-white">TextVision AI</span>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                  <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <a href="/" 
                      class="group  w-30 h-10 rounded-lg p-5 flex flex-row items-center hover:scale-110 duration-110 gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">

                      <svg class="w-8 h-8 text-white " 
                          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                          width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" 
                              d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" 
                              clip-rule="evenodd"/>
                      </svg>

                      <p class="text-white ">Home</p>
                    </a>

                    <li className="hover:scale-110 duration-110 group w-40 h-10 rounded-lg p-5 flex flex-row items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
                      <button
                        id="dropdownNavbarLink"
                        data-dropdown-toggle="dropdownNavbar"
                        className="flex items-center justify-between w-full py-2 px-3  text-white rounded-sm md:p-0 md:w-auto"
                        type="button"
                      >
                        <svg className="w-8 h-8 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.9" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                        Servicios
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                      </button>
                      <div
                        id="dropdownNavbar"
                        className="z-10 hidden font-normal rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 "
                      >
                        <ul className="py-2 rounded-lg  text-white text-sm bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" aria-labelledby="dropdownNavbarLink">
                          <li>
                            <a href="/modulo1" className=" block px-4 py-2  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ">RESUMIR</a>
                          </li>
                          <li>
                            <a href="/modulo2#" className="block px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">TRADUCTOR</a>
                          </li>
                          <li>
                            <a href="/modulo3" className="block px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">DETECCION</a>
                          </li>
                          <li>
                            <a href="/modulo4" className="block px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">Generar codigo</a>
                          </li>
                          
                        </ul>
                      </div>
                    </li>
                  
                
                  </ul>
                </div>
              </div>
            </nav>
        </header>
        <section class='w-full h-70 bg-gray-900 p-10'>
          <h1 class='text-5xl font-bold text-white '>Potencia tu productividad con inteligencia artificial</h1>
          <p class='text-lg text-gray-500 text-bold brightness-200 mt-10 pl-90 pr-90'>Nuestra plataforma combina potentes herramientas de procesamiento de texto y análisis de imágenes para ayudarte a trabajar más rápido y mejor.
              Resume documentos extensos, traduce textos con precisión y detecta objetos en tus imágenes en cuestión de segundos</p>

        </section>

              

        <section class='p-5 flex flex-col items-center justify-center align-center gap-10'>
        <div>
           <div class='flex flex-col items-center justify-center align-center'>

                <div class='flex flex-row mb-5 border-gray-600 border-2 rounded-lg'>
                    <label  for ='file-upload'className=" pt-2 h-9 w-3xs text-center rounded-l-lg text-bold  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 block text-sm font-medium text-white">Subir imagen</label>
                    <input id="file-upload" type="file" className='block w-full text-sm text-center pt-2 pl-2 text-gray-900 border border-gray-300 rounded-r-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' onChange={handleFileChange} />
                </div>

                {preview && <img src={preview} alt="Vista previa" className='rounded-lg'/>}

           </div >
           <div class='align-center justify-center flex mt-5 mb-5'>
            <button onClick={mandarAlBackend} class=' text-white w-40 h-10 rounded-lg p-7 pl-8 text-2xl text-bold flex flex-row items-center hover:scale-110 duration-110 gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700'>Detectar</button>
           </div>
           <div class='flex flex-col items-center justify-center align-center mb-10'>

                {resultado.length > 0 && (
                  <div>
                    <h3 class='text-2xl mb-5  text-white'>Objetos detectados:</h3>
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
        </section>
        </div>

      
    )
  }
      