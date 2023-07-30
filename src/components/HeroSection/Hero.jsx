import Image from 'next/image'
import React from 'react'
import style from './hero.module.css'

function Hero() {
    return (
        <div className='bg-bgColor'>
            <div className='grid lg:grid-cols-2 gap-2 items-center pt-8 mx-5 lg:mx-auto max-w-7xl'>
                <div className='flex flex-col justify-center w-10/12 mx-auto'>
                    <h1 className='font-bold text-5xl md:text-7xl md:leading-[84px] text-black'>One Step Closer To Your
                        <span className='text_decoration'> Dreamt Job</span></h1>
                    <p className='font-normal text-[16px] md:text-lg text-paragraph_color my-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div className=''>
                        <button className='my_button z-10'>Get Started</button>
                    </div>
                </div>

                <div className={style.hero_img}>
                    <Image src="/hero_img.svg" alt='logo' width={500} height={500} priority />
                </div>
            </div>
            <div className='w-full mt-[-100px] hidden lg:inline-flex'>
            <Image src="/wave.svg" className='mx-auto' alt='wave' width={2000} height={500} priority />
        </div>
            </div>
    )
}

export default Hero