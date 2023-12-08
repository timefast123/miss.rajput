import React from 'react';
import img10 from './../Images/10.jpeg';
import img11 from './../Images/11.jpeg';
import img13 from './../Images/13.jpeg';
import img15 from './../Images/15.jpeg';
import img23 from './../Images/23.jpeg';
import img17 from './../Images/17.jpeg';
import img21 from './../Images/21.jpeg';
import { FaArrowLeft } from 'react-icons/fa6';
function MidDownImage() {
  return (
    <div className='w-full md:h-fit h-screen '>
    {/* <div className="w-full inline-flex flex-nowrap overflow-hidden" > */}
      <div id="swiperight" className='md:hidden flex gap-3 items-center text-xl animate-pulse justify-center text-white pt-10'><FaArrowLeft/>Swipe </div>
    <div className="w-full items-center justify-center inline-flex flex-nowrap overflow-hidden pt-20 ">


      <ul className="flex items-center justify-center md:justify-start max-w-none animate-infinite-scroll">
        {[img10, img11, img13, img15, img23, img17, img21].map((img, index) => (
          <li key={index} className="px-5 h-[350px] w-[300px]">
            <img src={img} alt={`pic-${index}`} className='h-96 w-60'/>
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {[img10, img11, img13, img15, img23, img17, img21].map((img, index) => (
          <li key={index} className="px-5 h-[350px] w-[300px]">
            <img src={img} alt={`pic-${index}`} className='h-96 w-60'/>
          </li>
        ))}
      </ul>
    </div>
    <p className='text-2xl text-white px-10 pt-20'>You can have anything you want in life if you dress for it...</p>
    </div>
  );
}

export default MidDownImage;
