import { useState } from 'react'
import Restraurant from './Container/Restraurants/Restraurants'
import Navbar from './components/Header/Navbar'
import Home from './Container/Home/Home'
import ImageSection from './components/ImageSection/ImageSection'
import GridCard from './components/GridComponent/GridCard'
import Foooter from './components/Footer/Foooter'
// import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <ImageSection />
      <GridCard />
      <Foooter/>
    </>
  )
}

export default App
