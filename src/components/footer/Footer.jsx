import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white border-t-[3px] border-t-[#D9D9D9]">
      <div className="header_container mx-auto pt-[48px] px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-10 text-sm text-gray-600">
        <div>
          <h2
            onClick={() => navigate("/")}
            className="text-[24px] font-bold text-black mb-[24px] duration-300 hover:bg-black inline-block cursor-pointer p-1 rounded-md hover:text-white"
          >
            Funiro.
          </h2>
          <p className='text-[16px] text-[#9f9f9f] font-normal'>400 University Drive Suite 200 Coral Gables,</p>
          <p className='text-[16px] text-[#9f9f9f] font-normal'>FL 33134 USA</p>
        </div>

        <div>
          <h3 className="text-[#9f9f9f] font-medium text-[16px] mb-6">Links</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-black font-medium">Home</a></li>
            <li><a href="#" className="text-black font-medium">Shop</a></li>
            <li><a href="#" className="text-black font-medium">About</a></li>
            <li><a href="#" className="text-black font-medium">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9f9f9f] font-medium text-[16px] mb-6">Help</h3>
          <ul className="space-y-4">
            <li><a href="#" className="text-black font-medium">Payment Options</a></li>
            <li><a href="#" className="text-black font-medium">Returns</a></li>
            <li><a href="#" className="text-black font-medium">Privacy Policies</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#9f9f9f] font-medium text-[16px] mb-6">Newsletter</h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-transparent outline-none py-1 text-[14px] font-normal text-[#9f9f9f] border-b-[1px] border-black"
            />
            <button className="sm:ml-4 font-semibold text-sm border-b-[1px] border-black duration-300 hover:bg-black hover:text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="header_container border-t-[2px] border-t-[#d9d9d9] mt-10 pt-5 pb-8 text-center text-[16px] text-[#9f9f9f]">
        <p className='text-[18px]'>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer