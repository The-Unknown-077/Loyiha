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
    const botToken = 'BOT_TOKENING';
    const chatId = 'CHAT_IDING';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    <div className="flex flex-col lg:flex-row container mx-auto px-4 gap-8">
      
      {/* FORM */}
      <form
        className="w-full lg:w-2/3 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl md:text-[42px] font-semibold">Billing details</h1>

        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="fName">Full Name</label>
            <input
              id="fName"
              type="text"
              value={fName}
              onChange={(e) => setFName(e.target.value)}
              required
              className="border-2 border-gray-400 rounded-lg pl-2 mt-2 w-full h-[60px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="lName">Last Name</label>
            <input
              id="lName"
              type="text"
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              required
              className="border-2 border-gray-400 rounded-lg pl-2 mt-2 w-full h-[60px]"
            />
          </div>
        </div>

        {[
          { id: 'cName', label: 'Company Name (Optional)', value: cName, set: setCName },
          { id: 'country', label: 'Country / Region', value: country, set: setCountry },
          { id: 'street', label: 'Street Address', value: street, set: setStreet },
          { id: 'town', label: 'Town / City', value: town, set: setTown },
          { id: 'zip', label: 'ZIP Code', value: zip, set: setZip },
          { id: 'phone', label: 'Phone', value: phone, set: setPhone },
          { id: 'email', label: 'Email Address', value: email, set: setEmail },
        ].map((field) => (
          <div className="mt-4" key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              type={field.id === 'email' ? 'email' : 'text'}
              value={field.value}
              onChange={(e) => field.set(e.target.value)}
              className="w-full h-[60px] pl-2 border-2 border-gray-400 rounded-lg mt-2"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full md:w-[300px] h-[60px] mt-6 bg-[#B88E2F] text-white rounded-lg"
        >
          Submit
        </button>
      </form>

      {/* ORDER SUMMARY */}
      <div className="w-full lg:w-1/3 mt-5 lg:mt-[100px]">
        <div className="sticky top-[25  0px] mb-[120px] bg-white shadow-md p-5 rounded-lg">
          <div className="flex justify-between items-center border-b border-gray-300 pb-5">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg md:text-xl font-medium">Product</h3>
              <p>Subtotal</p>
              <p>Total</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-lg md:text-xl font-medium">Rs</h3>
              <p>Rs. </p>
              <p>Rs. </p>
              <h2 className="text-lg md:text-xl text-[#B88E2F] font-bold">Rs.</h2>
            </div>
          </div>

          <div className="py-4">
            <div className="flex gap-2">
              <input type="radio" name="paymentMethod" id="bank1" />
              <label htmlFor="bank1">Direct Bank Transfer</label>
            </div>
            <p className="text-gray-500 text-sm">
              Make your payment directly into our bank account...
            </p>
          </div>

          <div className="py-4">
            <div className="flex gap-2">
              <input type="radio" name="paymentMethod" id="bank2" />
              <label htmlFor="bank2">Direct Bank Transfer</label>
            </div>
            <div className="flex gap-2 mt-2">
              <input type="radio" name="paymentMethod" id="cod" />
              <label htmlFor="cod">Cash On Delivery</label>
            </div>
          </div>

          <p className="text-sm">
            Your personal data will be used to support your experience...
          </p>

          <button className="w-[100%] py-3 px-10 border rounded-lg mt-5 hover:bg-black hover:text-white">
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

