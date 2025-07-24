import React from 'react'
import Locate from '../../components/locate/Locate'
import CartDetail from '../../components/cartDetail/CartDetail'
import AboutServices from '../../components/aboutServices/AboutServices'

const Cart = () => {
  return (
    <>
      <Locate text="Cart" />
      <div className="mb-[72px]"></div>
      <CartDetail />
      <div className="mb-[85px]"></div>
      <AboutServices />
    </>
  )
}

export default Cart