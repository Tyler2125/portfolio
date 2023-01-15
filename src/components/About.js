import React from 'react'
import { useState } from 'react'

export default function About() {
  const[display, setDisplay]=useState(false)
  const[display2,setDisplay2]=useState(false)
const displayText=()=>{
  setDisplay(!display)
  console.log(display)

}
const displayText2=()=>{
  setDisplay2(!display2)

  console.log(display2)

}
const buttonText=display? "Read less":'Read More'
const buttonText2=display2? "Read Less":'Read More'




  return (
    <div className=' about-section each-section' id='About'><h1>About</h1>
    <div className='column'>
    <h2>Coding Experience</h2>
    <p id='background'>I've been coding for almost 5 years now unprofessionally.<span>{display?null:'....'}</span><br/>{display?'Additionally, I\'m looking to obtain my first Front-end or Full stack position with a company willing to take a chance on someone with no professional experience.I\'m still learning as much as I can while still in a full time position as a Client and Technical Support Specialist.':null}</p><button className='coding' onClick={displayText}>{buttonText}</button>
    </div>
    <div className='column'>
    <h2>Hobbies</h2>
    <p id='hobbies'>On my spare time I like to watch movies, my favorite genres are Sci-Fi,Horror, and Action.<span>{display2?null:'....'}</span>{display2?'I also like to work on my car when i can as well as read books,'+'I\'m also an avid gym goer, I try to exercise at least 5 days out of the week and believe in healthy eating.Something I\'ve also taken an interest in is collecting funkopop figurines.':null}</p><button className='hobbies' onClick={displayText2}>{buttonText2}</button>
    </div>
    </div>
  )
}
