import bg from './assets/png-map-black-and-white-open-2000.png';
import React, { useState, useEffect } from 'react';
import CabangUsaha from './components/CabangUsaha.jsx';
import Navbar from './components/Navbar.jsx';
import CountCard from './components/CountCard.jsx';

export default function App() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);
  
  // Data array for CountCards
  const countData = [
    { end: 400, data: "Badan Usaha" },
    { end: 30, data: "Provinsi Penyebaran" },
    { end: 18000, data: "Karyawan Dan Mitra" },
    { end: 61, data: "Tahun Berdiri" }
  ];

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

      <Navbar />

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

      {/* Changed from flex to grid for responsiveness */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-6xl px-4 relative z-[10] mt-[50px] font-bold text-center transition-transform duration-1000 text-blue-900 font-sans ease-in-out ${
          showText ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
        {countData.map((item, index) => (
          <CountCard 
            key={`count-card-${index}`} 
            end={item.end} 
            data={item.data} 
          />
        ))}
      </div>
      <CabangUsaha />
    </div>
  </div>
  );
}