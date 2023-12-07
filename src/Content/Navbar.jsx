import React from 'react'

function Navbar() {
  return (
    <div className='sticky top-0 flex justify-between px-10 py-5 text-white bg-black'>
        <div className='font-name-font font-bold text-4xl '><p>K i r t i </p><p>R a j p u t</p></div>
        <div className='gap-10 flex items-center text-xl'>
            <a className='hover:underline duration-300 no-underline' href="#about">About</a>
            <a className='hover:underline duration-300 no-underline' href="fvefv">Contact</a>
        </div>
    </div>
  )
}

export default Navbar