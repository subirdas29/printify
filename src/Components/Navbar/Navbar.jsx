import React from 'react'
import logo from '../../assets/img/footer/logo.svg'
import logo2 from '../../assets/img/nav/fav.png'

const Navbar = () => {

   
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-50 shadow-lg px-8 lg:px-32">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      {/* //mobile formate */}
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] top-10 mt-3 w-60 p-2 shadow ">
           
           <li className='mt-3'><a>Catalog</a></li>
      <li >
        <details>
          <summary className='dropdown dropdown-hover my-3'>How it works</summary>
          <ul className=" rounded-none ">
            <li className='hover:text-[#29AB51] mt-3'><a>How Printify Works</a></li>
            <li className='hover:text-[#29AB51]  my-3 '><a>Print On Demand</a></li>
            <li className='hover:text-[#29AB51] '><a>Printify Quality Promise</a></li>
            <li className='hover:text-[#29AB51] my-3 '><a>What to Sell?</a></li>
          </ul>
        </details>
      </li>
      <li><a>Pricing</a></li>
        <li className='my-3'><a>Blog</a></li>
        <li>
          <details>
          <summary>Services</summary>
        <ul className="rounded-none ">
            <li className='hover:text-[#29AB51] my-3'><a>Printify Studio</a></li>
            <li className='hover:text-[#29AB51]'><a>Printify Express Delivery</a></li>
            <li className='hover:text-[#29AB51] my-3'><a>Transfer Products</a></li>
            <li className='hover:text-[#29AB51]'><a>Order In Bulk</a></li>
            <li className='hover:text-[#29AB51] my-3'><a>Experts Program</a></li>
          </ul>
          </details>
        </li>
        <li>
          <details>
          <summary className='my-3'>Use-cases</summary>
        <ul className="rounded-none">
            <li className='hover:text-[#29AB51] mt-2 mb-3'><a>Merch For Fans</a></li>
            <li className='hover:text-[#29AB51]'><a>Merch For eCommerce</a></li>
            <li className='hover:text-[#29AB51] my-3'><a>Merch For Enterprises</a></li>
            <li className='hover:text-[#29AB51] mb-3'><a>Grow Your Store</a></li>
          </ul>
          </details>
        </li>

        <li>
          <details>
          <summary>Need-help?</summary>
        <ul className="rounded-none">
            <li className='hover:text-[#29AB51] mt-2'><a>Help Center</a></li>
            <li className='hover:text-[#29AB51] my-3'><a>Contacts</a></li>
            <li className='hover:text-[#29AB51] mb-3'><a>My Requests</a></li>
          </ul>
          </details>
        </li>
      </ul>
    </div>
   <img src={logo} className='hidden md:block w-[135px] h-[50px]' alt="" />
   <img src={logo2} className='block md:hidden' alt="" />
  </div>
  <div className="navbar-center hidden lg:flex ">
    
    {/* desktop formate */}
    <ul className="menu menu-horizontal px-1 ">
    <li><a>Catalog</a></li>
      <li >
        <details>
          <summary className='dropdown dropdown-hover'>How it works</summary>
          <ul className="p-2 w-52 rounded-none border">
            <li className='hover:text-[#29AB51]'><a>How Printify Works</a></li>
            <li className='hover:text-[#29AB51] '><a>Print On Demand</a></li>
            <li className='hover:text-[#29AB51] '><a>Printify Quality Promise</a></li>
            <li className='hover:text-[#29AB51] '><a>What to Sell?</a></li>
          </ul>
        </details>
      </li>
      <li><a>Pricing</a></li>
        <li><a>Blog</a></li>
        <li>
          <details>
          <summary>Services</summary>
        <ul className="p-2 w-52 rounded-none border">
            <li className='hover:text-[#29AB51]'><a>Printify Studio</a></li>
            <li className='hover:text-[#29AB51]'><a>Printify Express Delivery</a></li>
            <li className='hover:text-[#29AB51]'><a>Transfer Products</a></li>
            <li className='hover:text-[#29AB51]'><a>Order In Bulk</a></li>
            <li className='hover:text-[#29AB51]'><a>Experts Program</a></li>
          </ul>
          </details>
        </li>
        <li>
          <details>
          <summary>Use-cases</summary>
        <ul className="p-2 w-52 rounded-none border">
            <li className='hover:text-[#29AB51]'><a>Merch For Fans</a></li>
            <li className='hover:text-[#29AB51]'><a>Merch For eCommerce</a></li>
            <li className='hover:text-[#29AB51]'><a>Merch For Enterprises</a></li>
            <li className='hover:text-[#29AB51]'><a>Grow Your Store</a></li>
          </ul>
          </details>
        </li>

        <li>
          <details>
          <summary>Need-help?</summary>
        <ul className="p-2 w-52 rounded-none border">
            <li className='hover:text-[#29AB51]'><a>Help Center</a></li>
            <li className='hover:text-[#29AB51]'><a>Contacts</a></li>
            <li className='hover:text-[#29AB51]'><a>My Requests</a></li>
          </ul>
          </details>
        </li>
     </ul>
  </div>
  <div className="navbar-end">
    <div className='flex justify-center border-2 border-[#C2C2C2] rounded-md mr-2 md:mr-4 '>
    <button className=' font-bold w-20 md:w-24 h-10 '>Log in</button>
    </div>
    <div lassName='flex justify-center'>
    <button className=' w-20 md:w-24 h-10 rounded-md font-bold  text-white btncolor'>Sign up</button>
    </div>
    </div>
</div>
    </div>
  )
}

export default Navbar
