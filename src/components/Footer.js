import React from 'react'
import{BsLinkedin}from 'react-icons/bs'
import{FaGithubAlt}from 'react-icons/fa'
export default function Footer() {

  return (
    <div><footer className='socials'>
      <p>Sync up with me!</p>
      <div  className='icons'>
        <a href='https://www.linkedin.com/in/tylerbakker35699864/'>
      <BsLinkedin size={25}/>
      </a>
      </div>
<div className='icons'>
  <a href='https://github.com/Tyler2125'>
      <FaGithubAlt size={25}/>
      </a>
      </div>
      <h6>©Tyler Bakker 2022</h6>
        </footer></div>
  )
}
