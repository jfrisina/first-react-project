import React from 'react'

function Cards( { cardImage, cardTitle, location }) {
  return (
    <div className="card">
        <img class="img-card" src={cardImage} alt="" />
        <h3>{cardTitle}</h3>
        <p>{location}</p>
        <button>Read More</button>
    </div>
  )
}

export default Cards