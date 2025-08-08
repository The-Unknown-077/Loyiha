import React from "react";
import {  useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center  text-white text-center px-4 p-8 h-screen">
      <h1 className="text-9xl font-extrabold text-[#B88E2F] drop-shadow-md">404</h1>
      <h2 className="mt-4 text-4xl font-bold text-gray-900">Page Not Found</h2>
      <p className="mt-2 text-gray-900 text-lg">
      Sorry, the page you are looking for does not exist.
      </p>
      <div className="mt-8 flex gap-4">

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-xl bg-[#B88E2F] hover:bg-[#B88E2F] transition-colors shadow-lg  font-semibold">go Home</button>

        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-xl bg-[#B88E2F] hover:bg-[#B88E2F] transition-colors shadow-md font-semibold">Go back</button>
      </div>
    </div>
  );
};

export default NotFound;
