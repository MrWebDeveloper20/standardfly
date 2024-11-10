'use client'
import React, { useState } from 'react'
import Image from 'next/image'
// import InfoHotels from '@/app/(front)/info/hotels/modal/Form'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full h-full backdrop-blur-sm">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="relative p-6 flex-auto justify-center items-center w-auto h-fit ">
            <div className="image flex flex-col">
              <Image
                className="z-0 animate-spin"
                priority={true}
                src={'/images/cercle-shape.png'}
                alt=""
                width={400}
                height={400}
              />
              <Image
                className="absolute rounded-lg z-30 top-[140px] left-[110px]"
                priority={true}
                src={'/logo/logo.jpg'}
                alt=""
                width={220}
                height={220}
              />
            </div>
            <div className="desc flex flex-col w-full z-10">
              <div className="flex flex-row justify-center items-center mt-3">
                <h2 className="alib text-red-500 text-2xl mr-3"> استاندارد فلای</h2>
                <h2 className="alib">تجربه سفری جذاب و لذت بخش با </h2>
              </div>
              <div className="flex flex-row justify-center items-center mt-1">
                <h2 className="alib my-2 text-green-500">
                  ارائه دهنده عالی ترین خدمات گردشگری و سفر
                </h2>
              </div>
              <div className="flex flex-row justify-center items-center mb-3">
                <h2 className="alib text-blue-500 mr-2">0971 - 000000</h2>
                <h2 className="alib text-blue-500"> : تماس </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
