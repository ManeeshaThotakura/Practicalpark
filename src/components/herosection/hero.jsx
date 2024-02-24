import React from 'react'
import './hero.css'
import heroimage from './hero.png'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='info'>
            <h1 style={{margin:"auto"}}>Learn from community and teach to the community</h1>
        </div>
        <div className='image'>
            <img src={heroimage} style={{maxWidth: "700px", maxHeight: "700px", margin:"auto"}} alt="hero image"/>
        </div>
    </div>
  )
}
