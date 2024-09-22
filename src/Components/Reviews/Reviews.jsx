import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import person1 from '../../assets/img/reviews/person1.png'
import person2 from '../../assets/img/reviews/person2.png'
import person3 from '../../assets/img/reviews/person3.png'
import person4 from '../../assets/img/reviews/person4.png'
import person5 from '../../assets/img/reviews/person5.jpeg'

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Reviews = () => {
  return (
    <div className='bg-[#F7F7F7] '>
     <div className='mx-36 py-24'>
     <div className='flex gap-6 justify-start'>
        <h1 className='text-4xl font-bold'>Trusted by over 8M sellers around the world</h1>
        <p>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>
      </div>
      <div>

        {/* review */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper my-20"
    >
        <SwiperSlide>
            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
            <div className='flex gap-6 mb-6'>
                <img className='h-[64px] w-[64px] rounded-xl' src={person1} alt="" />
                <div>
                <h1 className='text-2xl font-bold'>Robert A.Voltaire</h1>
                <p className='textcolor font-semibold mb-2'>Store link</p>
                <div className='flex gap-2'>
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                </div>
                </div>
            </div>
            <div>
                <p>
                Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! 
                </p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
            <div className='flex gap-6 mb-6'>
                <img className='h-[64px] w-[64px] rounded-xl' src={person2} alt="" />
                <div>
                <h1 className='text-2xl font-bold'>Quinten Barney</h1>
                <p className='textcolor font-semibold mb-2'> Etsy Merchant </p>
                <div className='flex gap-2'>
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                </div>
                </div>
            </div>
            <div>
                <p>
                We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better. 
                </p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
            <div className='flex gap-6 mb-6'>
                <img className='h-[64px] w-[64px] rounded-xl' src={person3} alt="" />
                <div>
                <h1 className='text-2xl font-bold'>Nikki</h1>
                <p className='textcolor font-semibold mb-2'>Store link</p>
                <div className='flex gap-2'>
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                </div>
                </div>
            </div>
            <div>
                <p>
                Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.
                </p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
            <div className='flex gap-6 mb-6'>
                <img className='h-[64px] w-[64px] rounded-xl' src={person4} alt="" />
                <div>
                <h1 className='text-2xl font-bold'>Spencer, Brett, and Kyle</h1>
                <p className='textcolor font-semibold mb-2'>Store link</p>
                <div className='flex gap-2'>
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                </div>
                </div>
            </div>
            <div>
                <p>
                Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.  
                </p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='p-10 rounded-3xl bg-[#FFFFFF]'>
            <div className='flex gap-6 mb-6'>
                <img className='h-[64px] w-[64px] rounded-xl' src={person5} alt="" />
                <div>
                <h1 className='text-2xl font-bold'>April Showers</h1>
                <p className='textcolor font-semibold mb-2'>Store link</p>
                <div className='flex gap-2'>
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                <FaStar className='text-[#F18F02] h-[18px] w-[18px]' />
                </div>
                </div>
            </div>
            <div>
                <p>
                I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business. 
                </p>
            </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
      </div>
     </div>
    </div>
  )
}

export default Reviews
