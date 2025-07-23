import React from 'react'
import bg_img from "./images/scandinavian-interior-mockup-wall-decal-background 1 (1).png"
import "../../index.css"

const Hero = () => {
  return (
    <section
      className='pb-[117px] w-full max-w-7xl:h-auto'
      style={{
        background: `url('${bg_img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container pt-[153px] flex justify-end">
        <div className="w-[643px] h-[443px] bg-[#ffffffb9] max-sm:h-auto max-lg:mx-auto rounded-[10px] px-[41px] max-sm:px-[21px] max-sm:pb-[17px] max-sm:pt-[42px] pb-[37px] pt-[62px]">
          <p className='font-bold text-[16px] tracking-[0.19em] text-[#333] mb-[4px]'>New Arrival</p>
          <h2 className='font-bold text-[52px] leading-[125%] max-w-[400px] text-[#B88E2F] mb-[17px] max-sm:text-[42px] max-sm:max-w-[300px]'>Discover Our New Collection</h2>
          <p className='font-medium text-[18px] leading-[133%] text-[#333] max-w-[500px] mb-[46px] max-sm:mb-[36px] max-sm:text-[16px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className='py-[25px] px-[72px] font-bold text-[16px] uppercase text-[#fff] bg-[#B88E2F] duration-300 hover:bg-[#877448]'>
            BUY Now
          </button>
        </div>
      </div>
    </section>

  )
}

export default React.memo(Hero); 