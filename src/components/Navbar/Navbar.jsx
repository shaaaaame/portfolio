import './Navbar.css';
import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
        <a href="#" className='nav-name'>hanxhengchew</a>
        <ul className='nav-list'>
            <li className='nav-item'>about</li>
            <li className='nav-item'>projects</li>
            <li className='nav-item'>contact</li>
        </ul>
    </nav>
  )
}

export default Navbar