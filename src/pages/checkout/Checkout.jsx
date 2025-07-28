import React from 'react'
import ChekoutForm from '../../components/checkoutForm/ChekoutForm'
import AboutServices from '../../components/aboutServices/AboutServices'
import Locate from '../../components/locate/Locate'

const Checkout = () => {
  return (
    <>
      <Locate text="Checkout" />
      <ChekoutForm />
      <AboutServices />
    </>
  )
}

export default Checkout