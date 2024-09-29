'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useRouter } from 'next/navigation'

export default function ButtonBack() {
  const router = useRouter()
  const arrowRef = useRef(null)

  useEffect(() => {
    const button = document.querySelector('.apply-button')

    button.addEventListener('mouseenter', () => {
      gsap.to(arrowRef.current, { x: -10, duration: 0.3, ease: 'power2.out' })
    })

    button.addEventListener('mouseleave', () => {
      gsap.to(arrowRef.current, { x: 0, duration: 0.3, ease: 'power2.out' })
    })

    // Cleanup event listeners
    return () => {
      button.removeEventListener('mouseenter', null)
      button.removeEventListener('mouseleave', null)
    }
  }, [])

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div className="apply-button-container mt-10">
      <button
        className="apply-button text-black md:px-6 sm:px-2 py-4 flex items-center justify-center gap-4 "
        onClick={handleClick}
      >
        <span ref={arrowRef} className="ml-2 mt-1">
          <img
            src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6273a272fe3407579aa3d6c9_PngItem_344959.png"
            alt=""
            className=" w-10 "
          />
        </span>
        <span className="font-sans font-bold text-xl ">back to homepage</span>
      </button>
    </div>
  )
}
