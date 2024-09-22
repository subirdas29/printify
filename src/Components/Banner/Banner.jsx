import React from 'react'
import gif from '../../assets/img/banner/tshirt.gif'

const Banner = () => {
  return (
    <div>
      <div className="bg-base-200">
  <div className="flex flex-col md:flex-row justify-center items-center">
    
    <div className='lg:w-1/2 py-24 pb-8 md:py-24 px-16 md:pl-16 lg:pl-32 lg:pr-8'>
      <h1 className="text-4xl md:text-6xl font-semibold md:font-bold ">Create and sell custom products</h1>
      <p className="my-8">
        <p>100% Free to use</p>
        <p className='my-2'>900+ High-Quality Products</p>
        <p>Largest global print network</p>
      </p>
     <div className='md:mb-6'>
     <button className="px-6 py-3 rounded-sm mr-4 btncolor text-white font-bold mb-4">Start for free</button>
     <button className="px-6 py-3 rounded-sm border-2 border-[#C2C2C2] ">How it works?</button>
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
