import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

function Contact() {
  return (
    <div className='flex justify-center'>
      <div className='py-10 flex  gap-9'>
        <a href="https://www.instagram.com/miss.rajput30_/" target='_blank'><FaInstagram size={30}/></a>
        {/* <a href=""><IoIosMail size={30}/></a> */}
      </div>
    </div>
  )
}

export default Contact