import { useState } from 'react'
import { Modulos } from './Modulos.jsx'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { Pruebarutas } from './Pruebarutas.jsx'
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Modulos/>}/>
          <Route path='/Pruebarutas' element={<Pruebarutas/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
