import React from 'react'
import Navtab from './Navtab'

function Navbar() {
    let navbarCategories = [
        "Home", 
        "Products", 
        "About", 
        "Contact"
    ]
    return (
    <div className="navbar">
        <Navtab title={navbarCategories[0]} />
        <Navtab title={navbarCategories[1]} />
        <Navtab title={navbarCategories[2]} />
        <Navtab title={navbarCategories[3]} />
    </div>
  )
}

export default Navbar