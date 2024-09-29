/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

export default function FirstSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    'https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg',
    'https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 2000) // Ganti gambar setiap 2 detik
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="bg-yellow-400 flex justify-center">
      <div className="items-center justify-center place-content-center align-middle">
        <div className="flex">
          <img src={images[currentImage]} alt="Animal Logo" />
          <h1>Innovative Solutions for Animals</h1>
        </div>
      </div>
    </div>
  )
}
