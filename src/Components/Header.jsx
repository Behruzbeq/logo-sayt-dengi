import React, {  useEffect } from 'react'
import AOS from 'aos'
import Banner from '../assets/Banner.png'
export default function Header() {

useEffect(() => {
    AOS.init({ duration: 1000})
},[])
    
    return (
        <div>
            <header className='container mt-10 flex justify-between items-center'>
                <div className='max-w-[462px] w-full'>
                   
                        <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                             <h1 className='font-bold text-[80px] color-[#19191B] mb-[30px]'>Grow your
                        subscription
                        business</h1>
                    </div>
                         <p className='text-[20px] mb-[50px] text-[#696871]'>Outcome-centered products that
                        reduce churn, optimize pricing, and
                        grow your subscription business
                        end-to-end.</p>
                   
                    <button className='bg-[#5454D4] py-[19px] px-[60px] rounded-[20px]'>Get Started</button>
                </div>

                <div>
                    <img className='w-full h-full object-cover' src={Banner} alt="" />
                </div>
            </header>
        </div>
    )
}
