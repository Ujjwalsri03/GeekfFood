import { useState } from 'react'
import Restraurant from './Container/Restraurants/Restraurants'
import Navbar from './components/Header/Navbar'
import Home from './Container/Home/Home'
import ImageSection from './components/ImageSection/ImageSection'
// import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Home />
    <ImageSection />
    </>
  )
}

export default App
