/* eslint-disable @next/next/no-img-element */
'use client'
// components/HoverBox.js
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const BoxDetail = ({ total, image, title }) => {
  const boxRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const boxElement = boxRef.current
    const contentElement = contentRef.current

    // Tambahkan event listener untuk hover
    boxElement.addEventListener('mouseenter', () => {
      gsap.to(contentElement, {
        duration: 0.5,
        scale: 0.9, // Mengecilkan konten
        borderColor: '#000', // Border akan menyatu ke background
        // backgroundColor: '#000', // Background berubah menjadi hitam
        ease: 'power3.out',
      })
    })

    boxElement.addEventListener('mouseleave', () => {
      gsap.to(contentElement, {
        duration: 0.5,
        scale: 1, // Kembali ke ukuran semula
        borderColor: '#000', // Border kembali ke semula
        backgroundColor: 'yellow ', // Background kembali ke semula
        ease: 'power3.out',
      })
    })
  }, [])

  return (
    <div
      ref={boxRef}
      style={{
        borderRadius: '1px',
        backgroundColor: 'yellow',
      }}
      className="cursor-pointer max-sm:w-[180px]  "
    >
      <div
        ref={contentRef}
        style={{
          backgroundColor: 'yellow',
          color: 'yellow',
          borderRadius: '1px',
          border: '3px solid #000',
          position: 'relative',
          transformOrigin: 'center', // Pastikan transformasi terjadi dari pusat
        }}
        className=" h-full  place-content-center md:p-16 "
      >
        <div className="text-black h-full font-sans max-sm:p-2 ">
          <div className="place-content-center flex justify-center">
            <img
              src={image}
              alt=""
              className=" md:w-[200px] md:h-[150px]  max-sm:w-fit text-center place-content-center flex justify-center grayscale "
            />
          </div>
          <h2 className="text-center text-black md:text-5xl mt-7 font-bold">
            {total}
          </h2>
          <div className=" flex text-center justify-center">
            <p className="text-center md:text-2xl font-bold">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxDetail
