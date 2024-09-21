import React from 'react'
import tshirt from '../../assets/img/createdesign/cloth.png'

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
      </div>
    </div>
  )
}

export default CreateDesign
