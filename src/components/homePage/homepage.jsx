import React from 'react'
import Hero from '../herosection/hero'
import Navbar from '../navbar/navbar'
import Techstacks from '../techstaks/techstacks'
import Topmentors from '../topmentors/topmentors'
import Testimonial from '../testimonial/testimonial'
export default function Homepage() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Techstacks/>
      <Topmentors/>
      <Testimonial/>
    </>
  )
}
