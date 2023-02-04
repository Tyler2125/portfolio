import Stopwatch from "../images/StopWatch.jpeg"
import PixelArt from '../images/PixelArt.jpeg'
import Todo from '../images/Todo.jpg'
const showCase=[{
    id:1,
    Title:"JS Timer",
    Description:"A Stopwatch App created using HTML,CSS,and Vanilla JS.This App allows users to start and stop a timer that counts the seconds of a task being done.This app is not equipped to log time when refreshed.",
    image:Stopwatch,
    Languages:"HTML, CSS,Vanilla JS",
    liveDemo:function stopLive(){
        window.open('https://github.com/Tyler2125/JS-Stop-watch')
        },
    Code:function stopCode(){
        window.open('https://tyler2125.github.io/JS-Stop-watch/')
        }
},{
    id:2,
    Title:"JS Todo List",
    Description:"A dynamic app created using HTML,CSS and Vanilla JS that allows users to enter their tasks one by one and also delete completed tasks in groups or one by one. The App does not save entered tasks so refreshing will automatically reset the list and you will need to re-enter tasks.",
    image:Todo,
    Languages:"HTML, CSS,Vanilla JS",
    liveDemo:function todoLive(){
        window.open('https://tyler2125.github.io/Todolist/')
        },
    Code:function todoCode(){
        window.open('https://github.com/Tyler2125/Todolist')
        }
},{
    id:3,
    Title:"Pixel Art Maker",
    Description:"A Dynamic Pixel Art maker that allows you to set the canvas size and choose the colors you would like to draw with.This project was created with HTML,CSS and Vanilla JS. This project also does not save the design when refreshed.",
    image:PixelArt,
    Languages:"HTML, CSS,Vanilla JS",
    liveDemo:function pixelLive(){
        window.open("https://tyler2125.github.io/PixelMaker/")
},
    Code:function pixelCode(){
        window.open("https://github.com/Tyler2125/PixelMaker")
}
}]
export default showCase;