import React from 'react'
import StopWatch from '../images/StopWatch.jpeg'
import PixelArt from '../images/PixelArt.jpeg'
import Todo from '../images/Todo.jpg'
import Construction from '../images/Under-construction.jpg'

export default function Projects() {
function stopLive(){
window.open('https://github.com/Tyler2125/JS-Stop-watch')
}
function stopCode(){
window.open('https://tyler2125.github.io/JS-Stop-watch/')
}
function todoLive(){
        window.open('https://tyler2125.github.io/Todolist/')
        }
        function todoCode(){
                window.open('https://github.com/Tyler2125/Todolist')
                }



  return (
        // Id is used for navigation
    <div id='Projects' className=' each-section'><h1>Projects</h1>
        <div className='project-section'>
        <div className='project-card js-timer'>
          <h3>JS Timer</h3>
          <img className='project-img' src={StopWatch} alt='JS Stopwatch'/>
          <p>A Stopwatch App created using HTML,CSS,and Vanilla JS.This App allows users to start and stop a timer that counts the seconds of a task being done.This app is not equipped to log time when refreshed.
</p>
<button onClick={stopCode} className='project-button'>Live Demo</button>
<button onClick={stopLive} className='project-button'>View Code</button>

        </div>
        <div className='project-card todo-list'>
        <h3>JS Todo List</h3>
        <img className='project-img' src={Todo}/>
        <p>A dynamic app created using HTML,CSS and Vanilla JS that allows users to enter their tasks one by one and also delete completed tasks in groups or one by one. The App does not save entered tasks so refreshing will automatically reset the list and you will need to re-enter tasks.</p>
        <button onClick={todoCode} className='project-button'>View Code</button>
<button onClick={todoLive}className='project-button'>Live Demo</button>
        </div>
        <div className='project-card'>
        <h3>Pixel Art Maker</h3>
        <img className='project-img' src={PixelArt} alt='Pixel Art'/>
        <p>A Dynamic Pixel Art maker that allows you to set the canvas size and choose the colors you would like to draw with.This project was created with HTML,CSS and Vanilla JS. This project also does not save the design when refreshed.</p>
        <button className='project-button'>View Code</button>
<button className='project-button'>Live Demo</button>
        </div>
</div>

    </div>
  )
}
