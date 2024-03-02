import React from 'react'
import Cards from '../cards/cards'
import './techstack.css'
export default function Techstacks() {


    
  return (
    <div className='techstacks' style={{margin:"6%"}}>
        <h1>Popular <div className='highlight'><span> Tech Stacks</span></div></h1>
    <div className='container'>
    <div className='row'>
    <div className='col'>
      <Cards/>
      </div><div className='col'>
      <Cards/>
      </div><div className='col'>
      <Cards/>
      </div>
      </div>
      </div>
    </div>
  )
}
