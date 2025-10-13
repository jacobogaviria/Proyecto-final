export function Modulos() {
  return (
    <>
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
        <main class='flex flex-col items-center m-3 p-3 gap-10'>
          <section class='flex flex-row space-y-4 p-4 flex-wrap gap-30 justify-center'>
            

              <article class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-2x1 dark:bg-gray-800 dark:border-gray-700  hover:-translate-y-1 transition-all duration-500">
                  <a href="/modulo1">
                      <img class="rounded-t-lg" src="https://img.freepik.com/fotos-premium/texto-resumen-papel-word-resumen-papel-rasgado-imagen-conceptual_680447-1893.jpg" alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">RESUMIR TEXTO</h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Esta herramienta resume texto con el uso de el <span class='brightness-200'>procesamiento del lenguaje natural</span> con la ayuda de <span class='brightness-200'>NLTK</span> para tokenizar, lematizar y procesar el texto.</p>
                      <a href="/modulo1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800   dark:bg-blue-600 dark:hover:bg-blue-700 ">
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
