import React from 'react'
import { NavLink, Link, useNavigate, Navigate } from 'react-router-dom'
import logo from "./images/Frame 168.svg"
import svg1 from "./images/mdi_account-alert-outline.svg"
import svg2 from "./images/akar-icons_search.svg"
import svg3 from "./images/akar-icons_heart.svg"
import svg4 from "./images/ant-design_shopping-cart-outlined.svg"

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-white h-[100px]'>
      <div className="header_container py-[29px] flex justify-between items-center">
        <div>
          <img onClick={()=> navigate("/")} className='cursor-pointer' src={logo} alt="" />
        </div>
        <ul className='flex gap-[75px] justify-center items-center'>
          <li className='duration-300 hover:scale-105 font-medium text-[16px]'><NavLink to="/">Home</NavLink></li>
          <li className='duration-300 hover:scale-105 font-medium text-[16px]'><NavLink to="/about">Shop</NavLink></li>
          <li className='duration-300 hover:scale-105 font-medium text-[16px]'><NavLink to="/contact">About</NavLink></li>
          <li className='duration-300 hover:scale-105 font-medium text-[16px]'><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="flex gap-[45px] justify-center items-center">
          <img className='duration-300 hover:scale-105' src={svg1} alt="" />
          <img className='duration-300 hover:scale-105' src={svg2} alt="" />
          <img className='duration-300 hover:scale-105' src={svg3} alt="" />
          <img className='duration-300 hover:scale-105' src={svg4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header