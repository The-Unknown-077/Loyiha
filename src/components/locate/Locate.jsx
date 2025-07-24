import React from 'react'
import bg from "./images/bg.svg"
import logo from "./images/logo.svg"
import arrow from "./images/arrow.svg"


const Locate = ({text}) => {
    return (
        <section className='w-full h-[316px] relative' style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={logo} className='w-[77px] h-[77px] mx-auto mb-[-10px]' alt="Logo" />
                <h2 className='font-medium text-center text-[48px]'>{text}</h2>
                <div className="flex justify-center items-center gap-2 mt-1 text-[16px]">
                    <span className="font-medium">Home</span>
                    <img src={arrow} alt=">" className="w-[10px] h-[10px]" />
                    <span className="font-light">{text}</span>
                </div>
            </div>
        </section>
    )
}

export default Locate