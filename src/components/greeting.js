import React from 'react'
import Tyler from "../images/Tyler2.jpg"

 function Greeting() {
  var i=0
  var j=0
  var header="Hi, I'm Tyler"
  const subhead ="A front-end software engineer"
  var speed =40

  function H(){
   if (i<header.length) {
    document.getElementById("header").innerHTML += header.charAt(i);
    i++
    if(j<subhead.length){
      document.getElementById("subhead").innerHTML +=subhead.charAt(j)
      j++
    }
    setTimeout(H,speed)
   }
   console.log(j,i)
  }
  
  return (
    <div className='greeting' onLoad={H}>
      <img className='tyler' src={Tyler} alt='Tyler'/>
        <h1 id='header' ></h1>
        <p id='subhead' className='intro'></p>
    </div>
  )
}
export default Greeting