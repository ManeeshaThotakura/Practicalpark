import React from 'react'
import mentor1 from './mentor1.png'
import mentor2 from './mentor2.png'
import './topmentor.css' 
export default function Topmentors() {
  return (
    <div className="topmentors ">
        <h1>Here are our <div className='highlight'><span>Top Mentors</span></div></h1>
      <div className=" mentor1">
          <div className='personImage'>
               <img src={mentor1} style={{ width:"110%", height:"100%"}} alt='mentor image'/>
          </div>
          <div className='personInfo'>
                <h2>Artificial Intelligence for computer vision</h2>
                <p>AI for Computer Vision teaches machines to understand visual data.  it covers image processing, object recognition, and deep learning, empowering students for real-world applications.</p>
          </div>
      </div>
      <div className=" mentor2">
          <div className='personInfo'>
                <h2>Artificial Intelligence for computer vision</h2>
                <p>AI for Computer Vision teaches machines to understand visual data.  it covers image processing, object recognition, and deep learning, empowering students for real-world applications.</p>
          </div>
          <div className='personImage'>
               <img src={mentor2} style={{maxWidth: "120%", maxHeight: "110%"}} alt='mentor image'/>
          </div>
      </div>
    </div>
  )
}
