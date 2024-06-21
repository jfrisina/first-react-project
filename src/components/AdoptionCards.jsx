import React from 'react'
import Card from './Cards.jsx'
import adoptImage from '../../public/adopt-me.png'

function AdoptionCards() {
    let hamstersForAdoption = [
        "Pumpkin", 
        "Bear", 
        "Bella", 
        "Marshmallow", 
        "Penny", 
        "Peach"
    ]

    return (
    <div className="adopt-cards">
        < Card cardImage={adoptImage} cardTitle={hamstersForAdoption[0]} location="Seattle, WA" />
        < Card cardImage={adoptImage} cardTitle={hamstersForAdoption[1]} location="Portland, OR" />
        < Card cardImage={adoptImage} cardTitle={hamstersForAdoption[2]} location="Seattle, WA" />
        < Card cardImage={adoptImage} cardTitle={hamstersForAdoption[3]} location="Seattle, WA" />
        < Card cardImage={adoptImage} cardTitle={hamstersForAdoption[4]} location="Seattle, WA" />
        < Card cardImage={adoptImage} cardTitle={hamstersForAdoption[5]} location="Seattle, WA" />
    </div>
  )
}

export default AdoptionCards