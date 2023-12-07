import React from 'react'
import Profile from './../Images/15.jpeg'
function Home() {
  return (
    <div className='h-screen bg-pink-400 text-white w-[100%] flex items-center px-10'>
        <div className='w-50% px-12'>
            <img src={Profile}/>
        </div>
        <div className='w-[50%] h-[50%] overscroll-y-auto no-scrollbar'>
            <h1 className='text-2xl uppercase'>About Me!!</h1>
            <p className='text-justify '>As a model, I see myself as a storyteller, using every pose, every expression, and every movement to narrate tales of elegance, strength, and sophistication. My ambition is to not just be seen but to inspire—empowering individuals to embrace their uniqueness and redefine the boundaries of beauty.
Join me on this mesmerizing voyage as I continue to push the boundaries, challenge the norms, and create an imprint that extends beyond the world of fashion. Let's craft a narrative that transcends the ordinary and celebrates the extraordinary together.</p>
        </div>
    </div>
  )
}

export default Home