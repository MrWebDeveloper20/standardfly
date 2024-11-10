'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/modal/page/page'
import TravelTypeTop from '@/components/reserve/travelTypeTop'
import UploadImage from '@/components/uploadImage/uploadImage'
import { ObjectId } from 'mongodb'
import { deleteVisa } from '@/actions'

interface TourItemProps {
  params: {
    id: string
  }
}

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

  // if (loading) return <Modal />

  return (
    <div className="flex flex-col justify-end gap-5">
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
              <div
                key={'_id'}
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
                  <div className="detail flex flex-col gap-2 justify-center items-center my-5">
                    <Link
                      className="alib bg-red-400 rounded-lg py-1 px-5"
                      href={`./../../managerRojanooAgency2000/visa/country/${latin}`}
                    >
                      مشاهده جزییات
                    </Link>

                    <Link
                      href={`./../../managerRojanooAgency2000/visa/visaManagement/${_id}/edit`}
                      className="bg-yellow-300 alib rounded-lg py-1 px-5"
                    >
                      ویرایش
                    </Link>

                    <form action={deleteVisa.bind(null, _id)}>
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

export default Visa
