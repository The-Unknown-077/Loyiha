import React, { useState } from 'react';

const CheckoutForm = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [cName, setCName] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [town, setTown] = useState('');
  const [zip, setZip] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const sendTelegramMessage = (message) => {
    const botToken = '7915987730:AAGdULsP4M6JpK4NX7Uv9QxWLSa4GEGITAs';
    const chatId = '-1002766637232';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
        Yangi buyurtma:
        Ism: ${fName}
        Familiya: ${lName}
        Kompaniya: ${cName || 'Kiritilmagan'}
        Mamlakat: ${country}
        Manzil: ${street}
        Shahar: ${town}
        ZIP: ${zip}
        Telefon: ${phone}
        Email: ${email}
    `;

    sendTelegramMessage(message);

    setFName('');
    setLName('');
    setCName('');
    setCountry('');
    setStreet('');
    setTown('');
    setZip('');
    setPhone('');
    setEmail('');

    alert('Buyurtma yuborildi!');
  };

  return (
    <form className="container mt-[50px] mb-[50px]" onSubmit={handleSubmit}>
      <h1 className="text-[42px] font-[600]">Billing details</h1>

      <div className="flex flex-col lg:flex-row gap-[30px] mt-[15px]">
        <div className="w-full lg:w-[211px]">
          <label htmlFor="fName">Full Name</label>
          <input
            id="fName"
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            required
            className="border-[2px] border-[#aaa] rounded-[10px] pl-[10px] mt-[10px] w-full h-[75px]"
          />
        </div>
        <div className="w-full lg:w-[211px]">
          <label htmlFor="lName">Last Name</label>
          <input
            id="lName"
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            required
            className="border-[2px] border-[#aaa] rounded-[10px] pl-[10px] mt-[10px] w-full h-[75px]"
          />
        </div>
      </div>

      <div className="w-full lg:w-[453px] mt-[15px]">
        <label htmlFor="cName">Company Name (Optional)</label>
        <input
          id="cName"
          type="text"
          value={cName}
          onChange={(e) => setCName(e.target.value)}
          className="w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]"
        />
      </div>

      <div className="w-full lg:w-[453px] mt-[15px]">
        <label htmlFor="country">Country / Region</label>
        <input
          id="country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]"
        />
      </div>

      <div className="w-full lg:w-[453px] mt-[15px]">
        <label htmlFor="street">Street Address</label>
        <input
          id="street"
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]"
        />
      </div>

      <div className="w-full lg:w-[453px] mt-[15px]">
        <label htmlFor="town">Town / City</label>
        <input
          id="town"
          type="text"
          value={town}
          onChange={(e) => setTown(e.target.value)}
          className="w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]"
        />
      </div>

      <div className="w-full lg:w-[453px] mt-[15px]">
        <label htmlFor="zip">ZIP Code</label>
        <input
          id="zip"
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]"
        />
      </div>

      <div className="w-full lg:w-[453px] mt-[15px]">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]"
        />
      </div>

      <div className="w-full lg:w-[453px] mt-[15px]">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[75px] pl-[10px] border-[2px] border-[#aaa] rounded-[10px] mt-[10px]"
        />
      </div>

      <button
        type="submit"
        className="w-[453px] h-[75px] mt-[30px] bg-[#B88E2F] text-white rounded-[10px] cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default CheckoutForm;
