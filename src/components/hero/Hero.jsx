import React from 'react'
import bg_img from "./images/scandinavian-interior-mockup-wall-decal-background 1 (1).png"

const Hero = () => {
  return (
    <section className='h-screen w-full relative' style={{ background: `url('${bg_img}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="w-[643px] h-[443px] bg-[#ffffffb9] absolute top-[153px] right-[53px] rounded-[10px] px-[41px] pb-[37px] pt-[62px]">
        <p className='font-bold text-[16px] tracking-[0.19em] text-[#333] mg-[4px] '>New Arrival</p>
        <h2 className='font-bold text-[52px] leading-[125%] max-w-[400px] text-[#B88E2F] mb-[17px]'>Discover Our  New Collection</h2>
        <p className='font-medium text-[18px] leading-[133%] text-[#333] max-w-[500px] mb-[46px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className='py-[25px] px-[72px] font-bold text-[16px] uppercase text-[#fff] bg-[#B88E2F] duration-300 hover:bg-[#877448]'>BUY Now</button>
      </div>
    </section>
  )
}

export default React.memo(Hero)