import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Navbar() {
  return (
    <div className='hidden sticky top-0 md:flex justify-between md:px-10 md:py-5 text-white bg-black'>
        <div className='font-name-font font-bold text-4xl '>
          <div className='md:block flex gap-5'><p>K i r t i </p><p>R a j p u t</p></div>
          <p className='md:hidden block text-2xl font-mono'>Model</p>
        </div>
        <div className='gap-10 md:flex hidden items-center text-xl'>
            <a className='hover:underline duration-300 no-underline' href="#about">About</a>
            <a className='hover:underline duration-300 no-underline' href="fvefv">Contact</a>
        </div>
        <div className='md:hidden block'>
        <FaArrowRightLong size={30} color='white'/>
        </div>
    </div>
  )
}

export default Navbar