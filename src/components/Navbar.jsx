import React, { useState } from 'react';
import kompasLogo from '../assets/kompas-logo-masthead.svg';
import WorldClock from './WorldClock';

const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState('Indonesia');

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <nav className="relative flex items-center justify-between p-4 bg-gray-100">
      <div className="mx-12 cursor-pointer">
        <img
          src={kompasLogo}
          alt="Kompas Logo"
          className="h-8"
        />
      </div>
      
      <div className="flex w-full items-center justify-end">
        <select value={selectedCity} onChange={handleCityChange} className="mr-3 px-fit py-fit border border-opacity-0 cursor-pointer text-blue-900 text-sm font-bold ">
          <option value="Indonesia">Indonesia</option>
          <option value="Singapore">Singapore</option>
        </select>
        <WorldClock selectedCity={selectedCity} />
      </div>
 
      <div className="flex space-x-4 mx-8 items-center">
        <a className="px-4 py-[5px] font-bold text-blue-900 rounded hover:bg-blue-900 hover:text-white cursor-pointer transition duration-1000">
          SUBSCRIBE
        </a>
        <a className="px-6 py-[5px] font-bold text-blue-900 rounded hover:bg-blue-900 hover:text-white cursor-pointer transition duration-1000">
          SIGN IN
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
