export function Modulos() {
  return (
    <>
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


        <main class='flex flex-col items-center m-3 p-3 gap-10'>
          <section className="flex flex-row p-4 flex-wrap gap-10 justify-center space-x-4">

              <article class=" shadow-2xl flex flex-row w-4xl h-40/2 bg-white mr-80 border border-white rounded-lg shadow-2x1 dark:bg-gray-900 hover:-translate-y-1 transition-all duration-500">
                  <a href="/modulo1">
                      <img class="rounded-t-lg w-2xl h-63" src="https://img.freepik.com/fotos-premium/texto-resumen-papel-word-resumen-papel-rasgado-imagen-conceptual_680447-1893.jpg" alt="" />
                  </a>
                  <div class="p-5 flex- flex-col">
                      <a href="#">
                          <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RESUMIR TEXTO</h5>
                      </a>
                      <p class="mb-10 font-normal text-gray-700 dark:text-gray-400">Esta herramienta resume texto con el uso de el <span class='brightness-200'>procesamiento del lenguaje natural</span> con la ayuda de <span class='brightness-200'>NLTK</span> para tokenizar, lematizar y procesar el texto.</p>
                      <a href="/modulo1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg">
                          USAR HERRAMIENTA
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </article>


              <article class=" shadow-2xl flex flex-row w-4xl ml-80 h-40/2 bg-white border border-white rounded-lg shadow-2x1 dark:bg-gray-900   hover:-translate-y-1 transition-all duration-500">
                  <a href="/modulo2">
                      <img class="rounded-t-lg min-w-full min-h-64" src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/04/9c/61/049c6183-71e1-12c0-a15f-10bea0c6be70/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TRADUCIR TEXTO</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Esta herramienta te permite traducir fácilmente cualquier texto utilizando <span class='brightness-200'>Deep Translator</span>, con soporte para 32 idiomas diferentes. <span class='brightness-200'>Es rápida, sencilla y pensada para que puedas comunicarte sin barreras</span>, sin importar el idioma.</p>
                      <a href="/modulo2" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg">
                          USAR HERRAMIENTA
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </article>



            
              <article class=" shadow-2xl flex flex-row w-4xl h-40/2 mr-80 bg-white border border-white rounded-lg shadow-2x1 dark:bg-gray-900  hover:-translate-y-1 transition-all duration-500">
                  <a href="/modulo1">
                      <img class="rounded-t-lg min-w-full min-h-64" src="https://cdn.gowinston.ai/wp-content/uploads/2024/09/AI-DETECTION-2-1024x576.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DETECCION EN IMAGENES CON IA</h5>
                      </a>
                      <p class="mb-10 font-normal text-gray-700 dark:text-gray-400">Esta herramienta utiliza modelos de IA como lo es <span class='brightness-200'>YOLO V8</span> para detectar <span class='brightness-200'>objetos, humanos y animales</span> en imagenes, ademas devuelve recortes de cada deteccion</p>
                      <a href="/modulo1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg">
                          USAR HERRAMIENTA
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </article>


              



            
              <article class=" shadow-2xl flex flex-row w-4xl ml-80 h-40/2 bg-white border border-white rounded-lg shadow-2x1 dark:bg-gray-900   hover:-translate-y-1 transition-all duration-500">
                  <a href="/modulo4">
                      <img class="rounded-t-lg min-w-full min-h-64" src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniversal/QLIWCHMHWFFBHD5MN272BR6PXQ.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GENERAR CODIGO</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Esta herramienta utiliza <span class='brightness-200'>el modelo de inteligencia artificial Gemini 2.5 Flash de Google</span> para generar automáticamente código en diferentes lenguajes de programación  <span class='brightness-200'>a partir de instrucciones en lenguaje natural.</span></p>
                      <a href="/modulo4" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg">
                          USAR HERRAMIENTA
                          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </a>
                  </div>
              </article>
                
              
            


            </section>
        </main>
    </>
  )
}

<script src="https://unpkg.com/flowbite@2.3.0/dist/flowbite.min.js"></script>
