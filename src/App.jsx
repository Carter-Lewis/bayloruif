import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import About from './Components/About/About.jsx'
import Cohorts from './Components/Cohorts/Cohorts.jsx'
import './index.css'
import SmoothScrolling from './Components/SmoothScrolling.jsx'

function App() {
  return (
    <>
    <SmoothScrolling>
      <Navbar />
      <Hero />
      <About />
      <Cohorts />
    </SmoothScrolling>
    </>
  )
}

export default App