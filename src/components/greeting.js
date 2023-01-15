import React from 'react'
import Tyler from '../images/Tyler2.jpg'

 function Greeting() {
  return (
    <div className='greeting'>
      <img className='tyler' src={Tyler} alt='Tyler'/>
        <h1>Hi, I'm Tyler</h1>
        <p>A front-end software engineer</p>
    </div>
  )
}
export default Greeting