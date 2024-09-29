'use client'
import React, { useState } from 'react'

export default function Swipper() {
  const img = [
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134ba5fd0863630c995_01000n3e-a982_1280x720.jpeg',
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134fb5f3e365d6c2fa4_208804.jpeg',
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6274213417980bd532a6f1cf_773119CB-AD7C-45E3-A821-6C9DDC8F2BED_w1023_r1_s.jpeg',
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62742134174964bb4f26ee8a_8605194-zoopatrul-755.jpeg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    if (currentIndex === img.length - 1) {
      setCurrentIndex(0) // Kembali ke awal
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(img.length - 1) // Pindah ke slide terakhir
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  return (
    <div className="relative w-full h-full overflow-hidden border-4 border-black">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {img.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <div className="flex w-full justify-center">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="md:w-[650px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigasi Kiri */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow bg-white"
      >
        &#10094; {/* Ikon Kiri */}
      </button>

      {/* Navigasi Kanan */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 shadow bg-white"
      >
        &#10095; {/* Ikon Kanan */}
      </button>

      {/* Indikator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {img.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
