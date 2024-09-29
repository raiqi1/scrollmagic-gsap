'use client'
import { useEffect, useRef } from 'react'
import ScrollMagic from 'scrollmagic'
import { gsap } from 'gsap'

const Home = () => {
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
            animation: gsap.timeline().from(element, {
              opacity: 0,
              y: 50,
              duration: 1,
            }),
          })
        })
        .addTo(controller)
    })

    return () => {
      controller.destroy(true)
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className=" w-full md:h-[100vh]"
    >
      <div className="box-lima flex justify-center items-center w-full mt-10 md:h-full">
        <iframe
          className="gambar md:w-full md:h-full"
          src="https://www.youtube.com/embed/5Wk1rp99B7o"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Home
