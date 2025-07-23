import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "./images/Frame 168.svg"
import svg1 from "./images/mdi_account-alert-outline.svg"
import svg2 from "./images/akar-icons_search.svg"
import svg3 from "./images/akar-icons_heart.svg"
import svg4 from "./images/ant-design_shopping-cart-outlined.svg"
import svg5 from "./images/menu.png"

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-white h-[80px] sm:h-[90px] lg:h-[100px] shadow-md'>
      <div className="header_container py-[20px] sm:py-[25px] lg:py-[29px] px-4 sm:px-6 lg:px-[50px] flex justify-between items-center">
        
        <div>
          <img
            onClick={() => navigate("/")}
            className='cursor-pointer max-w-[120px] sm:max-w-[140px]'
            src={logo}
            alt="logo"
          />
        </div>

        <ul className='hidden lg:flex gap-[40px] xl:gap-[75px] justify-center items-center'>
          <li className='duration-300 hover:scale-105 font-medium text-[15px] xl:text-[16px]'>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className='duration-300 hover:scale-105 font-medium text-[15px] xl:text-[16px]'>
            <NavLink to="/about">Shop</NavLink>
          </li>
          <li className='duration-300 hover:scale-105 font-medium text-[15px] xl:text-[16px]'>
            <NavLink to="/contact">About</NavLink>
          </li>
          <li className='duration-300 hover:scale-105 font-medium text-[15px] xl:text-[16px]'>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="flex gap-4 max-sm:hidden lg:gap-[45px] justify-center items-center">
          <img className='w-[20px] sm:w-[22px] lg:w-[24px] duration-300 hover:scale-105' src={svg1} alt="account" />
          <img className='w-[20px] sm:w-[22px] lg:w-[24px] duration-300 hover:scale-105' src={svg2} alt="search" />
          <img className='w-[20px] sm:w-[22px] lg:w-[24px] duration-300 hover:scale-105' src={svg3} alt="heart" />
          <img className='w-[20px] sm:w-[22px] lg:w-[24px] duration-300 hover:scale-105' src={svg4} alt="cart" />
        </div>
        <img src={svg5} alt="" className='w-[20px] hidden max-sm:block duration-300 hover:scale-105'/>
      </div>
    </div>
  )
}

export default Header
