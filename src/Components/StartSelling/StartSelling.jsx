import React from 'react'
import dollar from '../../assets/img/startselling/dollar.png'

const StartSelling = () => {
  return (
    <div className='bg-[#203741] relative mx-8 md:mx-32 my-28 lg:mt-52 rounded-3xl py-10 px-6 lg:py-16 lg:px-24 text-white'>
      <div className='lg:w-1/2'>
        <h1 className='text-2xl lg:text-4xl font-bold'>Make Money, Risk-Free</h1>
        <p className='my-4 lg:my-6'>You pay for fullfillment only when you make a sale</p>
        <div className='bg-[#17262B] p-6 lg:p-10 rounded-2xl'>
        <div className='flex justify-between'>
            <p>You sell a t-shirt</p>
            <p>$ 30</p>
        </div>
        <div className='flex justify-between mt-4'>
        <p>You pay for its production</p>
        <p>$ 12</p>
        </div>
        <hr className='my-6' />
        <div className='flex justify-between textcolor font-bold text-[#39B75D] text-xl'>
            <p>Your profit</p>
            <p>$ 18</p>
        </div>
        </div>
        <div>
        <button className=' px-4 py-2 mr-2 font-bold  rounded-md text-white btncolor my-6'>Start Selling</button>
        <p className='text-sm text-[#C2C5C6]'>
        100% Free to use · 900+ Products · Largest print network
        </p>
        </div>
        <div className='hidden lg:block lg:absolute right-0 bottom-0'>
            <img  className="rounded-2xl"src={dollar} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default StartSelling
