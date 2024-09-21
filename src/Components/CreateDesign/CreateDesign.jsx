import React from 'react'
import tshirt from '../../assets/img/createdesign/cloth.png'
import pic1 from '../../assets/img/createdesign/custom-products.png'
import pic2 from '../../assets/img/createdesign/your-products.png'
import pic3 from '../../assets/img/createdesign/fullfillment.png'

const CreateDesign = () => {
  return (
    <div className='bg-[#F7F7F7] py-8'>
      <div className='flex flex-col md:flex-row items-center bg-white m-8 md:m-36 rounded-badge '>
      <div>
        <img src={tshirt} className='btncolor rounded-badge w-[550px] h-[360px] md:h-[648px]' alt="" />
      </div>
      <div className='mx-8 my-8 md:mx-36 md:w-2/5'>
        <h1 className='text-4xl font-bold'>Easily add your design to a wide range of products</h1>
        <p className='my-8'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
        <p className='textcolor font-bold'>All products</p>
      </div>
      {/* another part */}
      </div>
      <div className='flex flex-col  md:flex-row my-32 mx-16 sm:mx-28 md:mx-36 gap-11 '>
      <div className='text-center md:text-left mt-6 md:mt-0'>
        <div className='flex justify-center md:justify-normal md:flex-none'><img src={pic1} className='w-[120px] h-[120px]' alt="" /></div>
        <h2 className='text-xl font-bold mt-8 textcolor'>CREATE</h2>
        <h1 className='text-2xl font-bold mt-1 mb-4'>custom products</h1>
        <p className='text-xs'>Easily add your designs to a wide range of products using our free tools</p>
      </div>
      <div className='text-center md:text-left mt-6 md:mt-0'>
       <div className='flex justify-center md:justify-normal md:flex-none '>
       <img src={pic2} className='w-[120px] h-[120px]' alt="" />
       </div>
       <h2 className='text-xl font-bold mt-8 textcolor'>SELL</h2>
        <h1 className='text-2xl font-bold mt-1 mb-4'>on your terms</h1>
        <p className='text-xs'>You choose the products, sale price, and where to sell</p>
      </div>
      <div className='text-center md:text-left mt-6 md:mt-0'>
       <div className='flex justify-center md:justify-normal md:flex-none'>
       <img src={pic3} className='w-[120px] h-[120px]' alt="" />
       </div>
       <h2 className='text-xl font-bold mt-8 textcolor'>WE HANDLE</h2>
        <h1 className='text-2xl font-bold mt-1 mb-4'>fullfillment</h1>
        <p className='text-xs'>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
      </div>
    </div>
    </div>
  )
}

export default CreateDesign
