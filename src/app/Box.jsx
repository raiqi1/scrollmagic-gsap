'use client'
// components/HoverBox.js
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'

const HoverBox = () => {
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
    router.push('/detail/1')
  }

  return (
    <div
      ref={boxRef}
      style={{
        backgroundColor: '#000',
        borderRadius: '1px',
        // margin: '0',
        position: 'relative',
        cursor: 'pointer',
      }}
      className=' max-sm:mr-10 max-sm:ml-10'
    >
      <div
        ref={contentRef}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          borderRadius: '1px',
          border: '2px solid #fff ',
          position: 'relative',
          cursor: 'pointer',
        }}
        className=" md:p-10 max-sm:p-2 md:pt-16"
        onClick={handleClick}
      >
        <h2 className="font-bold text-4xl font-sans max-md:text-2xl text-white">
          Emergency Aid. WAR 2022.
        </h2>
        <p className="text-[30px] mt-3 font-sans leading-[50px] max-md:text-xl text-white ">
          providing food and medicine to the shelters and animals which lost
          their homes and families due to the war
        </p>
      </div>
    </div>
  )
}

export default HoverBox
