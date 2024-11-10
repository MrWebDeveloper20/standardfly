'use client'
import React, { useState, useEffect } from 'react'
import Banner from '@/components/banner/banner'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/modal/page'
import TravelTypeTop from '@/components/reserve/travelTypeTop'
// import UploadImage from '@/components/uploadImage/uploadImage'

// interface TourItemProps {
//   params: {
//     id: string;
//   };
// }

const Tour = (props: any) => {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchTour = async () => {
      const tourData = await fetch('/api/tour')
      const data = await tourData.json()
      setTours(data)
    }
    fetchTour()
    setLoading(false)
  }, [])

  if (loading) return <Modal />

  return (
    <div className="flex flex-col justify-end gap-5">
      <div className="w-full h-fit my-2 rounded-lg">
        <TravelTypeTop />
      </div>
      {/* <div className="topResult flex justify-center items-center rounded-sm bg-slate-100 w-full h-fit py-4">
            <TopResult img='/icon/icons8-map-marker-94.png' type="تور" from="تهران" to="مشهد"/>
        </div> */}

      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tours.map(
          ({
            _id,
            name,
            price,
            duration,
            startDate,
            endDate,
            planName,
            planDescription,
            nightPlan,
            image,
          }) => {
            return (
              <div
                key={`${_id}`}
                className="h-fit shadow-sm shadow-black rounded-xl"
              >
                <div className="img h-fit">
                  <Image
                    className=" rounded-t-xl"
                    alt=""
                    width={600}
                    height={100}
                    src={'/images/card1.jpg'}
                  />
                </div>
                <div className="description">
                  <h1 className="alib text-blue-700 font-bold text-xl">
                    تور {name}{' '}
                  </h1>
                  <div className="flex flex-row items-center justify-end mr-7 text-black">
                    <span className="alib mx-2 text-xl">روز</span>
                    <h2 className="text-2xl font-serif font-extrabold text-red-600">
                      {' '}
                      {duration}{' '}
                    </h2>
                  </div>
                  <div className="flex flex-row-reverse justify-start mr-5 text-black">
                    <span className="alib mx-2 text-xl text-green-700">
                      {' '}
                      : شروع{' '}
                    </span>
                    <h2 className="text-xl mx-2 font-serif font-bold text-green-700">
                      {' '}
                      {startDate}{' '}
                    </h2>
                  </div>
                  <div className="flex flex-row-reverse justify-start mr-5 text-black">
                    <span className="alib mx-2 text-xl text-red-800">
                      {' '}
                      : پایان{' '}
                    </span>
                    <h2 className="text-xl mx-2 font-serif font-bold text-red-800">
                      {' '}
                      {endDate}{' '}
                    </h2>
                  </div>
                  <div className="flex flex-row-reverse justify-start mr-5 text-black">
                    <span className="alib mx-2 text-xl text-blue-600">
                      {' '}
                      : قیمت{' '}
                    </span>
                    <h2 className="alib text-xl mx-2 text-blue-600">
                      {' '}
                      {price}{' '}
                    </h2>
                    <h2 className="text-xl"> </h2>
                  </div>
                  <div className="flex flex-row-reverse justify-start mr-7 text-black">
                    <h2 className="alib text-xl"> نرخ ریالی پرواز + </h2>
                  </div>
                  <div className="detail my-5">
                    <Link
                      className="alib bg-red-400 rounded-lg py-1 px-5"
                      href={`./tour/tourManagement/${_id}/show`}
                    >
                      مشاهده جزییات
                    </Link>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>

      {/* <UploadImage /> */}

      <div className="flex w-full my-10">
        <Banner im="/images/tour.jpeg" />
      </div>
    </div>
  )
}

export default Tour
