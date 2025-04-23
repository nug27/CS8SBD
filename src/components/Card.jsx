import React from 'react';

export default function Card({ image, category, content }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Bagian atas: Gambar */}
      <img className="w-full h-48 object-cover" src={image} alt={category} />

      {/* Bagian tengah: Jenis berita */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-900">{category}</div>
      </div>

      {/* Bagian bawah: Berita */}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
}