import React from 'react'
import './hero.css'
import heroimage from './hero.png'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='info'>
            <h1>Join diverse communities to both <div className='highlight'>Teach</div> and <div className='highlight'>Learn</div> online</h1>
            <p style={{fontSize:"22px"}}> Enjoy live classes, expert guidance, and doubt-solving support. Create or join communities tailored to your interests, fostering collaborative learning experiences. Start exploring your potential today!</p>
        </div>
        <div className='image'>
            <img src={heroimage} style={{maxWidth: "80%", maxHeight: "80%", margin:"auto"}} alt="hero image"/>
        </div>
    </div>
  )
}
