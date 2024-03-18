"use client"
import React from 'react'
import './App.css'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Main from './Components/Main'
import Skills from './Components/Skills'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Education from './Components/Education'

const App = () => {
  return (
    <>
      <Navbar/>
      <Main/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <Footer/>
  </>
  )
}

export default App