import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Web1 from './pages/Portfolio/Web1'
import './App.scss'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cafe-drove' element={<Web1/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
