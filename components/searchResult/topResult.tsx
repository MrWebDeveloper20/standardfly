'use client'
import Image from 'next/image'
// import React from 'react'
import FlightForm from '../form/flight'
import Form from '@/components/form/flight2'
import { useState } from 'react'
import BusForm from '../form/bus'
import TrainForm from '../form/train'
import TourForm from '../form/tour'
import HotelForm from '../form/hotel'
import VillaForm from '../form/villa'

const TopResult = (props: any) => {
  // console.log('dateeee',props.date)
  const [toggle4, setToggle] = useState(false)

  const set4 = (toggle4: boolean) => {
    setToggle((toggle4) => !toggle4)
  }
  return (
    <div className="flex flex-col w-full max-sm:hidden mt-3">
      <button onClick={() => set4(toggle4)}>
        <div className="flex flex-row-reverse w-full justify-center items-center py-5">
          <div className="flex flex-row px-5">
            <div className="flex flex-row-reverse">
              <Image
                alt="travel type icon"
                src={props.img}
                width={50}
                height={50}
              />
              <div className="flex flex-row-reverse items-center mr-4">
                <span className="alib text-lg ml-2">بلیط</span>
                <span className="alib text-lg">{props.type}</span>
                <span className="px-2 alib text-2xl">{props.from}</span>
                <span className="alib text-lg">به</span>
                <span className="px-2 alib text-2xl">{props.to}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse px-5">
            <div className="flex flex-row-reverse">
              <Image
                alt="calendar icon"
                src="/icon/calendar2.svg"
                width={50}
                height={30}
              />
              <div className="flex flex-row items-center mr-4">
                <span className="alib text-lg ml-2">{props.year} </span>
                <span className="alib text-lg ml-2"> {props.month} </span>
                <span className="alib text-lg ml-2"> {props.day} </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse px-5">
            <div className="flex flex-row-reverse">
              <Image
                alt="passenger icon"
                src="/icon/passenger.svg"
                width={50}
                height={50}
              />
              <div className="flex flex-row-reverse items-center mr-4">
                <span className="alib text-lg ml-2">{props.passNum} </span>
                <span className="alib text-lg ml-2">نفر مسافر </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse px-5">
            <div className="flex flex-row-reverse">
              <Image
                alt="search icon"
                src="/icon/search.svg"
                width={60}
                height={60}
              />
            </div>
          </div>
        </div>
      </button>

      {toggle4 ? (
        <div className="flex w-full justify-center items-center">
          {
            // props.type === 'هواپیما' ? (<FlightForm />) :
            props.type === 'هواپیما' ? (
              <FlightForm />
            ) : props.type === 'اتوبوس' ? (
              <BusForm />
            ) : props.type === 'قطار' ? (
              <TrainForm />
            ) : props.type === 'تور' ? (
              <TourForm />
            ) : props.type === 'هتل' ? (
              <HotelForm />
            ) : (
              <VillaForm />
            )
          }
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default TopResult
