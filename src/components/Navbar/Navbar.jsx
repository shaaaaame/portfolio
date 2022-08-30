import './Navbar.css';
import React from 'react'
import { Link } from 'react-scroll';
import menuIcon from '../../assets/menu.svg';

function Navbar() {
  return (
    <nav className='nav'>
        <a href="#" className='nav-name'>hanxhengchew</a>
        <ul className='nav-list'>
            <li className='nav-item'><a>about</a></li>{/* add add href */}
            <li className='nav-item'><Link to='projects' smooth={true} duration={1000}>projects</Link></li>
            <li className='nav-item'><Link to='contact' smooth={true} duration={1000}>contact</Link></li>{/* add add href */}
        </ul>
        <div className='nav-menu'>
          <img className='nav-menu-icon' src={menuIcon} alt='menu'/>
        </div>  
    </nav>
  )
}

export default Navbar