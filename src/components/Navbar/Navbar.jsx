import './Navbar.css';
import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
        <a href="#" className='nav-name'>hanxhengchew</a>
        <ul className='nav-list'>
            <li className='nav-item'><a>about</a></li>{/* add add href */}
            <li className='nav-item'><a>projects</a></li>{/* add add href */}
            <li className='nav-item'><a>contact</a></li>{/* add add href */}
        </ul>
    </nav>
  )
}

export default Navbar