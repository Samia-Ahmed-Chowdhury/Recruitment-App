'use client'
import Image from 'next/image';
import React from 'react'
import { HiArrowRight } from 'react-icons/hi2';
import style from './candidate.module.css'

function CandidateList({itemData}) {
    return (
        <div className='my-8'>
            <h3 className='mx-auto mb-8 text-3xl text-center font-bold text-black'>All Candidate</h3>
            <div>
                {
                    itemData.map(candidate =>
                        <div key={candidate.id} className={`grid grid-cols-[1fr,1fr,1fr,.1fr] gap-3 items-center ${style.box} mx-auto mb-4`}>
                            <div className='flex items-center gap-4 '>
                                <label className=" btn btn-ghost w-[70px] h-[70px] btn-circle avatar">
                                    <div className='w-full rounded-lg'>
                                        <Image src={candidate.image} alt='logo' width={100} height={100} className='' priority />
                                    </div>
                                </label>
                                <h1 className='font-semibold text-lg'>{candidate.name}</h1>
                            </div>
                            <h6 className='font-medium text-[17px]'>Location: <span className='text-[15px] text-paragraph_color'>{candidate.location}</span></h6>
                            <h6 className='font-medium text-[17px]'>Role: <span className='text-[15px] text-paragraph_color'>{candidate.role}</span></h6>
                            <div className='ml-auto'>
                                <HiArrowRight className='w-6 h-6 cursor-pointer text-[#9774FF]' />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CandidateList