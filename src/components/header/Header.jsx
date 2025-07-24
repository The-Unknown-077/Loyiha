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
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#B88E2F] font-medium text-[15px] xl:text-[16px] border-b-[2px] border-[#B88E2F] pb-[2px]"
                  : "font-medium text-[15px] xl:text-[16px] duration-300 hover:scale-105"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-[#B88E2F] font-medium text-[15px] xl:text-[16px] border-b-[2px] border-[#B88E2F] pb-[2px]"
                  : "font-medium text-[15px] xl:text-[16px] duration-300 hover:scale-105"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#B88E2F] font-medium text-[15px] xl:text-[16px] border-b-[2px] border-[#B88E2F] pb-[2px]"
                  : "font-medium text-[15px] xl:text-[16px] duration-300 hover:scale-105"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#B88E2F] font-medium text-[15px] xl:text-[16px] border-b-[2px] border-[#B88E2F] pb-[2px]"
                  : "font-medium text-[15px] xl:text-[16px] duration-300 hover:scale-105"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>


        <div className="flex gap-4 max-sm:hidden lg:gap-[45px] justify-center items-center">
          <img onClick={() => navigate()} className='w-[20px] sm:w-[22px] lg:w-[24px] duration-300 hover:scale-105' src={svg1} alt="account" />
          <img onClick={() => navigate()} className='w-[20px] sm:w-[22px] lg:w-[24px] duration-300 hover:scale-105' src={svg2} alt="search" />
          <img onClick={() => navigate("/wishlist")} className='w-[20px] sm:w-[22px] lg:w-[24px] duration-300 hover:scale-105' src={svg3} alt="heart" />
          <img onClick={() => navigate("/cart")} className='w-[20px] sm:w-[22px] lg:w-[24px] duration-300 hover:scale-105' src={svg4} alt="cart" />
        </div>
        <img src={svg5} alt="" className='w-[20px] hidden max-sm:block duration-300 hover:scale-105' />
      </div>
    </div>
  )
}

export default Header
