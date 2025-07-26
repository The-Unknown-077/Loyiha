import React, { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import rasim from "./img/rasim.svg"

const DetailProduct = () => {
  const { id } = useParams()
  const { data, error, loading } = useFetch(`/products/${id}`)
  const [imageIndex, setImageIndex] = useState(0)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='header_container mt-[50px] mb-[50px] px-4'>
      <div className='flex flex-col lg:flex-row gap-[30px] justify-center items-center'>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-[20px]'>
          <div className='flex flex-row lg:flex-col gap-4 mt-4 lg:mt-0'>
            {data?.images?.map((item, inx) => (
              <img
                key={inx}
                src={item}
                alt=""
                width={70}
                onClick={() => setImageIndex(inx)}
                className='border-[#F9F1E7] bg-[#F9F1E7] cursor-pointer rounded-[10px] p-[10px] 
              hover:scale-105 hover:border-[#B88E2F] hover:shadow-md transition duration-300 ease-in-out'
              />
            ))}
          </div>
          <div className='bg-[#F9F1E7] rounded-[10px]'>
            <img className='imgDetil max-w-[100%] lg:w-[450px]' src={data?.images[imageIndex]} alt="" />
          </div>
        </div>

        <div className='text-center lg:text-left'>
          <h2 className='text-[28px] lg:text-[42px] font-[600] mb-[10px]'>{data?.title}</h2>
          <p className='text-[20px] lg:text-[24px] text-[#9F9F9F] mb-[10px]'>Rs. {data?.price}</p>
          <img className='mb-[10px] mx-auto lg:mx-0' src={rasim} alt="" />
          <p className='w-full lg:w-[424px] text-center lg:text-left mb-[10px]'>{data?.description}</p>

          <h2 className='text-[#9F9F9F] mb-[10px]'>Size</h2>
          <div className="flex gap-2 flex-wrap justify-center lg:justify-start mb-2">
            <div className="w-10 h-10 text-center border duration-200 rounded cursor-pointer hover:bg-yellow-600 hover:text-white flex items-center justify-center">
              <p>L</p>
            </div>
            <div className="w-10 h-10 text-center border duration-200 rounded cursor-pointer hover:bg-yellow-600 hover:text-white flex items-center justify-center">
              XL
            </div>
            <div className="w-10 h-10 text-center border duration-200 rounded cursor-pointer hover:bg-yellow-600 hover:text-white flex items-center justify-center">
              XS
            </div>
          </div>


          <h2 className='text-[#9F9F9F] mb-[10px]'>Color</h2>
          <div className='flex gap-[16px] flex-wrap justify-center lg:justify-start mb-[20px]'>
            {["#816DFA", "#000000", "#B88E2F"].map((color, idx) => (
              <div key={idx} className={`w-[40px] h-[40px] rounded-full cursor-pointer transition duration-300 
            hover:border-[3px] hover:border-[#F9F1E7] hover:shadow-md hover:scale-110`}
                style={{ backgroundColor: color }}>
              </div>
            ))}
          </div>

          <div className='flex gap-[16px] flex-wrap justify-center lg:justify-start'>
            <div className='border flex w-[120px] justify-between pl-[7px] pr-[7px] h-[40px] 
          items-center rounded-[6px] cursor-pointer'>
              <div className='font-bold text-[20px]'>-</div>
              <span className='font-[600] text-[18px]'>1</span>
              <div className='font-bold text-[20px]'>+</div>
            </div>

            <div className='border flex w-[120px] justify-center items-center h-[40px] rounded-[6px] 
          cursor-pointer'>
              <h2 className='font-[600]'>Add To Cart</h2>
            </div>

            <div className='border flex w-[120px] justify-center items-center h-[40px] rounded-[6px] 
          cursor-pointer'>
              <h2 className='font-[600]'>+ Compare</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default DetailProduct

