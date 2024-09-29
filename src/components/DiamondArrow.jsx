'use client'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { IoIosArrowDown } from 'react-icons/io'
import { PiDiamondFill } from 'react-icons/pi'

export const DiamondArrow = () => {
  const diamondRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    // Sembunyikan panah saat memulai
    gsap.set(arrowRef.current, { opacity: 0 })

    const timeline = gsap.timeline({ repeat: -1, yoyo: false })

    // Animasi untuk belah ketupat
    timeline
      .fromTo(
        diamondRef.current,
        {
          scale: 0.5, // Ukuran awal belah ketupat kecil
          y: -20, // Mulai di atas
          opacity: 1,
        },
        {
          y: 20, // Jatuh ke bawah
          duration: 1,
          ease: 'power1.inOut', // Efek easing saat jatuh
        },
      )
      .to(diamondRef.current, {
        opacity: 0, // Menghilangkan belah ketupat
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          // Setelah belah ketupat menghilang, tampilkan ikon panah di tempat yang sama
          gsap.to(arrowRef.current, { opacity: 1, duration: 0.5 })
        },
      })
      .to(arrowRef.current, {
        y: -30, // Gerakkan panah ke atas
        duration: 1,
        ease: 'power1.inOut', // Efek easing saat panah naik
        onComplete: () => {
          // Sebelum panah sepenuhnya ke atas, sembunyikan panah dan kembalikan belah ketupat
          gsap.to(arrowRef.current, { opacity: 0, duration: 0 })
        },
      })
      .to(diamondRef.current, {
        duration: 0.1,
        scale: 0.5, // Kembali ke ukuran awal belah ketupat
        y: 0, // Kembali ke posisi asli
      })
  }, [])

  return (
    <div className="relative " style={{ width: '80px', height: '80px' }}>
      {/* Ikon belah ketupat */}
      <div
        ref={diamondRef}
        style={{
          opacity: 1,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <PiDiamondFill size={30} />
      </div>

      {/* Ikon panah ke bawah */}
      <div
        ref={arrowRef}
        style={{
          opacity: 0, // Pastikan panah dimulai dengan opacity 0
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)', // Posisikan panah ke tengah
        }}
      >
        <IoIosArrowDown size={30} color="black" />
      </div>
    </div>
  )
}
