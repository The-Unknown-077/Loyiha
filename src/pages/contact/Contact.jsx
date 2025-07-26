import React from 'react'
import ContactForm from '../../components/contactForm/ContactForm'
import Locate from '../../components/locate/Locate'
import AboutServices from '../../components/aboutServices/AboutServices'


const Contact = () => {
  return (
    <>
        <Locate text="Contact"/>
        <ContactForm />
        <AboutServices />
        {/* about services ni qop qoydm */}
    </>
  )
}

export default Contact