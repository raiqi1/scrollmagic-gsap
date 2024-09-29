'use client'

import { useEffect } from 'react'
import ScrollMagic from 'scrollmagic'

const KomponenKetiga = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller()

    // Mendapatkan semua elemen dengan kelas "text"
    const texts = document.querySelectorAll('.text')

    // Menyembunyikan teks di awal
    texts.forEach((textElement) => {
      textElement.style.transform = 'translateX(-100px)'
      textElement.style.opacity = '0'
    })

    // Membuat scene untuk setiap teks
    texts.forEach((textElement, index) => {
      new ScrollMagic.Scene({
        triggerElement: `#animate${index}`,
        triggerHook: 0.9, // Coba ubah trigger hook
        duration: '50%', // Durasi animasi
      })
        .on('enter', () => {
          textElement.style.transition = 'transform 1s ease, opacity 1s ease'
          textElement.style.transform = 'translateX(0)' // Bergerak ke posisi aslinya
          textElement.style.opacity = '1'
        })
        .on('leave', () => {
          textElement.style.transition =
            'transform 0.5s ease, opacity 0.5s ease'
          textElement.style.transform = 'translateX(-100px)' // Kembali ke posisi awal
          textElement.style.opacity = '0.8' // Sembunyikan sedikit
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
      <div>
        <h2 className="font-bold text-5xl font-sans max-md:text-2xl">
          Our projects
        </h2>
        <p className="text-[35px] mt-3 font-sans leading-[50px] max-md:text-xl">
          are very different in terms of priority, scale and complexity of
          implementation
        </p>
      </div>
      {/* Setiap teks akan memiliki ID yang berbeda untuk trigger animasi */}
      <div
        id="animate0"
        style={{
          height: '30vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h2 className="text">I will animate on scroll! 1</h2>
      </div>
      <div
        id="animate1"
        style={{
          height: '30vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <h2 className="text">I will animate on scroll! 2</h2>
      </div>
      <div
        id="animate2"
        style={{
          height: '35vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
        }}
      >
        <h2 className="text">I will animate on scroll! 3</h2>
      </div>
    </div>
  )
}

export default KomponenKetiga
