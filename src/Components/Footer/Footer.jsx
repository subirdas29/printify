import React from 'react'
import { FaFacebookF,FaInstagram,FaSquareXTwitter,FaYoutube,FaTiktok,FaRedditAlien, FaLinkedinIn  } from "react-icons/fa6";

import logo from '../../assets/img/footer/logo.svg'

const Footer = () => {
  return (
    <div className='mx-8 lg:mx-32 mt-24'>
      <div className='flex items-center justify-between mb-16'>
        <img src={logo} className='w-[135px] h-[50px]' alt="" />
        <div className='flex gap-2'>
        <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
        <FaFacebookF className='text-white' />
        </div>
        <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
        <FaInstagram className='text-white'/>
        </div>
        <div>
     <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
     <FaLinkedinIn  className='text-white' />
     </div>
        </div>
        <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
        <FaSquareXTwitter className='text-white' />
        </div>
        <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
        <FaYoutube className='text-white' />
        </div>
      <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
      <FaTiktok  className='text-white'/>
      </div>
      <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
      <FaRedditAlien className='text-white' />
      </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
