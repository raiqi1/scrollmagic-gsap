'use client'
// components/HoverBox.js
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'

const DonateButton = ({ name, route }) => {
  console.log("route", route) 
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
        y: -7, // Gerak ke atas sedikit
        x: 6, // Gerak ke samping sedikit
        borderColor: '#000', // Mengubah border color menjadi putih
        ease: 'power3.out',
        backgroundColor: 'transparent',
      })
    })

    boxElement.addEventListener('mouseleave', () => {
      gsap.to(contentElement, {
        duration: 0.5,
        y: 0, // Kembali ke posisi semula
        x: 0, // Kembali ke posisi semula
        borderColor: '#000', // Mengembalikan border ke semula
        ease: 'power3.out',
        // background: "transparent"
      })
    })
  }, [])

  const handleClick = () => {
    router.push(route)
  }

  return (
    <div
      ref={boxRef}
      style={{
        backgroundColor: '#fff',
        borderRadius: '1px',
        // margin: '0 auto',
        // width: '100px',
      }}
      className="cursor-pointer"
    >
      <div
        ref={contentRef}
        style={{
          backgroundColor: '#fff',
          color: '#fff',
          padding: '5px',
          borderRadius: '1px',
          border: '3px solid #000 ',
          position: 'relative',
        }}
        onClick={handleClick}
      >
        <h2 className="text-center text-black text-2xl">{name}</h2>
      </div>
    </div>
  )
}

export default DonateButton
