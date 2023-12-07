import React from 'react'
import img10 from './../Images/10.jpeg'
import img11 from './../Images/11.jpeg'
import img13 from './../Images/13.jpeg'
import img15 from './../Images/15.jpeg'
import img23 from './../Images/23.jpeg'
import img17 from './../Images/17.jpeg'
import img21 from './../Images/21.jpeg'
function MidDownImage() {
  return (
    <div>
        <div class="snap-x gap-3 py-1 mx-auto snap-mandatory no-scrollbar flex w-[100%] overflow-auto">
            <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
                <img alt='pic' src={img10} />
            </div>
            <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
                <img alt='pic' src={img11} />
            </div>
            <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
                <img alt='pic' src={img13} />
            </div>
            <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
                <img alt='pic' src={img15} />
            </div>
            <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
                <img alt='pic' src={img23} />
            </div>
            <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
                <img alt='pic' src={img17} />
            </div>
            <div class="snap-center w-96 flex-shrink-0 flex items-center justify-center text-8xl">
                <img alt='pic' src={img21} />
            </div>
        </div>
    </div>
  )
}

export default MidDownImage