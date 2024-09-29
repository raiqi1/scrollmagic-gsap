'use client'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function ImageSwape() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    'https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg',
    'https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg',
  ]

  const imageRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(imageRef.current, {
        y: '100%',
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length)
          gsap.fromTo(
            imageRef.current,
            { y: '-100%', opacity: 0 },
            { y: '0%', opacity: 1, duration: 0.3 },
          )
        },
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [images.length])
  return (
    <div>
      <div ref={imageRef}>
        <img
          src={images[currentImage]}
          alt="Animal Logo"
          className='md:w-[250px] md:h-[200px] max-sm:w-[100px] max-sm:h-[100px]'
        />
      </div>
    </div>
  )
}
