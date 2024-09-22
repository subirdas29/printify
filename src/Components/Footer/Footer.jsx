import React from 'react'
import { FaFacebookF,FaInstagram,FaSquareXTwitter,FaYoutube,FaTiktok,FaRedditAlien, FaLinkedinIn  } from "react-icons/fa6";

import logo from '../../assets/img/footer/logo.svg'

const Footer = () => {
  return (
    <div className='mx-8 lg:mx-32 mt-24'>
      <div className='md:flex md:items-center md:justify-between mb-16'>
        <img src={logo} className='w-[135px] h-[50px] mb-6' alt="" />
        <div className='flex gap-2'>
        <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
        <FaFacebookF className='text-white' />
        </div>
        <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
        <FaInstagram className='text-white'/>
        </div>
        <div>
     <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
     <FaLinkedinIn  className='text-white' />
     </div>
        </div>
        <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
        <FaSquareXTwitter className='text-white' />
        </div>
        <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
        <FaYoutube className='text-white' />
        </div>
      <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
      <FaTiktok  className='text-white'/>
      </div>
      <div className='btncolor rounded-full w-8 h-8 flex justify-center items-center'>
      <FaRedditAlien className='text-white' />
      </div>
        </div>
      </div>
      <div className='mb-24 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-24'>
        <div >
            <h1 className='text-lg font-semibold mb-6'>Integrations</h1>
            <p>Shopify</p>
            <p className='my-3'>Etsy</p>
            <p>eBay</p>
            <p className='my-3'>Amazon</p>
            <p>TikTok Shop</p>
            <p className='my-3'>PrestaShop</p>
            <p>BigCommerce</p>
            <p className='my-3'>Wix</p>
            <p >WooCommerce</p>
            <p className='my-3'>Squarespace</p>
            <p>Printify API</p>
            <p className='my-3'>Printify Pop-Up Store</p>
            <p>Shutterstock</p>
        </div>
        <div>
            <h1 className='text-lg font-semibold mb-6'>Discover</h1>
            <p>Blog</p>
            <p className='my-3'>Guides</p>
            <p>Procucts</p>
            <p className='my-3'>Etsy print-on-demand</p>
            <p>Shopify print-on-demand</p>
            <p className='my-3'>Woocommerce print-on-demand</p>
            <p>Wix print-on-demand</p>
            <p className='my-3'>Squarespace print-on-demand</p>
            <p >Make Your Own Shirt</p>
            <p className='my-3'>Brands</p>
            <p>Pricing</p>
            <p className='my-3'>Shipping Rates</p>
            <p>MockupGenerator</p>
        </div>
        <div>
            <h1 className='text-lg font-semibold mb-6'>Start selling</h1>
            <p>Shopify</p>
            <p className='my-3'>Custom T-shirts</p>
            <p>Custom Hoodies</p>
            <p className='my-3'>Custom Mugs</p>
            <p>Custom Socks</p>
            <p className='my-3'>Custom Backpacks</p>
            <p>Custom Branding</p>
            <p className='my-3'>Sell on Etsy</p>
            <p >Sell on Social Media</p>
            <p className='my-3'>Free T-shirt Designs
            </p>
            <p>Custom Products</p>
            <p className='my-3'>Custom All-Over-Print Hoodies
            </p>
            <p>Start a Clothing Line</p>
            <p className='my-3'>Start POD Business
            </p>
            <p>Bulk Orders</p>
            <p className='my-3'>Transfering To Printify</p>
        </div>
        <div>
            <h1 className='text-lg font-semibold mb-6'>Printify</h1>
            <p>Print on Demand
            </p>
            <p className='my-3'>Print Providers</p>
            <p> Experts Program</p>
            <p className='my-3'>Printify Express Delivery</p>
            <p>Become a Partner</p>
            <p className='my-3'>About</p>
            <p>Printify Quality Promise</p>
            <p className='my-3'>Jobs</p>
            <p >Webinars</p>
            <p className='my-3'>Printing Profits Podcast</p>
            <p>Contact Us</p>
            <p className='my-3'>Affiliate</p>
            <p>Contact Sales</p>
            <p className='my-3'>POD Glossary</p>
            <p>Network Fulfillment Status</p>
            <p className='my-3'>Merchant Protection</p>
            <p>Security</p>
            <p className='my-3'>Sitemap</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
