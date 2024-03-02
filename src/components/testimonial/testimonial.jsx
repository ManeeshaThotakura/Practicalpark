import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial_cards from './testimonial_cards'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './testimonial.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className='contain-testimonial'>
    <h1>Testimonial Part</h1>
      <Swiper
        cssMode={true}
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true
        }}
        breakpoints= {{
            320: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3.5,
              },
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
        <SwiperSlide><Testimonial_cards/></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
