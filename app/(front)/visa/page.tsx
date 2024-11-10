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

const Visa = (props: any) => {
  const [visas, setVisas] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchVisa = async () => {
      const visaData = await fetch('/api/visa')
      const data = await visaData.json()
      setVisas(data)
    }
    fetchVisa()
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
      <Link href={'/visa/visaManagement/new'}>
        <Image
          title="افزودن"
          alt=""
          src="/icon/plusGreen.svg"
          width={40}
          height={40}
        />
      </Link>

      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visas.map(
          ({ _id, name, latin, startDate, endDate, price, unit, image }) => {
            return (
              <Link
                key={'_id'}
                href={`/visa/country/${latin}`}
                className="box1 flex flex-col  h-fit rounded-lg shadow-lg shadow-gray-700"
              >
                <div className="image">
                  <Image
                    className="w-full flex-1 overflow-auto rounded-t-lg"
                    src={`/images/visa/${latin}.jpg`}
                    alt=""
                    width={500}
                    height={200}
                  />
                </div>
                <div className="describe flex flex-col justify-center items-center w-full h-1/2">
                  <div className="define flex flex-col justify-center items-end p-2 w-full h-2/3 py-3">
                    <div className="name flex flex-row-reverse">
                      <h2 className="alib">ویزای توریستی </h2>
                      <h2 className="alib text-xl text-red-500 mr-2">
                        {' '}
                        {name}
                      </h2>
                    </div>
                    <h4 className="alib">
                      زمان پردازش {startDate} تا {endDate} روز کاری
                    </h4>
                  </div>
                  <div className="price flex flex-row justify-between items-center rounded-b-lg ring-1 px-2 py-5 w-full h-fit">
                    <div className="left flex flex-row w-1/2">
                      <span className="alib mr-2">{unit}/نفر</span>
                      <h3 className="alib text-blue-500">{price}</h3>
                    </div>
                    <div className="right flex flex-row justify-between text-right w-1/2">
                      <span className="alib w-full">شروع قیمت از</span>
                    </div>
                  </div>
                </div>
              </Link>
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

export default Visa
