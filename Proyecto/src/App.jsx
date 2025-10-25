import { Modulo_deteccion_imagenes } from './deteccion_imagenes.jsx'
import { Modulos } from './Modulos.jsx'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { Resumen_front } from './resumen-front.jsx'
import { Modulo_traducir } from './traduccion-front.jsx'
import {GenerarCodigo} from './generar_codigo.jsx'


function App() {

  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Modulos/>}/>
          <Route path='/modulo1' element={<Resumen_front/>}/>
          <Route path='/modulo2' element={<Modulo_traducir/>}/>
          <Route path='/modulo3' element={<Modulo_deteccion_imagenes/>}/>
          <Route path='/modulo4' element={<GenerarCodigo/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
