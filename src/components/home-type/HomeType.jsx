import React from 'react'
import { Link } from 'react-router-dom'
import img_1 from "./images/Mask Group.png"
import img_2 from "./images/Image-living room.png"
import img_3 from "./images/Mask Group (1).png"


const HomeType = () => {
  return (
    <section className='px-[29px] mb-[57px]'>
      <div className='container mt-[55px]'>
        <div className="text-center mx-auto mb-[62px]">
          <h3 className='font-bold text-[32px] text-[#333]'>Browse The Range</h3>
          <p className='font-normal text-[20px] text-[#667]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="grid grid-cols-3 gap-[20px] w-full place-content-center">
          <div className="max-h-[546px] max-w-[381px] h-full w-full overflow-hidden rounded-[7px]">
            <img src={img_1} alt="" className='h-[400px] w-[480px] mb-[30px] duration-300 hover:scale-105' />
            <p className='font-semibold text-[24px] text-center text-[#333]'>Dining</p>
          </div>
          <div className="max-h-[546px] max-w-[381px] h-full w-full overflow-hidden rounded-[7px]">
            <img src={img_2} alt="" className='h-[400px] w-[480px] mb-[30px] duration-300 hover:scale-105' />
            <p className='font-semibold text-[24px] text-center text-[#333]'>Living</p>
          </div>
          <div className="max-h-[546px] max-w-[381px] h-full w-full overflow-hidden rounded-[7px]">
            <img src={img_3} alt="" className='h-[400px] w-[480px] mb-[30px] duration-300 hover:scale-105' />
            <p className='font-semibold text-[24px] text-center text-[#333]'>Bedroom</p>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default HomeType