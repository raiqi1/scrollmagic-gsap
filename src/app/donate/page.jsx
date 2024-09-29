import React from 'react'
import DonateComponent from '@/components/DonateComponent'
import Footer from '../Footer'

export default function Page() {
  return (
    <>
      <div className="min-h-screen relative">
        {/* Layer background */}
        <div
          style={{
            backgroundImage:
              'url("https://uploads-ssl.webflow.com/62640d8cb86529032eccb9d1/62645696be0723edc0b15145_pattern-small.svg")',
            backgroundPosition: '0 0',
            backgroundSize: '90px',
            backgroundRepeat: 'repeat',
            backgroundColor: 'white',
            filter: 'brightness(0.8) grayscale(0.5)', // Menambahkan efek pudar
          }}
          className="absolute inset-0 z-0 min-h-screen w-full"
        ></div>

        {/* Konten utama */}
        <DonateComponent />
      </div>
        <Footer />
    </>
  )
}
