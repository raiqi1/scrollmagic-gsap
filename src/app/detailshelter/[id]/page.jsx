import Footer from '@/app/Footer'
import BoxDetail from '@/components/BoxDetail'
import ButtonBack from '@/components/ButtonBack'
import Swipper from '@/components/Swipper'
import React from 'react'

export default function page() {
  return (
    <div>
      <div>
        <img
          src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628e3ba632155a0624da1c97_434.png"
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <div className=" md:mr-32 md:ml-32 mt-16 max-sm:m-6 font-sans">
          <p className="md:text-[36px] leading-relaxed ">mini-shelter</p>
          <h1 className="md:text-5xl font-bold  mt-6 mb-12">
            Shelter of Victoria Bulbyna
          </h1>
          <div className="flex gap-5 h-full w-full mb-24">
            <BoxDetail
              image="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg"
              total="17"
              title="Dogs"
            />
            <BoxDetail
              image="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg"
              total="4"
              title="Cats"
            />
          </div>
          <div className="md:text-3xl max-sm:text-xl  flex md:gap-32 mb-10">
            <h1 className="font-bold">Address :</h1>
            <p>Tulchyn</p>
          </div>
          <div className="md:text-3xl max-sm:text-xl  flex gap-5 mb-28">
            <h1 className="font-bold">Food needs per month:</h1>
            <p>140 kg</p>
          </div>
          <Swipper />
          <ButtonBack />
        </div>
      </div>
      <Footer />
    </div>
  )
}
