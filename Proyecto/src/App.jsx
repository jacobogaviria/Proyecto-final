import { useState } from 'react'
import { Modulos } from './Modulos.jsx'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { Resumen_front } from './resumen-front.jsx'
import { Modulo_traducir } from './traduccion-front.jsx'
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Modulos/>}/>
          <Route path='/modulo1' element={<Resumen_front/>}/>
          <Route path='/modulo2' element={<Modulo_traducir/>}/>
          
        </Routes>
      </Router>
    </>
  )
}

export default App
