'use client'
// components/HoverBox.js
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'

const Boxtiga = () => {
  const router = useRouter()
  const boxRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const boxElement = boxRef.current
    const contentElement = contentRef.current

    // Tambahkan event listener untuk hover
    boxElement.addEventListener('mouseenter', () => {
      gsap.to(contentElement, {
        duration: 0.5,
        y: -13, // Gerak ke atas sedikit
        x: 13, // Gerak ke samping sedikit
        borderColor: '#fff', // Mengubah border color menjadi putih
        ease: 'power3.out',
        backgroundColor: 'transparent',
      })
    })

    boxElement.addEventListener('mouseleave', () => {
      gsap.to(contentElement, {
        duration: 0.5,
        y: 0, // Kembali ke posisi semula
        x: 0, // Kembali ke posisi semula
        borderColor: '#fff', // Mengembalikan border ke semula
        ease: 'power3.out',
        // background: "transparent"
      })
    })
  }, [])

  const handleClick = () => {
    router.push('/detailshelter/1')
  }

  return (
    <div
      ref={boxRef}
      style={{
        borderRadius: '1px',
        // margin: '0',
        position: 'relative',
      }}
      className="bg-pink-500 max-sm:mr-10 max-sm:ml-10"
      onClick={handleClick}
    >
      <div
        ref={contentRef}
        style={{
          // backgroundColor: '#000',
          color: '#fff',
          borderRadius: '1px',
          border: '2px solid #fff ',
          position: 'relative',
        }}
        className=" md:p-10 md:pt-16 max-sm:p-2"
      >
        <h2 className="font-bold text-4xl font-sans max-md:text-2xl text-white">
          Education and Control
        </h2>
        <p className="md:text-[30px] mt-3 font-sans leading-[50px] max-md:text-xl text-white ">
          lectures on communication, organisation and coordination of processes,
          control over the use of aid
        </p>
      </div>
    </div>
  )
}

export default Boxtiga
