import Marquee from 'react-fast-marquee';
import kompasLogo from './assets/kompas-logo-masthead.svg';
import bg from './assets/png-map-black-and-white-open-2000.png';
import React, { useState, useEffect } from 'react';
import bobo from'./assets/bobo.png';
import Gramedia from './assets/Gramedia.png';
import Tribun from './assets/Tribun.png';

export default function App() {
  const [showText, setShowText] = useState(false);
  

  useEffect(() => {
    // Memulai animasi setelah komponen dimuat
    setShowText(true);
  }, []);

  return (
  <div className="flex flex-coloum">
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
        height: '100vh',
        backgroundPositionY: '60px',
        
      }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-white bg-opacity-[86%]">
      </div>

      <nav className="relative flex items-center justify-between p-4 bg-gray-100">
        <div className="mx-12 cursor-pointer">
          <img
            src={kompasLogo}
            alt="Kompas Logo"
            className="h-8"
          />
        </div>

        {/* Right Section */}
        <div className="flex space-x-6 mx-12">
          <a className="px-4 py-2 font-bold text-blue-900 rounded hover:bg-blue-900 hover:text-white cursor-pointer transition duration-1000">
            SUBSCRIBE
          </a>
          <a className="px-4 py-2 font-bold text-blue-900 rounded hover:bg-blue-900 hover:text-white cursor-pointer transition duration-1000">
            SIGN IN
          </a>
        </div>
      </nav>

      {/* Existing content */}
      <h1
        className={`relative text-5xl font-bold mt-[200px] text-center transition-transform duration-1000 text-blue-900 font-sans ease-in-out ${
          showText ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        WELCOME TO KOMPAS GROUP
      </h1>

      <h1
        className={`relative text-l font-bold mt-[100px] mx-[100px] text-center transition-transform duration-1000 text-blue-900 font-sans ease-in-out ${
          showText ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        Kompas Gramedia merupakan perusahaan multi-industri di Indonesia yang hadir sejak 1963 dengan berbagai produk berbasis informasi dan pengetahuan. Kompas Gramedia terus berevolusi dalam menghadirkan berbagai solusi bisnis yang menjangkau seluruh lapisan masyarakat melalui 8 pilar utama, yaitu media, ritel dan penerbitan, perhotelan, manufaktur, penyelenggaraan event, edukasi, properti, hingga digital.
      </h1>

      <div className={`flex flex-row justify-center relative z-[10] mt-[50px] space-x-8 font-bold text-center ransition-transform duration-1000 text-blue-900 font-sans ease-in-out ${
          showText ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
        <div>
          <p className='text-3xl font-sans text-blue-900 '>400+ </p>
          <p className='text-l font-sans text-blue-900 '>Badan Usaha</p>
        </div>
        <div>
          <p className='text-3xl font-sans  text-blue-900 '>30+</p>
          <p className='text-l font-sans  text-blue-900 '>Provinsi Penyebaran</p>
        </div>
        <div>
          <p className='text-3xl font-sans text-blue-900 '>18.000+</p>
          <p className='text-l font-sans  text-blue-900 '>Karyawan Dan Mitra</p>
        </div>
        <div>
          <p className='text-3xl font-sans text-blue-900 '>61</p>
          <p className='text-l font-sans  text-blue-900 '>Tahun Berdiri</p>
        </div>
        </div>

        <div className='mt-[100px]' >
          <Marquee>
            <div className='mx-10'>
              <img src={bobo} className='h-[40px]'/>
            </div>
            <div className='mx-10' >
              <img src={Gramedia} className='h-[40px]'/>
            </div> 
            <div className='mx-10'>
              <img src={Tribun} className='h-[40px]'/>
            </div>
          </Marquee>
      </div>
      
    </div>
  </div>
  );
}