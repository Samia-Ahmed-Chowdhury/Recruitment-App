"use client"
import React from 'react'
import Image from 'next/image'
import style from './testimonial.module.css'
// import Swiper styles
import "swiper/swiper.css";
import 'swiper/swiper-bundle.css';
// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from 'swiper';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

function Testimonial() {
    const handleMouseEnter = (swiper) => {
        swiper.autoplay.stop();
      };
    
      const handleMouseLeave = (swiper) => {
        swiper.autoplay.start();
      };

    return (
        <div className='mt-20 mb-40'>
        <h3 className='text-4xl font-bold text-center mb-5 '>Top Featured Dolls</h3>
       <p className="lg:w-1/2 text-center mx-auto  mb-28">The whole world is an art gallery when you're mindful. There are beautiful things everywhere and they're free !!! <button className='btn-link'> Check Out </button> our Wonderful gallery collection!!</p>
        <div className="photo-container">
          <Swiper
            effect="coverflow"
            grabCursor="true"
            centeredSlides="true"
            spaceBetween={0}
            slidesPerView={4}
            loop="true"
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 2000, // Autoplay delay in milliseconds
              disableOnInteraction: false, // Enable autoplay even when the user interacts with the swiper
            }}
            coverflowEffect={{
              rotate: 20,
              stretch: 25,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            breakpoints={{
              700: {
                spaceBetween: 0,
                slidesPerView: 4,
              },
              500: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
              411: {
                spaceBetween: 100,
                slidesPerView: 1,
              },
              300: {
                spaceBetween: 0,
                slidesPerView: 1,
              }
            }}
          >
        <SwiperSlide  className=' border-4 border-primaryColor bg-white text-center py-5 '>
              <h5 className='text-2xl font-medium'>Princess Classic Doll</h5>
              
            </SwiperSlide>
            <SwiperSlide  className=' border-4 border-primaryColor bg-white text-center py-5 '>
              <h5 className='text-2xl font-medium'>Princess Classic Doll</h5>
              
            </SwiperSlide>
            <SwiperSlide  className=' border-4 border-primaryColor bg-white text-center py-5 '>
              <h5 className='text-2xl font-medium'>Princess Classic Doll</h5>
              
            </SwiperSlide>
            <SwiperSlide  className=' border-4 border-primaryColor bg-white text-center py-5 '>
              <h5 className='text-2xl font-medium'>Princess Classic Doll</h5>
              
            </SwiperSlide>
            <SwiperSlide  className=' border-4 border-primaryColor bg-white text-center py-5 '>
              <h5 className='text-2xl font-medium'>Princess Classic Doll</h5>
              
            </SwiperSlide>
            <SwiperSlide  className=' border-4 border-primaryColor bg-white text-center py-5 '>
              <h5 className='text-2xl font-medium'>Princess Classic Doll</h5>
              
            </SwiperSlide>
            <SwiperSlide  className=' border-4 border-primaryColor bg-white text-center py-5 '>
              <h5 className='text-2xl font-medium'>Princess Classic Doll</h5>
              
            </SwiperSlide>
            <SwiperSlide  className=' border-4 border-primaryColor bg-white text-center py-5 '>
              <h5 className='text-2xl font-medium'>Princess Classic Doll</h5>
    
              
            </SwiperSlide>
    
          </Swiper>
        </div>
        </div>
      );
}

export default Testimonial