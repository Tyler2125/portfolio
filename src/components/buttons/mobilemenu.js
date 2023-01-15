import React,{useState}from 'react'
import {BiMenu}from 'react-icons/bi'
import{AiFillCloseCircle}from 'react-icons/ai'
import {Link}from 'react-scroll'

function Mobile() {
    const[hiddenMenu,setHiddenMenu]=useState(true)

function showMenu(){
    setHiddenMenu(!hiddenMenu)
}
function closeMenu(){
    setHiddenMenu(!hiddenMenu)
}
  return (
    <div >
    <div>
      <BiMenu size={32} className="hamburger" onClick={showMenu}/>
    </div>
    <ul className={hiddenMenu?'mobile-nav':'show-mobile'} >
    <li><Link onClick={closeMenu} to='Home' smooth={true} duration={1000}><h4>Home</h4></Link></li>
    <li><Link onClick={closeMenu}to='Projects' smooth={true} duration={1000}><h4>Projects</h4></Link></li>
      <li><Link onClick={closeMenu} to='About' smooth={true} duration={1000}><h4>About</h4></Link></li>
      <li><Link onClick={closeMenu} to='Skills' smooth={true} duration={1000}><h4>Skills</h4></Link></li>
      <li><Link  onClick={closeMenu}to='Contact' smooth={true} duration={1000}><h4>Contact</h4></Link></li> 
    </ul>
    </div>
  )
}

export default Mobile
 