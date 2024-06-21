import React from 'react'
import hero from '/hamster.png'


function Hero() {
  return (
    <div className="hero">
        <img src={hero} alt="hamster" />
        <h1>Hamster Rescue</h1>
        <p>Creature of the night, your eyes shine so bright</p>
        <button>Adopt a hamster</button> <button>Rehome your hamster</button>

    </div>
   
)
}

export default Hero