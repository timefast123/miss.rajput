import React from 'react'
import Profile from './../Images/15.jpeg'
import { FaArrowRight } from "react-icons/fa6";

function Home() {
  return (
    <div className='h-[100%] md:h-screen bg-pink-400 text-white w-[100%] md:flex items-center px-10'>
        <div className='w-50% md:py-0 py-6 px-12 md:block flex justify-center'>
            <div className='md:hidden flex items-center pr-4 text-2xl font-name-font font-semibold'>K I R T I</div>
            <img src={Profile} alt='DP'/>
            <div className='md:hidden flex items-center pl-4 text-2xl font-name-font font-semibold'>R A J P U T</div>
        </div>
        <div className='md:w-[50%] md:[50%] h-fit overscroll-y-auto no-scrollbar'>
            <h1 className='text-2xl uppercase'>About Me!!</h1>
            <p className='text-justify overflow-y-auto h-fit no-scrollbar'>As a model, I see myself as a storyteller, using every pose, every expression, and every movement to narrate tales of elegance, strength, and sophistication. My ambition is to not just be seen but to inspire—empowering individuals to embrace their uniqueness and redefine the boundaries of beauty.
Join me on this mesmerizing voyage as I continue to push the boundaries, challenge the norms, and create an imprint that extends beyond the world of fashion. Let's craft a narrative that transcends the ordinary and celebrates the extraordinary together.</p>
        </div>
        <div id="swiperight" className='md:hidden flex items-center text-xl animate-pulse justify-center'>Swipe <FaArrowRight/></div>
    </div>
  )
}

export default Home