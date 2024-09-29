'use client'
import React, { useEffect, useRef } from 'react'
import { Medsos } from './Medsos'
import { gsap } from 'gsap'
import ScrollMagic from 'scrollmagic'

export default function FooterKomponent() {
  const textHover = useRef(null)
  const imageRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    // Function untuk menambah animasi hover ke setiap gambar
    const addHoverEffect = (ref) => {
      ref.current.addEventListener('mouseenter', () => {
        gsap.to(ref.current, {
          scale: 0.9, // Mengecilkan gambar
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
    addHoverEffect(textHover)

    // Animasi gambar muncul dari bawah
    const controller = new ScrollMagic.Controller()

    gsap.set(imageRef.current, { opacity: 0, y: 0 }) // Set posisi awal di bawah dan tidak terlihat

    new ScrollMagic.Scene({
      triggerElement: footerRef.current,
      triggerHook: 0.9,
      duration: '90%',
    })
      .on('enter', () => {
        gsap.to(imageRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          animation: gsap.timeline().from(imageRef.current, {
            opacity: 0,
            y: 200,
            duration: 1,
          }),
        })
      })
      .addTo(controller)

    return () => {
      controller.destroy(true)
    }
  }, [])

  return (
    <div ref={footerRef} className="w-full flex justify-center p-16 h-[100vh]">
      <div className="flex flex-wrap md:gap-56">
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-5xl font-sans max-md:text-2xl text-black">
            Contact Us
          </h2>
          <p className="md:text-[35px] mt-3 font-sans leading-[50px] max-md:text-xl text-black">
            Kyiv, Ukraine
          </p>
          <p
            ref={textHover}
            className="md:text-[35px] mt-3 font-sans leading-[50px] max-md:text-xl text-black cursor-pointer"
          >
            mail@isa.co.ua
          </p>
          <div>
            <Medsos />
          </div>
        </div>
        <img
          ref={imageRef}
          src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg"
          alt=""
          className="max-sm:w-[180px] md:w-[500px]"
        />
      </div>
    </div>
  )
}
