"use client"

import React from 'react'
import { HiBriefcase,HiTrophy,HiUserGroup,HiHomeModern } from 'react-icons/hi2';
import CountUp from "react-countup";
import style from './CountDown.module.css'

function CountDown() {
    return (
        <div className='py-4 mt-28 mb-10 md:my-0'>
            <div className='grid lg:grid-cols-4 gap-8 pt-6 pb-4 justify-center mx-5 lg:mx-auto max-w-7xl'>
                {
                    cardData.map((ele) =>
                        <div key={ele.id} className={`card w-56 text-center ${style.box}`}>
                            <div className="card-body text-black">
                                <p className='flex justify-center text-[30px] md:text-[40px] mb-2 '>{ele.icon}</p>

                                <h2 className="card-title justify-center font-bold text_decoration text-2xl">
                                    <CountUp className='tex' end={ele.count} duration={10} enableScrollSpy />+</h2>
                                <p className='text-paragraph_color font-semibold '>{ele.title}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const cardData = [
    {
        "id": 1,
        "icon": <HiTrophy />,
        "count": 930,
        "title": "Hiring"
    },
    {
        "id": 2,
        "count": 2010,
        "icon": <HiBriefcase />,
        "title": "Jobs"
    },
    {
        "id": 3,
        "count": 3000,
        "icon": <HiUserGroup />,
        "title": "Candidate"
    },
    {
        "id": 4,
        "count": 200,
        "icon": <HiHomeModern />,
        "title": "Company"
    },
]



export default CountDown