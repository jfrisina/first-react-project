import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AdoptionCards from './components/AdoptionCards.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Navbar />
    < Hero />

    <h2>Hamsters for Adoption</h2>
    < AdoptionCards />



       
      
      
    </>
  )
}

export default App
