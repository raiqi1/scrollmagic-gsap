/* eslint-disable @next/next/no-img-element */
'use client'
// components/HoverBox.js
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const BoxLima = ({ name, image, position }) => {
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
      className="cursor-pointer max-sm:w-[180px] md:w-[250px] h-full"
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
        className=" h-full pb-[40px] pt-[30px]  place-content-cente"
      >
        <div className="text-black h-full font-sans max-sm:p-2 ">
          <div className="place-content-center flex justify-center">
            <img
              src={image}
              alt=""
              className=" w-[180px] max-sm:w-[140px] text-center place-content-center flex justify-center grayscale "
            />
          </div>
          <h2 className="text-center text-black text-xl mt-7">{name}</h2>
          <div className=" flex text-center justify-center">
            <p className="text-center w-[150px]">{position}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxLima
