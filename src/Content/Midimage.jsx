import React from 'react';
import img1 from './../Images/1.jpeg';
import img2 from './../Images/2.jpeg';
import img3 from './../Images/3.jpeg';
import img4 from './../Images/4.jpeg';
import img20 from './../Images/20.jpeg';
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaInstagram } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Midimage() {
  return (
    <div className='w-full md:h-fit h-screen '>
      <div className='md:hidden block'><p className='flex'>K I R T I <CiHeart className='animate-pulse pl-3' color='red'/></p><p> R A J P U T</p></div>
      <div className="w-full items-center  inline-flex flex-nowrap overflow-hidden pt-4">
        <ul className="flex items-center justify-center md:justify-start max-w-none animate-infinite-scroll">
          {[img1, img2, img3, img4, img20].map((img, index) => (
            <li key={index} className="px-5 h-[350px] w-[300px]">
              <img src={img} alt={`pic-${index}`} className='h-96 w-60'/>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {[img1, img2, img3, img4, img20].map((img, index) => (
            <li key={index} className="px-5 h-[350px] w-[300px]">
              <img src={img} alt={`pic-${index}`} className='h-96 w-60'/>
            </li>
          ))}
        </ul>
      </div>
            <div className='flex justify-center pt-10 gap-5'>
                <p className='text-2xl'>Contact</p>
                <a href="https://www.instagram.com/miss.rajput30_/" rel='noreferrer' target='_blank'><FaInstagram size={30}/></a>
            </div>
            <div className='flex justify-center pt-20'>
              <div id="swiperight" className='md:hidden flex gap-3 items-center text-xl animate-pulse justify-center'><FaArrowLeft/>Swipe <FaArrowRight/></div>
            </div>
    </div>
  );
}

export default Midimage;
