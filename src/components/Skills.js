import React from 'react'
import Skillset from '../data/SkillSet'

export default function Skills() {
  return (
    <div id='Skills' className='each-section '>
            <h1>Skills</h1>
    <div className='skill-section'>
   {Skillset.map((skill)=>{return <div key={skill.id} className='skill-card'>
    <h3>{skill.Title}</h3>
    <img  className="skill-img"alt={skill.Alt} src={skill.Image}/>
   </div>})}
    </div>
    </div>
  )
}
