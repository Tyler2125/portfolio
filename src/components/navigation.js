import React from 'react'
import DarkMode from './DarkMode'
import Tyler from '../images/Tyler.png'
import {Link}from 'react-scroll'
import {BiMenu}from 'react-icons/bi'
import Mobile from './buttons/mobilemenu'
function Navigation() {
const navBar=document.getElementById('navbar')
  return (
    <div id="navbar" >
      <Mobile/>
   <Link to='Home' smooth={true} duration={1000}> <img className='logo'  src={Tyler} alt="Tyler"/></Link>
      <ul className='links'>
      <li><Link to='Projects' smooth={true} duration={1000}><h4>Projects</h4></Link></li>
      <li><Link to='About' smooth={true} duration={1000}><h4>About</h4></Link></li>
      <li><Link to='Skills' smooth={true} duration={1000}><h4>Skills</h4></Link></li>
      <li><Link to='Contact' smooth={true} duration={1000}><h4>Contact</h4></Link></li>
      </ul>
      <DarkMode/>
    </div>
  
  )
}
export default Navigation