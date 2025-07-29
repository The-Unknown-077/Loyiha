import React from 'react'
import img1 from "./images/trophy 1.svg"
import img2 from "./images/guarantee.svg"
import img3 from "./images/shipping.svg"
import img4 from "./images/customer-support.svg"


const AboutServices = () => {
  return (
    <section className='bg-[#faf3ea] h-[270px] flex items-center justify-center max-lg:h-auto max-lg:py-[52px] max-lg:mx-auto'>
        <div className="header_container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[55px] place-items-center h-full max-lg:mx-auto max-lg:items-center">
                <div className="flex justify-center items-center gap-[10px]">
                    <img src={img1} alt="" />
                    <div className="">
                        <h3 className='font-semibold text-[25px] leading-[150%] text-[#242424] sm:text-[20px]'>High Quality</h3>
                        <p className='font-semibold text-[20px] leading-[150%] sm:text-[18px] text-[#898989]'>crafted from top materials</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[10px]">
                    <img src={img2} alt="" />
                    <div className="">
                        <h3 className='font-semibold text-[25px] leading-[150%] text-[#242424] sm:text-[20px]'>Warranty Protection</h3>
                        <p className='font-semibold text-[20px] leading-[150%] sm:text-[18px] text-[#898989]'>Over 2 years</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[10px]">
                    <img src={img3} alt="" />
                    <div className="">
                        <h3 className='font-semibold text-[25px] leading-[150%] text-[#242424] sm:text-[20px]'>Free Shipping</h3>
                        <p className='font-semibold text-[20px] leading-[150%] sm:text-[18px] text-[#898989]'>Order over 150 $</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[10px]">
                    <img src={img4} alt="" />
                    <div className="">
                        <h3 className='font-semibold text-[25px] leading-[150%] text-[#242424] sm:text-[20px]'>24 / 7 Support</h3>
                        <p className='font-semibold text-[20px] leading-[150%] sm:text-[18px] text-[#898989]'>Dedicated suport</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutServices