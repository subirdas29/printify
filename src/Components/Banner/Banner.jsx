import React from 'react'
import gif from '../../assets/img/banner/tshirt.gif'

const Banner = () => {
  return (
    <div>
      <div className="bg-base-200">
  <div className="flex flex-col md:flex-row">
    
    <div className='md:w-1/2 pt-24 pb-8 md:py-24 pl-24 md:pr-8'>
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
    <div className=' w-3/5  mx-auto md:w-1/2 md:py-24 md:pr-24 md:pl-8'>
    <img
      src={gif}
      className=" " />
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner
