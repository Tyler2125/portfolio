import React from 'react'
import{BsLinkedin}from 'react-icons/bs'
import{FaGithubAlt}from 'react-icons/fa'
export default function Footer() {
  return (
    <div><footer className='socials'>
      <p>Sync up with me!</p>
      <div className='icons'>
      <BsLinkedin size={25}/>
      </div>
<div className='icons'>
      <FaGithubAlt size={25}/>
      </div>
      <h6>©TylerBakker 2022</h6>
        </footer></div>
  )
}
