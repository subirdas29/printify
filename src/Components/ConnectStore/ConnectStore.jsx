import React from 'react'

const ConnectStore = () => {
  return (
    <div className='my-20 mx-8 lg:mx-32'>
     <div className='text-center'>
     <h1 className='text-4xl mb-4 font-bold '>Connect your store </h1>
      <p>Printify easily integrates with major e-commerce platforms and marketplaces</p>
     </div>
     <div>
        <div className=' bg-[#E2F7E3] mt-16 h-[144px] bg-no-repeat bg-right border rounded-badge' style={{
          backgroundImage: "url(https://i.ibb.co.com/94Y7gmn/bg.png)",
        }}>

            <div className='flex items-center justify-around my-6 lg:my-8 px-4 md:px-0'>
                <p className=' md:text-lg lg:text-2xl font-bold w-1/2 lg:w-2/5  text-[#1F6B45]'>Are you a large business looking for custom solutions?</p>
                <button className='h-9 px-4 md:px-6 bg-white font-semibold'>Talk to sales</button>
            </div>
           
        </div>
     </div>
    </div>
  )
}

export default ConnectStore
