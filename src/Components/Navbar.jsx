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
                <a href="#!">Home</a>
            </li>
            <li>
                <a href="#!">Features</a>
            </li>
            <li>
                <a href="#!">Pricing</a>
            </li>
            <li>
                <a href="#!">Blog</a>
            </li>
        </ul>

        <button>Get Started</button>
      </nav>
    </div>
  )
}
