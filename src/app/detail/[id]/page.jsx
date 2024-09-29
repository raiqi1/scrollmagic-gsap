import Footer from '@/app/Footer'
import ButtonBack from '@/components/ButtonBack'
import Swipper from '@/components/Swipper'
import React from 'react'

export default function page() {
  return (
    <div>
      <div>
        <img
          src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6273b2a73c4d0c566c9e7578_65f90aa5-41ee24d6fde6952e18f17433e84f6789.jpeg"
          alt=""
          className="w-full h-[500px] object-cover"
        />
        <div className=" md:m-[105px] max-sm:m-10 font-sans">
          <h1 className="md:text-6xl font-bold  mt-16 mb-12">
            Emergency Aid. WAR 2022.
          </h1>
          <p className="md:text-[36px] mb-6 leading-relaxed ">
            24.02.2022 - the day when the world got divided into Before and
            After.
          </p>
          <p className="md:text-[36px] mb-6 leading-relaxed">
            Life would never be the same. Russia attacked Ukraine. Thousands of
            victims, children, and vast numbers of dead animals or those who
            have lost their homes.
          </p>
          <p className="md:text-[36px] mb-6 leading-relaxed">
            We are incredibly grateful to the People, despite everything, who
            did not leave their little friends behind, but unfortunately, there
            are many examples to the contrary. Sometimes it happened due to
            owners’ ignorance or death, and other times because of other
            terrible circumstances that forced animals to become homeless. A
            humanitarian catastrophe has begun. Thousands of lost and wounded
            animals are wandering the deserted cities and villages, searching
            for some kind of salvation.
          </p>
          <p className="md:text-[36px] mb-6 leading-relaxed">
            Even before the war, we kept the records of shelters and guardians
            in Ukraine; therefore, we have much information from urgent needs to
            food, medicine, and other necessary services. Since the beginning of
            the full-scale war, the database was joined by: a massive number of
            homeless animals, relocated animals from hot spots to more peaceful
            regions, and increased needs during an unstable economic situation
            in the country. Shortage of animal feed, medicine, volunteers.
          </p>
          <h1 className="md:text-4xl font-bold  mt-10 mb-10">Our goal</h1>
          <p className="md:text-[36px] mb-6 leading-relaxed">
            To provide emergency humanitarian aid from abroad; implement
            logistics in Ukraine; assist in coordinating evacuations,
            transportation, and financial aid.
          </p>
          <Swipper />
          <ButtonBack/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
