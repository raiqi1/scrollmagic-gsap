/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export const Medsos = () => {
  // Membuat referensi untuk setiap gambar
  const youtubeRef = useRef(null)
  const instagramRef = useRef(null)
  const facebookRef = useRef(null)
  const patreonRef = useRef(null)
  const telegramRef = useRef(null)

  useEffect(() => {
    // Function untuk menambah animasi hover ke setiap gambar
    const addHoverEffect = (ref) => {
      ref.current.addEventListener('mouseenter', () => {
        gsap.to(ref.current, {
          scale: 0.8, // Mengecilkan gambar
          duration: 0.1, // Durasi animasi
          ease: 'power1.out', // Efek easing
        })
      })

      ref.current.addEventListener('mouseleave', () => {
        gsap.to(ref.current, {
          scale: 1, // Kembali ke ukuran semula
          duration: 0.3,
          ease: 'power1.out',
        })
      })
    }

    // Menambah animasi hover pada setiap gambar
    addHoverEffect(youtubeRef)
    addHoverEffect(instagramRef)
    addHoverEffect(facebookRef)
    addHoverEffect(patreonRef)
    addHoverEffect(telegramRef)
  }, [])

  return (
    <div className="flex mt-5 gap-3 cursor-pointer">
      <img
        ref={youtubeRef}
        src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274433d06989d76edcff015_9055867_youtube_bxl.svg"
        alt="YouTube"
        width={40}
      />
      <img
        ref={instagramRef}
        src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274449bf840c377311f2e08_9055851_instagram_bxl.svg"
        width={40}
        alt="Instagram"
      />
      <img
        ref={facebookRef}
        src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg"
        width={40}
        alt="Facebook"
      />
      <img
        ref={patreonRef}
        src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg"
        width={40}
        alt="Patreon"
      />
      <img
        ref={telegramRef}
        src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg"
        width={40}
        alt="Telegram"
      />
    </div>
  )
}
