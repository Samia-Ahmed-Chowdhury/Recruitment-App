"use client"

import React from 'react'
import Image from 'next/image'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';

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
    <div className='my-28  mx-auto max-w-7xl'>
     <div className='my-8 md:my-12'>
     <h2 className='w-full md:w-1/2 text-center  mx-auto text-3xl md:text-4xl font-semibold'>We bring Solutions to make life easier for our customer  
     </h2>
     <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="33" height="67" viewBox="0 0 33 67" fill="none">
<path d="M26.0104 35.648L24.1668 34.8725L24.1722 34.86L26.0104 35.648ZM14.8304 65.8717C13.8076 66.2887 12.6403 65.7977 12.2232 64.7749L5.4265 48.1074C5.00942 47.0846 5.50045 45.9174 6.52325 45.5003C7.54605 45.0832 8.7133 45.5743 9.13038 46.5971L15.1719 61.4126L29.9874 55.3711C31.0102 54.954 32.1775 55.445 32.5946 56.4678C33.0117 57.4906 32.5206 58.6579 31.4978 59.0749L14.8304 65.8717ZM27.8539 36.4235L15.9187 64.7952L12.2316 63.2442L24.1668 34.8725L27.8539 36.4235ZM24.1722 34.86C25.6091 31.5083 26.2825 25.9165 23.4384 20.2697C20.6154 14.665 14.1522 8.66958 0.674452 4.83911L1.76797 0.991491C15.9748 5.02917 23.5422 11.5838 27.0108 18.4704C30.4581 25.3147 29.6838 32.1552 27.8486 36.4361L24.1722 34.86Z" fill="url(#paint0_linear_65_5)"/>
<defs>
<linearGradient id="paint0_linear_65_5" x1="6.87845" y1="1.14086" x2="25.479" y2="60.4428" gradientUnits="userSpaceOnUse">
<stop stopColor="#7E90FE"/>
<stop offset="1" stopColor="#9873FF"/>
</linearGradient>
</defs>
</svg>
     </div>
  
    
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
          {
            testimonialArray.map(person =>
              <SwiperSlide key={person.id} className=' border-4 border-primaryColor bg-white text-center p-8 '>
                <label className="btn btn-ghost w-[150px] h-[150px] btn-circle avatar">
                  <div className='w-full rounded-full'>
                    <Image src={person.img_src} alt='logo' width={100} height={100} className='' priority />
                  </div>
                </label>
                <h5 className='text-2xl font-medium'>{person.name}</h5>
                <p className='text-[16px] text-paragraph_color my-4'>{person.post}</p>
                <p className='font-bold mt-2'>
                  <Rating className='text-[#9774FF]'
                    placeholderRating={person.rating}
                    emptySymbol={<FaStarHalfAlt />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                    readonly
                  /> {person.rating}
                </p>
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
      </div>
    
  );
}

const testimonialArray = [
  {
    "id": 1,
    "img_src": "https://images.unsplash.com/photo-1584339312444-6952d098e152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGhpamFifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "name": "Nadia Chowdhury",
    "post": "We used the app to evaluate and rank candidates, and it greatly simplified the process and helped us make informed hiring decisions.",
    "rating": 4.4
  },
  {
    "id": 2,
    "img_src": "https://images.unsplash.com/photo-1459356979461-dae1b8dcb702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "name": "Fardin Ahmed",
    "post": "The app's candidate search feature allowed us to easily find qualified candidates based on specific job roles and locations. ",
    "rating": 4.1
  },
  {
    "id": 3,
    "img_src": "https://images.unsplash.com/photo-1460056560479-46cf73637e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "name": "Saif Ahmed",
    "post": "I was impressed by the efficiency and effectiveness of the online recruitment solution. It streamlined our hiring process and saved us a significant amount of time",
    "rating": 5
  },
  {
    "id": 4,
    "img_src": "https://images.unsplash.com/photo-1530797195762-6e542a0f1843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybCUyMGhpamFifGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "name": "Samia Chowdhury",
    "post": "We used the app to evaluate and rank candidates, and it greatly simplified the process and helped us make informed hiring decisions.",
    "rating": 4.7
  },
  {
    "id": 5,
    "img_src": "https://images.unsplash.com/photo-1508852951744-beab078a4b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "name": "Sam Ahmed",
    "post": "The app's candidate search feature allowed us to easily find qualified candidates based on specific job roles and locations. ",
    "rating": 3.4
  },
  {
    "id": 6,
    "img_src": "https://images.unsplash.com/photo-1536463726684-434ca0eeea33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmwlMjBoaWphYnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "name": "Fahima Ahmed",
    "post": "I was impressed by the efficiency and effectiveness of the online recruitment solution. It streamlined our hiring process and saved us a significant amount of time",
    "rating": 4.4
  },
  {
    "id": 7,
    "img_src": "https://images.unsplash.com/photo-1506968695017-764f86a9f9ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "name": "Farhan Ahmed",
    "post": "The app's candidate search feature allowed us to easily find qualified candidates based on specific job roles and locations.",
    "rating": 4.9
  },
]

export default Testimonial