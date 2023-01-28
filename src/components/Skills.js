import React from 'react'
import js from '../images/js.png'
import css from '../images/css.png'
import html from '../images/html.png'
import react from '../images/react.png'
import node from '../images/node.png'
import sql from '../images/SQL.png'
export default function Skills() {
  return (
    <div id='Skills' className='each-section '>
            <h1>Skills</h1>
    <div className='skill-section'>
    <div className='skill-card'><img className='skill-img'src={html} alt="HTML"/>
    <h3>HTML</h3>
    </div>
    <div className='skill-card'><img className='skill-img' src={css} alt="css"/>    <h3>CSS3</h3>
</div>
    <div className='skill-card'><img className='skill-img' src={js} alt="javascript"/>    <h3>JavaScript</h3>
</div>
    <div className='skill-card'><img className='skill-img' src={react} alt="react"/>    <h3>React</h3>
</div>
    <div className='skill-card'><img className='skill-img'src={node} alt="Node"/>    <h3>Node.JS</h3>
</div>
    <div className='skill-card'><img className='skill-img' src={sql} alt="css"/>    <h3>SQL</h3>
</div>
    </div>
    </div>
  )
}
