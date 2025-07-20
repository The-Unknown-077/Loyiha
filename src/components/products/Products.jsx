import React from 'react'
import { useNavigate } from 'react-router-dom'
const Products = ({ data }) => {

  const navigate = useNavigate()

  return (
    <>
      <h1 className='text-center text-xl font-bold text-[40px] text-[#3A3A3A]'>Our Products</h1>
      <div className='p-[50px] grid grid-cols-5 gap-3'>  
        {
          data?.map((products) => (
            <div key={products.id}>
              <div>
                <div className='bg-[#f5f5f5] border-b border-gray-300'>
                  <img className='cursor-pointer w-full h-full object-cover' onClick={() => navigate(`/product/${products.id}`)} src={products.thumbnail} alt="" />
                </div>
                <div className='w-[100%] h-[100px] bg-[#f4f5f7] p-[10px]'>
                  <h2 className='text-[20px] font-[600]'>{products.brand}</h2>
                  <p className='text-[#898989]'>{products.title}</p>
                  <h3 className='font-[600]'>Rp {products.price}</h3>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Products