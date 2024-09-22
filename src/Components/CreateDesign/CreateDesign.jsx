import React from 'react'
import tshirt from '../../assets/img/createdesign/cloth.png'
import pic1 from '../../assets/img/createdesign/custom-products.png'
import pic2 from '../../assets/img/createdesign/your-products.png'
import pic3 from '../../assets/img/createdesign/fullfillment.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CreateDesign = () => {



  return (
    <div className='bg-[#F7F7F7] py-16'>
      <div className='flex flex-col lg:flex-row items-center bg-white mb-10 mx-8  sm:mx-32 rounded-badge '>
      <div>
        <img src={tshirt} className='btncolor rounded-badge w-[550px] h-[360px] lg:h-[648px]' alt="" />
      </div>
      <div className='mx-12 my-12 lg:mx-28 lg:w-2/5'>
        <h1 className='text-4xl font-bold'>Easily add your design to a wide range of products</h1>
        <p className='my-8'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</p>
        <p className='textcolor font-bold'>All products</p>
      </div>
      </div>

      {/* desktop part */}
      <div className=' hidden lg:flex flex-col  lg:flex-row my-32 mx-16 sm:mx-28 md:mx-36 gap-11 '>
      <div className='text-center lg:text-left mt-6 md:mt-0'>
        <div className='flex justify-center lg:justify-normal md:flex-none'><img src={pic1} className='w-[120px] h-[120px]' alt="" /></div>
        <h2 className='text-xl font-bold mt-8 textcolor'>CREATE</h2>
        <h1 className='text-2xl font-bold mt-1 mb-4'>custom products</h1>
        <p className='text-xs'>Easily add your designs to a wide range of products using our free tools</p>
      </div>
      <div className='text-center lg:text-left mt-6 md:mt-0'>
       <div className='flex justify-center lg:justify-normal md:flex-none '>
       <img src={pic2} className='w-[120px] h-[120px]' alt="" />
       </div>
       <h2 className='text-xl font-bold mt-8 textcolor'>SELL</h2>
        <h1 className='text-2xl font-bold mt-1 mb-4'>on your terms</h1>
        <p className='text-xs'>You choose the products, sale price, and where to sell</p>
      </div>
      <div className='text-center lg:text-left mt-6 md:mt-0'>
       <div className='flex justify-center lg:justify-normal md:flex-none'>
       <img src={pic3} className='w-[120px] h-[120px]' alt="" />
       </div>
       <h2 className='text-xl font-bold mt-8 textcolor'>WE HANDLE</h2>
        <h1 className='text-2xl font-bold mt-1 mb-4'>fullfillment</h1>
        <p className='text-xs'>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
      </div>
    </div>
     <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: '.custom-next-design',
          prevEl: '.custom-prev-design',
        }}
        pagination={{
          el: '.custom-pagination-design',
          clickable: true,
        }}
        className="lg:hidden mx-8"
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className='text-center'>
            <div className='flex justify-center'>
              <img src={pic1} className='w-[120px] h-[120px]' alt="" />
            </div>
            <h2 className='text-xl font-bold mt-8 textcolor'>CREATE</h2>
            <h1 className='text-2xl font-bold mt-1 mb-4'>custom products</h1>
            <p className='text-xs'>Easily add your designs to a wide range of products using our free tools</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-center'>
            <div className='flex justify-center'>
              <img src={pic2} className='w-[120px] h-[120px]' alt="" />
            </div>
            <h2 className='text-xl font-bold mt-8 textcolor'>SELL</h2>
            <h1 className='text-2xl font-bold mt-1 mb-4'>on your terms</h1>
            <p className='text-xs'>You choose the products, sale price, and where to sell</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-center'>
            <div className='flex justify-center'>
              <img src={pic3} className='w-[120px] h-[120px]' alt="" />
            </div>
            <h2 className='text-xl font-bold mt-8 textcolor'>WE HANDLE</h2>
            <h1 className='text-2xl font-bold mt-1 mb-4'>fullfillment</h1>
            <p className='text-xs'>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" lg:hidden mx-12 sm:mx-24 flex justify-between items-center mt-6">
                        {/* Custom previous button */}
                        <div
                       
                            className="custom-prev-design text-white bg-[#29AB51] rounded-full p-3 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>

                        {/* Pagination */}
                        <div className="custom-pagination-design flex justify-center gap-2"></div>

                        {/* Custom next button */}
                        <div
                           
                            className="custom-next-design text-white bg-[#29AB51] rounded-full p-3 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
    </div>
  )
}

export default CreateDesign
