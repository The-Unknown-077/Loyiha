import React from 'react'
import Locate from '../../components/locate/Locate'
import Products from '../../components/products/Products'
import { useFetch } from "../../hooks/useFetch"
import { useWishlist } from '../../zustand/useWishlist'
import AboutServices from '../../components/aboutServices/AboutServices'


const Wishlist = () => {
  const { data, error, loading } = useFetch("/products")
  const { wishlist } = useWishlist()
  return (
    <div>
      <Locate text="Whishlist" />
      <div className="mb-[72px]"></div>
      <Products data={wishlist} text="Whishlisted items" />
      <AboutServices />
    </div>
  )
}

export default Wishlist