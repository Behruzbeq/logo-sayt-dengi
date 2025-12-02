import React, {  useEffect } from 'react'
import subs from "../assets/subs.png"
import AOS from 'aos'


export default function  main () {

useEffect(() => {
    AOS.init({ duration: 1000})
},[])


   
        return (
            <div className='container mx-auto flex justify-between items-center mb'>
                <div>
                    <img src={subs} alt="" />
                </div>

                <div className='max-w-[459px] w-full'>
                
                             <h1 className='text-[50px] mb-[30px] font-bold'>Subscription index</h1>
                   
                
                    <p className='text-[20px] mb-[30px]'>A daily dataset to keep you up to date on
                        subscription market trends
                        and what's happening in your vertical.</p>

                    <a className='text-blue-400 border-b-blue-400 border-b-2' href="#!">Learn More</a>   
                </div>
            </div>
        )
    
}
