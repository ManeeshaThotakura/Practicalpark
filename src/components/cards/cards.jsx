import React from 'react'
import './cards.css'
import stack from './ds.png'
export default function Cards() {
  return (
      <div className='card'>
            <img src={stack}/>
            <h2>Data Science</h2>
            <p>Members: 10000+</p>
            <button type="button" class="btn btn-primary">Explore More</button>
      </div>
  )
}
