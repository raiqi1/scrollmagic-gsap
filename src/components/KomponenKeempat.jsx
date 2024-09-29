/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollMagic from 'scrollmagic'
import Box from './Box'
import { DataShelterBox } from './Data'
import ButtonApply from './ButtonApply'

export default function KomponentTujuh() {
  const sectionRef = useRef(null)
  const buttonApplyRef = useRef(null)
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
      })
        .on('enter', () => {
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: 1,
            animation: gsap.timeline().from(element, {
              opacity: 1,
              y: 50,
              duration: 1,
            }),
          })
        })
        .addTo(controller)
    })

    gsap.set(buttonApplyRef.current, { opacity: 0, x: 0 }) // Mengatur posisi awal di luar viewport dari sisi kiri

    new ScrollMagic.Scene({
      triggerElement: buttonApplyRef.current,
      triggerHook: 1, // Mulai animasi saat elemen mencapai 80% dari viewport
      duration: '100%',
    })
      .on('enter', () => {
        gsap.to(buttonApplyRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out', // Jenis easing
          animation: gsap.timeline().from(buttonApplyRef.current, {
            opacity: 0,
            x: -100,
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
    <div
      ref={sectionRef}
      className="flex flex-col md:ml-32 mr-20 max-sm:m-5 gap-5 mt-10 mb-28 "
    >
      <div className="md:mt-16 mb-4">
        <h2 className="font-bold text-5xl font-sans max-md:text-2xl text-black">
          Our partners
        </h2>
        <p className="md:text-[35px] mt-3 font-sans leading-[50px] max-md:text-xl text-black">
          are take care of our fund and help us with many questions
        </p>
      </div>
      <div className="flex flex-wrap md:gap-11 gap-y-24 max-sm:gap-3 w-full max-sm:place-content-center ">
        {DataShelterBox.map((name, index) => (
          <div
            className="box-lima flex justify-center bg-blue-800 "
            key={index}
          >
            <div className=" flex flex-col justify-center h-full w-[300px] max-sm:w-[150px] max-md:w-[200px] max-[820px]:w-[200px] ">
              <Box name={name.name} />
            </div>
          </div>
        ))}
      </div>
      <div ref={buttonApplyRef} className=" mt-10">
        <ButtonApply />
      </div>
    </div>
  )
}
