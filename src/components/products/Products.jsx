import React from 'react'
import { useNavigate } from 'react-router-dom'
import img1 from "./images/like (2).png"
import svg1 from "./images/like (3).png"
import img2 from "./images/ant-design_shopping-cart-outlined.svg"
import { useWishlist } from '../../zustand/useWishlist'
import { useCart } from '../../zustand/useCart'
import image from "./images/grocery-store.png"

const Products = ({ data, text, limit, setLimit }) => {

  const { toggleWishlist, wishlist } = useWishlist()
  const { add, cart } = useCart()

  const navigate = useNavigate()

  return (
    <section className='flex justify-center items-center flex-col'>
      <h1 className='text-center text-xl font-bold text-[40px] text-[#3A3A3A]'>{text ? text : ""}</h1>
      <div className='p-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container'>
        {
          data?.map((products) => (
            <div key={products.id} className="relative group">
              <div>
                <div className="bg-[#f5f5f5] border-b border-gray-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <button onClick={() => toggleWishlist(products)} className="bg-white bg-center p-2 rounded-full size-[45px] shadow hover:bg-gray-100">
                      {
                        wishlist.some((item) => item.id === products.id) ?
                          <img src={svg1} alt="" /> :
                          <img src={img1} className='' alt="" />

                      }
                    </button>
                    <button onClick={() => {
                      if (!cart.some((item) => item.id === products.id)) {
                        add(products);
                      }
                    }}
                    className="bg-white bg-center p-2 rounded-full shadow hover:bg-gray-100 transition">
                    <img src={cart.some((item) => item.id === products.id) ? image : img2} alt="" className='size-[28px]' />
                    </button>
                  </div>

                  <img
                    className="cursor-pointer w-full h-full object-cover"
                    onClick={() => navigate(`/product/${products.id}`)}
                    src={products.thumbnail}
                    alt=""
                  />
                </div>

                <div className="w-full h-[100px] bg-[#f4f5f7] p-[10px]">
                  <h2 className="text-[20px] font-[600]">{products.brand}</h2>
                  <p className="text-[#898989]">{products.title}</p>
                  <h3 className="font-[600]">Rp {products.price}</h3>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <button onClick={() => setLimit(limit + 12)} className='mx-auto mb-[68px] text-center duration-300 hover:bg-[#B88E2F] hover:text-[#fff] py-[12px] px-[78px] font-bold text-[16px] text-[#B88E2F] border-[1px] border-[#B88E2F] leading-[150%]'>Show More</button>
    </section>
  )
}

export default Products