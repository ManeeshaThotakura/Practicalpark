import React from 'react'
import quoteimg from './testimonial_quotes_jpg.png'
import personimg from './durga1.jpeg'
import './testimonial_card.css'
export default function Testimonial_cards() {
  return (
    <>
                  <div class="swiper-slide testimonial_card">
                <img src={quoteimg}/>

                <div class="card_message">
                    <p>"The free educational platform transformed my learning experience, offering diverse resources and personalized support for academic growth and success,"The platform's accessibility and interactive features make learning engaging and effective for students worldwide."</p>
                </div>
                <div class="card_profile_bottom">
                    <div class="card_profile_photo">
                        <img src={personimg}/>
                    </div>
                    <div class="card_profile_name">
                        <h4>Durga</h4>
                        <p>Product Manager Google</p>
                    </div>
                </div>
                </div>
    </>
  )
}
