import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Footer = () => {
  const Navigate = useNavigate();
  return (
    <footer className="bg-white border-t-[#D9D9D9] border-t-[3px]">
      <div className="header_container mx-auto pt-[48px] flex justify-center sm:grid-cols-2 md:grid-cols-4 gap-[136px] text-sm text-gray-600">
        <div>
          <h2 onClick={()=> Navigate("/")} className="text-[24px] font-bold text-black mb-[50px] duration-300 hover:bg-[#000] inline-block cursor-pointer p-[2px] rounded-[5px] hover:text-[#fff]" >Funiro.</h2>
          <p className='text-[16px text-[#9f9f9f] font-normal'>400 University Drive Suite 200 Coral Gables,</p>
          <p className='text-[16px text-[#9f9f9f] font-normal'>FL 33134 USA</p>
        </div>
        <div className="mr-[144px]">
          <h3 className="text-[#9f9f9f] font-medium text-[16px] mb-[55px]">Links</h3>
          <ul className="space-y-2">
            <li className='mb-[46px]'><a href="#" className="text-black font-medium">Home</a></li>
            <li className='mb-[46px]'><a href="#" className="text-black font-medium">Shop</a></li>
            <li className='mb-[46px]'><a href="#" className="text-black font-medium">About</a></li>
            <li className='mb-[46px]'><a href="#" className="text-black font-medium">Contact</a></li>
          </ul>
        </div>
        <div className='mr-[72px]'>
          <h3 className="text-[#9f9f9f] font-medium text-[16px] mb-[55px]">Help</h3>
          <ul className="space-y-2">
            <li className='mb-[46px]'><a href="#" className="text-black font-medium">Payment Options</a></li>
            <li className='mb-[46px]'><a href="#" className="text-black font-medium">Returns</a></li>
            <li className='mb-[46px]'><a href="#" className="text-black font-medium">Privacy Policies</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#9f9f9f] font-medium text-[16px] mb-[53px]">Newsletter</h3>
          <div className="flex gap-[5px]">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 bg-transparent outline-none py-1 text-[14px] font-normal text-[#9f9f9f] border-b-[1px] border-black"
            />
            <button className="ml-4 font-semibold text-sm border-b-[1px] border-black duration-300 hover:bg-black hover:text-white">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="header_container border-t-[#d9d9d9] border-t-[2px] pt-[35px] font-normal text-[16px] mb-[38px]">
        <p className='text-[18px]'>2023 funiro. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer