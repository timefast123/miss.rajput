import React from 'react'
import img23 from './../Images/23.jpeg'
import img24 from './../Images/24.jpeg'
import img25 from './../Images/25.jpeg'
import img26 from './../Images/26.jpeg'
import { FaAnglesDown, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
function About() {
  return (
    <div id='about' className=' bg-blue-600 p-7 md:h-fit h-screen overflow-y-auto'>
      <h1 className='uppercase text-3xl text-white'>What is Modelling for me!!!</h1> <br />
      <p className='text-orange-400 text-justify text-2xl'>Over the past three years, I've evolved as a model, not just in terms of experience but in understanding the nuanced artistry behind each pose, expression, and concept. With every project, I've honed my skills, embracing the transformative power of fashion.</p>
      <div className='flex justify-between p-10'>
          <img src={img25} alt='img' className='w-[40%]'/>
          <img src={img26} alt='img' className='w-[40%]'/>
      </div>
      <br />
      <div id="swiperight" className='md:hidden flex gap-3 items-center text-xl animate-pulse justify-center'><FaArrowLeft/>Swipe <FaArrowRight/></div>
      <br />
      <p className='text-orange-400 text-justify text-2xl'>As a model, I'm not just a canvas; I'm a living, breathing embodiment of versatility. From exuding elegance on the runway to conveying raw emotion in editorial spreads, my adaptability allows me to transcend the limitations of a single style, creating captivating narratives.</p>
      <div id="imageviewinabout" className=''>
        <div className='flex justify-between p-10'>
            <img src={img23} alt='img' className='w-[40%]'/>
            <img src={img24} alt='img' className='w-[40%]'/>
        </div>
      </div>
    </div>
  )
}

export default About