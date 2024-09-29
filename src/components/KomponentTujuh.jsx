/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollMagic from 'scrollmagic'

export default function KomponentTujuh() {
  const images = [
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa3401042d425391235aaa_Logo-adviRES.jpg',
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa33e1380de680b7110ebf_ovid-wind-logo.png',
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d803f32677c8352bc485_tbs_logo1-02.png',
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7edf0c46ce38f559328_download.png',
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7d930a5c2377aedf9d4_logo_laudis_accountancy.png',
    'https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7c51ad96b1cbf31b0c0_photo_2022-04-21%2020.43.09.jpeg',
  ]
  const sectionRef = useRef(null)

  useEffect(() => {
    const controller = new ScrollMagic.Controller()
    const elements = sectionRef.current.querySelectorAll('.box-lima') // Menargetkan setiap elemen dengan class "box-lima"

    elements.forEach((element) => {
      gsap.set(element, { opacity: 0, y: 50 }) // Mengatur posisi awal animasi

      // Buat scene untuk setiap elemen
      new ScrollMagic.Scene({
        triggerElement: element, // Menjalankan animasi saat elemen masuk viewport
        triggerHook: 1, // Mulai animasi saat elemen mencapai 80% dari viewport
        duration: '100%', // Durasi animasi lebih kecil
        // reverse: false, // Agar animasi berjalan bolak-balik
      })
        .on('enter', () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            // ease: 'power2.in',
            animation: gsap.timeline().from(element, {
              opacity: 1,
              y: 50,
              duration: 1,
            }),
          })
        })
        .addTo(controller)
    })

    // Bersihkan controller saat komponen tidak digunakan
    return () => {
      controller.destroy(true)
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:ml-32 max-sm:m-8 gap-5 mt-10 mb-28 "
    >
      <div className="md:mt-16 mb-4">
        <h2 className="font-bold text-5xl font-sans max-md:text-2xl text-black">
          Our partners
        </h2>
        <p className="md:text-[35px] mt-3 font-sans leading-[50px] max-md:text-xl text-black">
          are take care of our fund and help us with many questions
        </p>
      </div>
      <div className="flex flex-wrap md:gap-11 gap-y-24 max-sm:gap-5">
        {images.map((image, index) => (
          <div className="box-lima flex justify-center " key={index}>
            <div className=" flex flex-col justify-center ">
              <img
                src={image}
                alt=""
                className={`max-sm:w-[180px] md:w-[230px] grayscale ${
                  index === 2 || index === 5 ? ' md:h-[40px]' : 'md:h-[90px]'
                }`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className=' bg-white h-[50px]'>

      </div>
    </div>
  )
}
