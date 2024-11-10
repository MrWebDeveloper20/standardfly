'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Banner from '../banner/banner'
import FlightForm from '../form/flight'
import TrainForm from '../form/train'
import BusForm from '../form/bus'
import TourForm from '../form/tour'
import VillaForm from '../form/villa'
import HotelForm from '../form/hotel'
import { Suspense } from 'react'

const TravelType = (prpos) => {
  const [task, setTask] = useState('flight')
  const handle = (t) => {
    setTask((task) => t)
  }

  // console.log(task)
  return (
    <div className="flex flex-col w-full ring-1 ring-white justify-center items-center my-2 rounded-lg">
      <div className="banner w-full -z-30">
        {task === 'flight' ? (
          <Banner im="/images/mainbanner.jpeg" />
        ) : task === 'tour' ? (
          <Banner im="/images/tour.jpeg" />
        ) : task === 'villa' ? (
          <Banner im="/images/villa.jpeg" />
        ) : (
          <Banner im="/images/hotelTop.png" />
        )}
      </div>

      <div className="z-30 bg-slate-900 flex justify-center items-center lg:w-11/12 max-lg:w-full max-2xl:w-full max-lg:mx-auto rounded-t-3xl">
        <div className="flex max-sm:flex-row-reverse lg:flex-row-reverse items-center justify-center max-sm:gap-1 lg:gap-4 grid-cols-6 max-sm:shadow-none lg:shadow-max-sm max-sm:ring-0  px-auto w-full">
          <div className="travelType1 flex max-sm:m-0 max-sm:flex-col lg:flex-row-reverse">
            <button onClick={() => handle('flight')}>
              {task === 'flight' ? (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full lg:w-[120px] hover:text-2xl rounded-xl  bg-white p-2">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1 animate-bounce"
                    src="/icon/airplane.svg"
                    alt="airplane icon"
                    width={70}
                    height={70}
                  />
                  <span className="text-red-600 alib max-sm:text-lg lg:text-3xl max-sm:mx-2 lg:m-4 animate-pulse">
                    پرواز
                  </span>
                </div>
              ) : (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full  hover:text-3xl hover:rounded-xl hover:duration-200">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1"
                    src="/icon/airplane.svg"
                    alt="airplane icon"
                    width={70}
                    height={70}
                  />
                  <span className="fontcolor alib max-sm:text-lg lg:text-xl max-sm:mx-2 lg:m-4">
                    پرواز
                  </span>
                </div>
              )}
            </button>

            <button onClick={() => handle('tour')}>
              {task === 'tour' ? (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full lg:w-[120px] hover:text-2xl rounded-xl bg-white p-2">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1 animate-bounce"
                    src="/icon/icons8-map-marker-94.png"
                    alt="tour icon"
                    width={70}
                    height={70}
                  />
                  <span className="text-red-600 alib max-sm:text-lg lg:text-3xl max-sm:mx-2 lg:m-4 animate-pulse">
                    تور
                  </span>
                </div>
              ) : (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full  hover:text-3xl hover:rounded-xl hover:duration-200">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1"
                    src="/icon/icons8-map-marker-94.png"
                    alt="tour icon"
                    width={70}
                    height={70}
                  />
                  <span className="fontcolor alib max-sm:text-lg lg:text-xl max-sm:mx-2 lg:m-4">
                    تور
                  </span>
                </div>
              )}
            </button>

            {/* <button onClick={() => handle('train')}>
              {task === 'train' ? (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full lg:w-[120px] hover:text-2xl rounded-xl bg-white p-2">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1 animate-bounce"
                    src="/icon/train.svg"
                    alt="train icon"
                    width={70}
                    height={70}
                  />
                  <span className="text-red-600 alib max-sm:text-lg lg:text-3xl max-sm:mx-2 lg:m-4 animate-pulse">
                    قطار
                  </span>
                </div>
              ) : (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full  hover:text-3xl hover:rounded-xl hover:duration-200">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1"
                    src="/icon/train.svg"
                    alt="train icon"
                    width={70}
                    height={70}
                  />
                  <span className="fontcolor alib max-sm:text-lg lg:text-xl max-sm:mx-2 lg:m-4">
                    قطار
                  </span>
                </div>
              )}
            </button>

            <button onClick={() => handle('bus')}>
              {task === 'bus' ? (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full lg:w-[120px] hover:text-2xl rounded-xl bg-white p-2">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1 animate-bounce"
                    src="/icon/bus-svgrepo-com.svg"
                    alt="bus icon"
                    width={70}
                    height={70}
                  />
                  <span className="text-red-600 alib max-sm:text-lg lg:text-3xl max-sm:mx-2 lg:m-4 animate-pulse">
                    اتوبوس
                  </span>
                </div>
              ) : (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full  hover:text-3xl hover:rounded-xl hover:duration-200">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1"
                    src="/icon/bus-svgrepo-com.svg"
                    alt="bus icon"
                    width={70}
                    height={70}
                  />
                  <span className="fontcolor alib max-sm:text-lg lg:text-xl max-sm:mx-2 lg:m-4">
                    اتوبوس
                  </span>
                </div>
              )}
            </button> */}
          </div>

          <div className="travelType2 flex max-sm:m-0 max-sm:flex-col lg:flex-row-reverse">
            

            <button onClick={() => handle('hotel')}>
              {task === 'hotel' ? (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full lg:w-[120px] hover:text-2xl rounded-xl bg-white p-2">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1 animate-bounce"
                    src="/icon/hotel.svg"
                    alt="hotel icon"
                    width={70}
                    height={70}
                  />
                  <span className="text-red-600 alib max-sm:text-lg lg:text-3xl max-sm:mx-2 lg:m-4 animate-pulse">
                    هتل
                  </span>
                </div>
              ) : (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full  hover:text-3xl hover:rounded-xl hover:duration-200">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1"
                    src="/icon/hotel.svg"
                    alt="hotel icon"
                    width={70}
                    height={70}
                  />
                  <span className="fontcolor alib max-sm:text-lg lg:text-xl max-sm:mx-2 lg:m-4">
                    هتل
                  </span>
                </div>
              )}
            </button>

            <button onClick={() => handle('villa')}>
              {task === 'villa' ? (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full lg:w-[120px] hover:text-2xl rounded-xl bg-white p-2">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1 animate-bounce"
                    src="/icon/icons8-home.svg"
                    alt="villa icon"
                    width={70}
                    height={70}
                  />
                  <span className="text-red-600 alib max-sm:text-lg lg:text-3xl max-sm:mx-2 lg:m-4 animate-pulse">
                    اقامتگاه
                  </span>
                </div>
              ) : (
                <div className="max-sm:ring-1 max-sm:rounded-md flex max-sm:flex-row-reverse lg:flex-col items-center max-sm:justify-around lg:justify-start max-sm:m-2 lg:m-5 max-sm:w-full  hover:text-3xl hover:rounded-xl hover:duration-200">
                  <Image
                    className="max-sm:w-1/3 max-sm:py-1"
                    src="/icon/icons8-home.svg"
                    alt="villa icon"
                    width={70}
                    height={70}
                  />
                  <span className="fontcolor alib max-sm:text-lg lg:text-xl max-sm:mx-2 lg:m-4">
                    اقامتگاه
                  </span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="z-30 flex flex-row-reverse justify-center gap-4 grid-cols-6 pb-3 max-sm:shadow-none lg:shadow-sm max-sm:ring-0 lg:ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-b-lg px-auto lg:w-11/12">
        {task === 'flight' ? (
          <Suspense fallback="Loading...">
            <FlightForm />
          </Suspense>
        ) : task === 'train' ? (
          <TrainForm />
        ) : task === 'bus' ? (
          <BusForm />
        ) : task === 'tour' ? (
          <TourForm />
        ) : task === 'villa' ? (
          <VillaForm />
        ) : (
          <HotelForm />
        )}
      </div>
    </div>
  )
}

export default TravelType
