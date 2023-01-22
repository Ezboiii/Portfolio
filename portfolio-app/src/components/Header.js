import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='portfolio-hero'>
    <div className='portfolio menu'>
    <ul className='nav-menu'>
    <li className='menu-item'><a href='#'>Home</a></li>
    <li class="menu-item"><a href="#about">About Me</a></li>
    <li class="menu-item"><a href="#skills">Skills</a></li>
    <li class="menu-item"><a href="#contact">Contact</a></li>
    </ul>
    <div className="portfolio-profile">
                    <img alt="profile-pic" src="assets/me.jpg"/>
                    <h1>Mateo S. Naz Jr.</h1>
                    <h2>Future Tambay</h2>
                </div>
    </div>
    </div>
  )
}
export default Header