import React,{useState} from 'react'
import {BsFillSunFill,BsFillMoonStarsFill}from 'react-icons/bs'
 function DarkMode() {
 const[dark,setDark]=useState(true)
 const portBody=document.body

 function darken(){
  setDark(!dark)
  dark? portBody.classList.add('darkbody'):portBody.classList.remove('darkbody')
 }
  return (
    <div>
        <button onClick={darken} className='darkMode'>{dark?<BsFillMoonStarsFill color='#50577A' size={24}/>:<BsFillSunFill color='orange' size={24}/>}</button>
    </div>
  )
}
export default DarkMode