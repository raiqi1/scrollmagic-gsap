'use client'

import { useEffect } from 'react'
import ScrollMagic from 'scrollmagic'
import { gsap } from 'gsap'
import HoverBox from './Box'
import Boxdua from '@/components/Boxdua'
import Boxtiga from '@/components/Boxtiga'
import FourSection from '@/app/FourSection'

const KomponenKetiga = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller()

    const texts = document.querySelectorAll('.text')

    texts.forEach((textElement) => {
      gsap.set(textElement, { x: 0, opacity: 0 })
    })

    texts.forEach((textElement, index) => {
      new ScrollMagic.Scene({
        triggerElement: `#animate${index}`,
        triggerHook: 1,
        duration: '100%',
      })
        .on('enter', () => {
          gsap.to(textElement, {
            x: 0, // Bergerak ke posisi aslinya
            opacity: 1,
            duration: 1, // Durasi animasi
            ease: 'power2.out', // Jenis easing
            animation: gsap
              .timeline()
              .from(textElement, { x: -100, opacity: 0, duration: 1 }),
          })
        })
        .addTo(controller)
    })

    // Menghancurkan controller saat komponen di-unmount
    return () => {
      controller.destroy(true)
    }
  }, [])

  return (
    <div>
      <div className="p-10 md:mr-20 md:ml-20 md:mt-20 mb-7">
        <h2 className="font-bold text-5xl font-sans max-md:text-2xl text-white">
          Our projects
        </h2>
        <p className="text-[35px] mt-3 font-sans leading-[50px] max-md:text-xl text-white ">
          are very different in terms of priority, scale and complexity of
          implementation
        </p>
      </div>
      {/* Setiap teks akan memiliki ID yang berbeda untuk trigger animasi */}
      <div
        id="animate0"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="md:ml-28 md:mr-28"
      >
        <div className="text md:w-full max-sm:w-fit h-full">
          <HoverBox />
        </div>
      </div>
      <div
        id="animate1"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="md:ml-28 md:mr-28 mt-7"
      >
        <div className="text w-full h-full">
          <Boxdua />
        </div>
      </div>
      <div
        id="animate2"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="md:ml-28 md:mr-28 mt-7"
      >
        <div className="text w-full h-full">
          <Boxtiga />
        </div>
      </div>
      <div
        id="animate3"
        style={{
          height: '20vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></div>
    </div>
  )
}

export default KomponenKetiga
