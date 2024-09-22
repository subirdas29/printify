import React from 'react'
import gif from '../../assets/img/banner/tshirt.gif'
import tick from '../../assets/img/banner/tick.svg'
import play from '../../assets/img/banner/play.svg'

const Banner = () => {
  return (
    <div>
      <div className="bg-base-200">
  <div className="flex flex-col md:flex-row justify-center items-center">
    
    <div className='lg:w-1/2 py-24 pb-8 md:py-24 px-16 md:pl-16 lg:pl-32 lg:pr-8'>
      <h1 className="text-4xl md:text-6xl font-semibold md:font-bold ">Create and sell custom products</h1>
      <p className="my-8">
        <div className='flex items-center gap-2'> <img  className='w-[17px] h-[14px]' src={tick} alt="" /><p>100% Free to use</p></div>
        <div className='flex items-center gap-2 my-2'> <img  className='w-[17px] h-[14px]' src={tick} alt="" /><p>900+ High-Quality Products</p></div>
        <div className='flex items-center gap-2'> <img  className='w-[17px] h-[14px]' src={tick} alt="" /><p>Largest global print network</p></div>
       
      </p>
     <div className='mb-4 md:mb-6 md:flex'>
     <button className="w-40 h-12 rounded-sm mr-4 btncolor text-white font-bold mb-2">Start for free</button>

     
     <button className=" h-12 w-40 rounded-sm border-2 border-[#C2C2C2] hover:text-[#29AB51] flex justify-center items-center gap-2"> <img className='w-5 h-5' src={play} alt="" /><p>How it works?</p></button>
     </div>

      <p className='textcolor font-semibold'>Trusted by over 8M sellers around the world</p>
    </div>
    <div className=' w-full lg:w-1/2 pb-16 px-16 mt-8  md:py-24 md:pr-24 md:pl-8'>
    <img
      src={gif} />
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
