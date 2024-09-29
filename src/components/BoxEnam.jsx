/* eslint-disable @next/next/no-img-element */

import React from 'react'

const BoxEnam = ({ name, image, position }) => {
  return (
    <div
      className="cursor-pointer max-sm:w-[180px] md:w-[250px] h-full "
    >
      <div className="text-black h-full font-sans max-sm:p-2 ">
        <div className="place-content-center flex justify-center">
          <img
            src={image}
            alt=""
            className=" w-[230px] max-sm:w-fit text-center place-content-center flex justify-center grayscale "
          />
        </div>
        <h2 className="text-center text-black text-xl mt-7">{name}</h2>
        <div className=" flex text-center justify-center">
          <p className="text-center w-[150px]">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default BoxEnam
