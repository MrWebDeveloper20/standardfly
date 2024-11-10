'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/modal/page/page'
import SlickBanner from '@/components/slick/slickBanner'
import TravelTypeTop from '@/components/reserve/travelTypeTop'
import UploadImage from '@/components/uploadImage/uploadImage'
import dbClient from '@/db/mongodb'
import { ObjectId } from 'mongodb'
import { deleteTour } from '@/actions'
import { notFound } from 'next/navigation'

interface TourItemProps {
  params: {
    id: string
  }
}

const Tour = (props: any) => {
  const [admin, setAdmin] = useState(props.user)
  const [tours, setTours] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setLoading(true)
    const fetchTour = async () => {
      const tourData = await fetch('/api/tour')
      const data = await tourData.json()
      setTours(data)

      // setLoading(false)
    }
    fetchTour()
  }, [])

  // console.log(tour);

  // if (!tour) {
  //   return notFound();
  // }

  // if (loading) return <Modal />

  return (
    <div className="flex flex-col justify-end gap-5">
      <Link href={'/tour/tourManagement/new'}>
        <Image
          title="افزودن"
          alt=""
          src="/icon/plusGreen.svg"
          width={40}
          height={40}
        />
      </Link>

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
                  <div className="detail flex flex-col gap-2 justify-center items-center my-5">
                    <Link
                      className="alib bg-red-400 rounded-lg py-1 px-5"
                      href={`./tour/tourManagement/${_id}/show`}
                    >
                      مشاهده جزییات
                    </Link>

                    <Link
                      // href={`./tour/${_id}/edit`}
                      href={`./../../managerRojanooAgency2000/tour/tourManagement/${_id}/edit`}
                      className="bg-yellow-300 alib rounded-lg py-1 px-5"
                    >
                      ویرایش
                    </Link>

                    <form action={deleteTour.bind(null, _id)}>
                      <button className="bg-red-500 alib rounded-lg py-1 px-5">
                        حذف
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

export default Tour
