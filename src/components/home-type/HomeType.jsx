import React from 'react'
import { Link } from 'react-router-dom'
import img_1 from "./images/Mask Group.png"
import img_2 from "./images/Image-living room.png"
import img_3 from "./images/Mask Group (1).png"


const HomeType = () => {
  return (
        <section className='px-4 sm:px-6 lg:px-[29px] mb-[57px]'>
      <div className='container mt-[55px]'>
        <div className="text-center mx-auto mb-[62px] max-w-[600px]">
          <h3 className='font-bold text-[28px] sm:text-[32px] text-[#333]'>Browse The Range</h3>
          <p className='font-normal text-[18px] sm:text-[20px] text-[#667]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full items-center">
          <div className="max-h-[546px] max-sm:h-[400px] w-full rounded-[7px]">
            <img src={img_1} alt="" className='h-auto max-sm:h-[300px] w-full mb-[20px] duration-300 object-cover rounded-[7px]' />
            <p className='font-semibold text-[22px] sm:text-[24px] text-center text-[#333]'>Dining</p>
          </div>
          <div className="max-h-[546px] max-sm:h-[400px] w-full rounded-[7px]">
            <img src={img_2} alt="" className='h-auto max-sm:h-[300px] w-full mb-[20px] duration-300 object-cover rounded-[7px]' />
            <p className='font-semibold text-[22px] sm:text-[24px] text-center text-[#333]'>Living</p>
          </div>
          <div className="max-h-[546px] max-sm:h-[400px] w-full rounded-[7px]">
            <img src={img_3} alt="" className='h-auto max-sm:h-[300px] w-full mb-[20px] duration-300 object-cover rounded-[7px]' />
            <p className='font-semibold text-[22px] sm:text-[24px] text-center text-[#333]'>Bedroom</p>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default HomeType