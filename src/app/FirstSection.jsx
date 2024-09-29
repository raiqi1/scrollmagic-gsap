'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ScrollMagic from 'scrollmagic'
import { Medsos } from '@/components/Medsos'
import { DiamondArrow } from '@/components/DiamondArrow'
import ImageSwape from '@/components/ImageSwape'

export default function FirstSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const controller = new ScrollMagic.Controller()

    // Trigger animasi saat cursor masuk ke section
    sectionRef.current.addEventListener('mouseenter', () => {
      gsap.fromTo(
        sectionRef.current.querySelector('.image'),
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
      )

      gsap.fromTo(
        sectionRef.current.querySelector('.text-h2'),
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.3 },
      )

      gsap.fromTo(
        sectionRef.current.querySelector('.medsos-h1'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.6 },
      )
    })

    return () => {
      controller.destroy()
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="bg-yellow-300 section"
    >
      <div className="items-center max-sm:flex justify-center place-content-center align-middle flex">
        <div className="mt-32">
          <div className="flex w-[600px] max-sm:w-fit h-full gap-5 max-sm:mr-24 max-sm:ml-24 ">
            <div className="image">
              <ImageSwape />
            </div>
            <h2 className="text-h2 font-sans font-bold md:text-6xl max-sm:text-2xl md:w-[300px]">
              Innovative Solutions for Animals
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 medsos-h1">
        <div className="flex flex-col">
          <h1 className="md:text-4xl text-center font-sans">charity organization</h1>
          <div className="flex justify-center">
            <Medsos />
          </div>
          <div className="flex justify-center mt-2">
            <DiamondArrow />
          </div>
        </div>
      </div>
    </div>
  )
}
