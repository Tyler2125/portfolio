import React, { Component } from 'react'
import * as THREE from "three"
const scene = new THREE.Scene();
export class threeScene extends Component {
    componentDidMount(){
        //scene
        this.scene=new THREE.scene()
        //renderer
        this.renderer= new THREE.WebGLRenderer()
        this.render.setSize(window.innerWidth,window.innerHeight)
        //camera
        this.camera= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.5)
    }
  render() {
    return (
      <div ref={mount=>{this.mount=mount}}></div>
    )
  }
}

export default threeScene