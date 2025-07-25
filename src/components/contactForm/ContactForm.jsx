import React, { useState } from 'react'

const ContactForm = () => {
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")
  const [cName, setCName] = useState("")
  const [country, setCountry] = useState("")
  const [street, setStreet] = useState("")
  const [town, setTown] = useState("")
  const [zip, setZip] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  return (
    <>
      <form className='header_container mt-[50px] mb-[50px]'>
        <h1 className='text-[42px] font-[600]'>Billing details</h1>
        <div className='flex flex-col lg:flex-row gap-[30px] mt-[15px]'>
          <div className='mb-[10px] w-full lg:w-[211px]'>
            <label htmlFor="fullName">Full Name</label>
            <br />
            <input
              className='border-[2px] border-[#aaa] rounded-[10px] pl-[10px] mt-[10px] w-full h-[75px]'
              type="text"
              onChange={(e) => setFName(e.target.value)}
              value={fName}
              required
              id='fullName'
            />
          </div>
          <div className='w-full lg:w-[211px]'>
            <label htmlFor="lName">Last Name</label>
            <br />
            <input
              className='border-[2px] border-[#aaa] rounded-[10px] pl-[10px] mt-[10px] w-full h-[75px]'
              type="text"
              onChange={(e) => setLName(e.target.value)}
              value={lName}
              required
              id='lName'
            />
          </div>
        </div>

        <div className='mb-[15px] w-full lg:w-[453px]'>
          <label htmlFor="cname">Company Name (Optional)</label>
          <br />
          <input
            type="text"
            id='cname'
            onChange={(e) => setCName(e.target.value)}
            value={cName}
            className='w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]'
          />
        </div>

        <div className='mb-[15px] w-full lg:w-[453px]'>
          <label htmlFor="country">Country / Region</label>
          <br />
          <input
            type="text"
            id='country'
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            className='w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]'
          />
        </div>

        <div className='mb-[15px] w-full lg:w-[453px]'>
          <label htmlFor="street">Street address</label>
          <br />
          <input
            type="text"
            id='street'
            onChange={(e) => setStreet(e.target.value)}
            value={street}
            className='w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]'
          />
        </div>

        <div className='mb-[15px] w-full lg:w-[453px]'>
          <label htmlFor="town">Town / City</label>
          <br />
          <input
            type="text"
            id='town'
            onChange={(e) => setTown(e.target.value)}
            value={town}
            className='w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]'
          />
        </div>

        <div className='mb-[15px] w-full lg:w-[453px]'>
          <label htmlFor="pas">ZIP code</label>
          <br />
          <input
            type="password"
            id='pas'
            onChange={(e) => setZip(e.target.value)}
            value={zip}
            className='w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]'
          />
        </div>

        <div className='mb-[15px] w-full lg:w-[453px]'>
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="number"
            id='phone'
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className='w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]'
          />
        </div>

        <div className='mb-[15px] w-full lg:w-[453px]'>
          <label htmlFor="email">Email address</label>
          <br />
          <input
            type="email"
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className='w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]'
          />
        </div>
      </form>
    </>
  )
}

export default ContactForm
