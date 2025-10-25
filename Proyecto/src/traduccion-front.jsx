
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
          <main class='flex flex-col gap-12 flex-between p-20'>
            

            <section>
                <textarea  class="block p-2.5 w-full h-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"type="text" placeholder='Texto a Traducir' value={texto} onChange={(e) => setTexto(e.target.value)}/>
                <label for="countries_multiple" class="text-left block mt-2 text-sm font-medium text-gray-900 dark:text-white">Idioma de entrada</label>
                <select class=' w-44 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="idiomas" value={idioma_en} onChange={(e) => setIdioma_en(e.target.value)}  >
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
            </section>
            <div>
                <button class='inline-flex items-center px-3 py-2 text-4xl font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700' onClick={mandarAlBackend}>Traducir</button>
            </div>

            <div>
                <textarea class="block p-2.5 w-full h-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" placeholder='Texto Traducido' value={Traduccion}/>
                <label for="countries_multiple" class="text-left block mt-2 text-sm font-medium text-gray-900 dark:text-white">Idioma de salida</label>
                <select class=' w-44 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id="idiomas" value={idioma_sa} onChange={(e) => setIdioma_sa(e.target.value)}>
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
          </main>

















    </div>
    )
}
