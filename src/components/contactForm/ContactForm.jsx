import React, { useState } from 'react'
import vectore from "./img/Vector.svg"
import phone from "./img/phone.png"
import clock from "./img/clock.png"
import axios from 'axios'

const ContactForm = () => {
  const BOT_TOKEN = "7915987730:AAGdULsP4M6JpK4NX7Uv9QxWLSa4GEGITAs"
  const CHAT_ID = "-1002766637232"

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    let text = `📝 Yangi xabar:\n`
    text += `👤 Ismi: ${data.name}\n`
    text += `📧 Email: ${data.email}\n`
    text += `📌 Subject: ${data.subject}\n`
    text += `💬 Xabar: ${data.massage}`

    axios
      .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: text,
      })
      .then(() => {
        alert("Xabaringiz yuborildi ✅")
        e.target.reset()
      })
      .catch((err) => {
        console.error("Telegramga yuborishda xatolik:", err)
        alert("Xatolik yuz berdi ❌")
      })
  }

  return (
    <section className='mt-[100px] mb-[100px] px-4'>
      <div className='text-center'>
        <h2 className='text-[30px] md:text-[40px] font-[600]'>Get In Touch With Us</h2>
        <p className='w-full md:w-[700px] mx-auto mb-[70px] text-[16px] text-gray-600'>
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
          Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-10 justify-around items-center'>
        {/* Chap tomon */}
        <div>
          <div className='flex gap-3 mb-[15px]'>
            <div>
              <img src={vectore} alt="address icon" />
            </div>
            <div className='mt-[10px]'>
              <b>Address</b>
              <p className='w-[220px]'>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className='flex gap-3 mb-[15px]'>
            <div>
              <img src={phone} alt="phone icon" />
            </div>
            <div className='mt-[10px]'>
              <b>Phone</b>
              <p className='w-[220px]'>Mobile: +(84) 546-6789</p>
              <p className='w-[220px]'>Mobile: +(84) 456-6789</p>
            </div>
          </div>

          <div className='flex gap-3 mb-[15px]'>
            <div>
              <img src={clock} alt="clock icon" />
            </div>
            <div className='mt-[10px]'>
              <b>Working Time</b>
              <p className='w-[220px]'>Monday-Friday: 9:00 - 22:00</p>
              <p className='w-[220px]'>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Form tomoni */}
        <div>
          <form onSubmit={handleSubmit} className='flex flex-col items-start w-full container'>
            <label htmlFor="name">Your Name</label>
            <input
              name='name'
              type="text"
              placeholder='Abc'
              className="border-2 border-[#aaa] rounded-[10px] pl-3 mt-2 h-[60px] mb-3 w-full min-[1000px]:w-[550px]"
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              name='email'
              type="email"
              placeholder='Abc@gmail.com'
              className="border-2 border-[#aaa] rounded-[10px] pl-3 mt-2 h-[60px] mb-3 w-full min-[1000px]:w-[550px]"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              name='subject'
              type="text"
              placeholder='This is an optional'
              className="border-2 border-[#aaa] rounded-[10px] pl-3 mt-2 h-[60px] mb-3 w-full min-[1000px]:w-[550px]"
            />

            <label htmlFor="massage">Message</label>
            <textarea
              name='massage'
              placeholder='Hi! I’d like to ask about...'
              className="border-2 border-[#aaa] rounded-[10px] pl-3 pt-2 mt-2 h-[120px] resize-none w-full min-[1000px]:w-[550px]"
              required
            />

            <button
              type='submit'
              className='h-[55px] rounded-[5px] mt-[20px] bg-[#B88E2F] text-white font-semibold hover:bg-[#a07929] transition-colors duration-300 w-full min-[1000px]:w-[280px]'
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default ContactForm
