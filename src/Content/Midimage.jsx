import React from 'react'
import img1 from './../Images/1.jpeg'
import img2 from './../Images/2.jpeg'
import img3 from './../Images/3.jpeg'
import img4 from './../Images/4.jpeg'
import img20 from './../Images/20.jpeg'


function Midimage() {
  return (
    <div>
        <div class="snap-x gap-3 py-1 mx-auto snap-mandatory no-scrollbar flex w-[100%] overflow-scroll">
        <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
            <img alt='pic' src={img1} />
        </div>
        <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
            <img alt='pic' src={img2} />
        </div>
        <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
            <img alt='pic' src={img3} />
        </div>
        <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
            <img alt='pic' src={img4} />
        </div>
        <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
            <img alt='pic' src={img20} />
        </div>
        </div>
    </div>
  )
}

export default Midimage

