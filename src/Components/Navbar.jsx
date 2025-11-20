import React from 'react'
import Logo from '../assets/img1.svg'

export default function Navbar() {
  return (
    <div>
      <nav className='container mx-auto flex justify-between items-center mt-4'>


        <a href="#!">
            <img src={Logo} alt="" />
        </a>

        <ul className='flex gap-5 items-center'>
            <li>
                <a className=' font-bold text-[#696871]' href="#!">Home</a>
            </li>
            <li>
                <a className=' font-bold text-[#696871]' href="#!">Features</a>
            </li>
            <li>
                <a className=' font-bold text-[#696871]' href="#!">Pricing</a>
            </li>
            <li>
                <a className=' font-bold text-[#696871]' href="#!">Blog</a>
            </li>
        </ul>

        <button className='py-[19px] px-[60px] bg-[#FF7143]  '>Get Started</button>
      </nav>
    </div>
  )
}
