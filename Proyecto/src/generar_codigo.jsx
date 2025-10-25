import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


// Se añade un estado de carga (isLoading) y de error (error) para mejorar la UX.
export function GenerarCodigo() {
  const [lenguaje, setLenguaje] = useState("");
  const [Texto, setTexto] = useState("");
  const [Codigo_generado, setCodigo_generado] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Nuevo estado de carga
  const [error, setError] = useState(null); // Nuevo estado para errores
  const [copied, setCopied] = useState(false); // Estado para el botón de copiar

  const mandarAlBackend = async () => {
    // 1. Validaciones previas
    if (!Texto || !lenguaje) {
      setError("Por favor, introduce una descripción y selecciona un lenguaje.");
      setCodigo_generado(""); // Limpiar código anterior si hay un error de validación
      return;
    }

    setIsLoading(true); // Iniciar carga
    setError(null); // Limpiar errores previos
    setCodigo_generado(""); // Limpiar resultado anterior

    try {
      const res = await fetch("http://127.0.0.1:8000/generate-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: Texto, language: lenguaje })
      });

      if (!res.ok) {
        // Manejo de errores HTTP (ej: 404, 500)
        throw new Error(`Error al generar código: ${res.statusText}`);
      }

      // convierte la respuesta en JSON
      const data = await res.json();

      // En tu backend debes asegurarte de que la clave es 'generated_code'.
      // Si la respuesta es vacía o inesperada, puedes manejarlo aquí.
      setCodigo_generado(data.generated_code || "No se pudo generar código. Inténtalo de nuevo.");
    } catch (err) {
      console.error("Error:", err);
      setError(`Error de red o servidor: ${err.message}`);
    } finally {
      setIsLoading(false); // Finalizar carga
    }
  };
  
  // Función para copiar el código
  const copyToClipboard = () => {
    navigator.clipboard.writeText(Codigo_generado);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Mostrar "Copiado!" por 2 segundos
  };

  return (
    <div>
      {/* HEADER - Se deja tu implementación actual de la barra de navegación (Flowbite/Tailwind) */}
      <header className='sticky top-0 left-0 w-full z-50'>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-b-2">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-10 w-10" alt="Flowbite Logo" />
              <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">TextVision AI</span>
            </a>
            {/* ... Menú de navegación (omito por brevedad, se mantiene el tuyo) ... */}
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {/* Enlaces de navegación */}
                <a href="/" className="group w-30 h-10 rounded-lg p-5 flex flex-row items-center hover:scale-110 duration-110 gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
                    <svg className="w-8 h-8 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/></svg>
                    <p className="text-white ">Home</p>
                </a>
                <li className="hover:scale-110 duration-110 group w-40 h-10 rounded-lg p-5 flex flex-row items-center gap-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm md:p-0 md:w-auto" type="button">
                        <svg className="w-8 h-8 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.9" d="M5 7h14M5 12h14M5 17h14"/></svg>
                        Servicios
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/></svg>
                    </button>
                    <div id="dropdownNavbar" className="z-10 hidden font-normal rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ">
                        <ul className="py-2 rounded-lg text-white text-sm bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700" aria-labelledby="dropdownNavbarLink">
                            <li><a href="/modulo1" className=" block px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ">RESUMIR</a></li>
                            <li><a href="/modulo2#" className="block px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">TRADUCTOR</a></li>
                            <li><a href="/modulo3" className="block px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">DETECCION</a></li>
                            <li><a href="/modulo4" className="block px-4 py-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">Generar codigo</a></li>
                            
                        </ul>
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      {/* HERO SECTION */}
      <section className='w-full h-70 bg-gray-900 p-10'>
        <h1 className='text-5xl font-bold text-white '>Potencia tu productividad con inteligencia artificial</h1>
        <p className='text-lg text-gray-500 text-bold brightness-200 mt-10 px-90'>
          Genera código de manera instantánea en tu lenguaje preferido.
        </p>
      </section>

      {/* FORM AND RESULTS SECTION */}
      <section className='m-20 p-10 rounded-lg shadow-lg bg-white dark:bg-gray-800'>
        <h2 className='text-3xl font-bold mb-6 text-gray-900 dark:text-white'>Generador de Código AI</h2>
        
        {/* INPUT DE DESCRIPCIÓN */}
        <textarea
          className="block p-2.5 w-full h-40 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
          type="text"
          placeholder='Describe el código que deseas generar, ej: "Función en Python para calcular el n-ésimo número de Fibonacci"'
          onChange={(e) => setTexto(e.target.value)}
          value={Texto}
        />

        {/* SELECTOR DE LENGUAJE */}
        <label htmlFor="lenguajes" className="text-left block mt-2 text-sm font-medium text-gray-900 dark:text-white">Lenguaje de programación</label>
        <select
          id="lenguajes"
          className='w-full sm:w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-6'
          value={lenguaje}
          onChange={(e) => setLenguaje(e.target.value)}
        >
          <option value="" disabled hidden>Seleccione el lenguaje deseado</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="java">Java</option>
          <option value="php">PHP</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="bash">Bash / Shell</option>
          <option value="sql">SQL</option>
          <option value="csharp">C#</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
          <option value="swift">Swift</option>
          <option value="ruby">Ruby</option>
          <option value="kotlin">Kotlin</option>
          <option value="r">R</option>
          <option value="matlab">MATLAB</option>
          <option value="lua">Lua</option>
        </select>

        {/* BOTÓN DE GENERAR CÓDIGO */}
        <button
          className='mb-10 inline-flex items-center justify-center px-6 py-3 text-lg rounded-lg font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:opacity-50 transition-all duration-200'
          onClick={mandarAlBackend}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              GENERANDO...
            </>
          ) : (
            "GENERAR CÓDIGO"
          )}
        </button>
        
        {/* MENSAJE DE ERROR */}
        {error && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400" role="alert">
            <span className="font-medium">¡Error!</span> {error}
          </div>
        )}

        {/* VISUALIZACIÓN DEL CÓDIGO GENERADO */}
        <h3 className='text-2xl font-bold mb-3 text-gray-900 dark:text-white'>Resultado</h3>
        <div className='relative w-full rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600'>
            {Codigo_generado ? (
                <>
                    {/* Botón de copiar */}
                    <button 
                        onClick={copyToClipboard}
                        className='absolute top-2 right-2 p-2 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 z-10'
                    >
                        {copied ? '✅ Copiado!' : '📋 Copiar Código'}
                    </button>
                    {/* Utiliza SyntaxHighlighter para un formato de código profesional */}
                    <SyntaxHighlighter 
                        language={lenguaje || 'text'} 
                        style={vscDarkPlus} 
                        showLineNumbers={true}
                        customStyle={{ padding: '20px', margin: 0, height: 'auto', minHeight: '320px', borderRadius: '0.5rem', fontSize: '0.9rem' }}
                    >
                        {Codigo_generado}
                    </SyntaxHighlighter>
                </>
            ) : (
                <textarea 
                    className="block p-4 w-full h-80 text-sm text-gray-900 bg-gray-100 rounded-lg dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder={isLoading ? "Esperando código..." : "El código generado aparecerá aquí..."}
                    value="" // Se mantiene vacío ya que el código se muestra en SyntaxHighlighter
                    readOnly
                />
            )}
        </div>

      </section>
    </div>
  );
}

