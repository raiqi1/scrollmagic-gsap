'use client'
import React, { useEffect, useRef } from 'react'
import BoxLima from './BoxLima'
import { gsap } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { User2 } from './User2'
import BoxEnam from './BoxEnam'

export default function KomponentLima() {
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
      className="flex flex-col md:ml-32 max-sm:m-8 gap-5 mt-10 mb-28"
    >
      <div className="md:mt-16 mb-4">
        <h2 className="font-bold text-5xl font-sans max-md:text-2xl text-black">
          Socially active citizens
        </h2>
        <p className="md:text-[35px] mt-3 font-sans leading-[50px] max-md:text-xl text-black">
          support us
        </p>
      </div>
      <div className="flex flex-wrap gap-8">
        {User2.map((user, index) => (
          <div className="box-lima" key={index}>
            <BoxEnam
              image={user.img}
              name={user.name}
              position={user.position}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
