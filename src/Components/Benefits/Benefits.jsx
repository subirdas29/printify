import React from 'react'
import pic1 from '../../assets/img/benefits/higher-profits.svg'
import pic2 from '../../assets/img/benefits/robust-scaling.svg'
import pic3 from '../../assets/img/benefits/best-selection.svg'

const Benefits = () => {
  return (
    <div className='flex my-32 mx-44 gap-6'>
      <div>
        <img src={pic1} className='w-[120px] h-[120px]' alt="" />
        <h1 className='text-2xl font-bold my-6'>Higher Profit</h1>
        <p>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
      </div>
      <div>
        <img src={pic2} className='w-[120px] h-[120px]' alt="" />
        <h1 className='text-2xl font-bold my-6'>Robust Scaling</h1>
        <p>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
      </div>
      <div>
        <img src={pic3} className='w-[120px] h-[120px]' alt="" />
        <h1 className='text-2xl font-bold my-6'>Best Selection</h1>
        <p>With 900+ products and top quality brands, you can choose the best products for your business.</p>
      </div>
    </div>
  )
}

export default Benefits
