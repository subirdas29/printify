import React from 'react'

const ConnectStore = () => {
  return (
    <div className='my-16'>
     <div className='text-center'>
     <h1 className='text-4xl mb-4 font-bold '>Connect your store </h1>
      <p>Printify easily integrates with major e-commerce platforms and marketplaces</p>
     </div>
     <div>
        <div className='mx-8 md:mx-28 bg-[#E2F7E3] mt-16 h-[144px] bg-no-repeat bg-right border rounded-badge' style={{
          backgroundImage: "url(https://i.ibb.co.com/94Y7gmn/bg.png)",
        }}>

            <div className='flex items-center justify-around my-6 md:my-7'>
                <p className='text-lg md:text-2xl font-bold w-1/2 md:w-1/3 text-[#1F6B45]'>Are you a large business looking for custom solutions?</p>
                <button className='h-9 px-6 bg-white font-semibold'>Talk to sales</button>
            </div>
           
        </div>
     </div>
    </div>
  )
}

export default ConnectStore
