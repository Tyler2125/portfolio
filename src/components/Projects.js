import React from 'react'
import showCase from '../data/ShowCase'

  function Projects() {



        



  return (
        // Id is used for navigation
    <div id='Projects' className=' each-section'>
      <h1>Projects</h1>
      <div className='project-section'>
        {showCase.map((item)=>{return<div key={item.id} className='project-card'><h1>{item.Title}</h1><img className='project-img' alt={item
        .Title} src={item.image}/>
<p>{item.Description}</p>
<button className='project-button' onClick={item.Code}>View Code</button>
<button className='project-button' onClick={item.liveDemo}>View Demo</button>
        </div>})}
        </div>
    </div>
  )
}
export default Projects;