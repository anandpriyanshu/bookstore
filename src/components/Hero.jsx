import React from 'react'
import { Books } from '../data'
const Hero = () => {
    return (
        <>

            <div>
                <div className='mt-16  md:mx-40 flex gap-28  '>
                    <div>
                        <h1 className='text-5xl font-bold mb-10'>Unlock Worlds,<br /> turn pages...</h1>
                        <p className='text-xl'>"Journey through the pages, find solace in words, and let the stories within shape your world."</p>

                    </div>

                    <div className='w-72 '>
                        <swiper-container loop="true" effect="cube" autoplay="true"  >
                            {
                                Books.map((ele, i) => (
                                    <swiper-slide key={i} >
                                        <img src={ele.book_cover} alt={ele.title} width="200px" />

                                    </swiper-slide>
                                ))
                            }
                        </swiper-container>

                    </div>
                </div>
            </div >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fillOpacity="1" d="M0,0L34.3,16C68.6,32,137,64,206,96C274.3,128,343,160,411,176C480,192,549,192,617,170.7C685.7,149,754,107,823,117.3C891.4,128,960,192,1029,229.3C1097.1,267,1166,277,1234,250.7C1302.9,224,1371,160,1406,128L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </>
    )
}

export default Hero