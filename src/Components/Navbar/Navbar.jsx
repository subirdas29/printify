import React from 'react'

const Navbar = () => {

   
  return (
    <div>
      <div className="navbar bg-base-100 border">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
           
           <li><a>Catalog</a></li>
      <li >
        <details>
          <summary className='dropdown dropdown-hover'>How it works</summary>
          <ul className=" rounded-none ">
            <li className='hover:text-blue-500'><a>How Printify Works</a></li>
            <li className='hover:text-blue-500 '><a>Print On Demand</a></li>
            <li className='hover:text-blue-500 '><a>Printify Quality Promise</a></li>
            <li className='hover:text-blue-500 '><a>What to Sell?</a></li>
          </ul>
        </details>
      </li>
      <li><a>Pricing</a></li>
        <li><a>Blog</a></li>
        <li>
          <details>
          <summary>Services</summary>
        <ul className="rounded-none ">
            <li className='hover:text-blue-500'><a>Printify Studio</a></li>
            <li className='hover:text-blue-500'><a>Printify Express Delivery</a></li>
            <li className='hover:text-blue-500'><a>Transfer Products</a></li>
            <li className='hover:text-blue-500'><a>Order In Bulk</a></li>
            <li className='hover:text-blue-500'><a>Experts Program</a></li>
          </ul>
          </details>
        </li>
        <li>
          <details>
          <summary>Use-cases</summary>
        <ul className="rounded-none">
            <li className='hover:text-blue-500'><a>Merch For Fans</a></li>
            <li className='hover:text-blue-500'><a>Merch For eCommerce</a></li>
            <li className='hover:text-blue-500'><a>Merch For Enterprises</a></li>
            <li className='hover:text-blue-500'><a>Grow Your Store</a></li>
          </ul>
          </details>
        </li>

        <li>
          <details>
          <summary>Need-help?</summary>
        <ul className="rounded-none">
            <li className='hover:text-blue-500'><a>Help Center</a></li>
            <li className='hover:text-blue-500'><a>Contacts</a></li>
            <li className='hover:text-blue-500'><a>My Requests</a></li>
          </ul>
          </details>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Printify</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    
    {/* desktop formate */}
    <ul className="menu menu-horizontal px-1 ">
    <li><a>Catalog</a></li>
      <li >
        <details>
          <summary className='dropdown dropdown-hover'>How it works</summary>
          <ul className="p-2 w-52 rounded-none border">
            <li className='hover:text-blue-500'><a>How Printify Works</a></li>
            <li className='hover:text-blue-500 '><a>Print On Demand</a></li>
            <li className='hover:text-blue-500 '><a>Printify Quality Promise</a></li>
            <li className='hover:text-blue-500 '><a>What to Sell?</a></li>
          </ul>
        </details>
      </li>
      <li><a>Pricing</a></li>
        <li><a>Blog</a></li>
        <li>
          <details>
          <summary>Services</summary>
        <ul className="p-2 w-52 rounded-none border">
            <li className='hover:text-blue-500'><a>Printify Studio</a></li>
            <li className='hover:text-blue-500'><a>Printify Express Delivery</a></li>
            <li className='hover:text-blue-500'><a>Transfer Products</a></li>
            <li className='hover:text-blue-500'><a>Order In Bulk</a></li>
            <li className='hover:text-blue-500'><a>Experts Program</a></li>
          </ul>
          </details>
        </li>
        <li>
          <details>
          <summary>Use-cases</summary>
        <ul className="p-2 w-52 rounded-none border">
            <li className='hover:text-blue-500'><a>Merch For Fans</a></li>
            <li className='hover:text-blue-500'><a>Merch For eCommerce</a></li>
            <li className='hover:text-blue-500'><a>Merch For Enterprises</a></li>
            <li className='hover:text-blue-500'><a>Grow Your Store</a></li>
          </ul>
          </details>
        </li>

        <li>
          <details>
          <summary>Need-help?</summary>
        <ul className="p-2 w-52 rounded-none border">
            <li className='hover:text-blue-500'><a>Help Center</a></li>
            <li className='hover:text-blue-500'><a>Contacts</a></li>
            <li className='hover:text-blue-500'><a>My Requests</a></li>
          </ul>
          </details>
        </li>
     </ul>
  </div>
  <div className="navbar-end">
    <button className=' px-4 py-1 border-2 border-[#C2C2C2]  mr-4'>Log in</button>
    <button className=' px-4 py-2 mr-2 font-bold  rounded-md text-white btncolor'>Sign up</button>
  </div>
</div>
    </div>
  )
}

export default Navbar
