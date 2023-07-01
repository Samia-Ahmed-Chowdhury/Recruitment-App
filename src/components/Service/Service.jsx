import React from 'react'
import Image from 'next/image'
import style from './service.module.css'

function Service() {
    return (
        <div className='flex flex-col lg:flex-row gap-5 lg:px-12 px-5 my-24 lg:my-40'>
            <div className={`${style.downCard} mb-8 lg:mb-0 lg:w-[60%] text-center text-[30px] font-semibold`}>
                <h3 className='lg:w-[90%] mx-auto my-auto text-black'>Provide Best Service With Our Tools</h3>
                <button className="my_button mt-5 ">Discover More</button>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 flex-grow-1 '>
                {
                    cardInfo.map(item =>
                        <div key={item.id}
                            data-aos={item.aos}
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="3500"
                            className={`${item.down && style.downCard}  ${style.card_shadow} h-96 downTop py-8 card rounded-none  bg-base-100`}>
                            <Image className="mx-auto" src={item.img_src} alt='logo' width={140} height={50} priority />

                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto text-center">{item.heading}</h2>
                                <p className=''>{item.detail}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const cardInfo = [
    {
        "id": 1,
        "aos": "fade-right",
        "img_src": "/candidateSearch.svg",
        "heading": "Candidate Search",
        "detail": "Efficiently find qualified candidates based on location and job roles using our powerful search functionality."
    },
    {
        "id": 2,
        "aos": "zoom-in",
        "down":"downCard",
        "img_src": "/undraw_collaboration_re_vyau.svg",
        "heading": "Seamless Collaboration",
        "detail": "Streamline communication and collaboration between hiring managers, HR professionals, and team members throughout the recruitment process."
    },
    {
        "id": 3,
        "aos": "fade-left",
        "img_src": "/evaulation.svg",
        "heading": "Efficient Evaluation",
        "detail": "Rank and evaluate candidates easily with our intuitive evaluation tools, helping you make informed hiring decisions."
    }
]

export default Service