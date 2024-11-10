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
import { deleteUser } from '@/actions'
import { notFound } from 'next/navigation'

interface TourItemProps {
  params: {
    id: string
  }
}

const Users = (props: any) => {
  const [admin, setAdmin] = useState(props.user)
  const [users, setUsers] = useState([])
  const [length, setLength] = useState()
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setLoading(true)
    const fetchUser = async () => {
      const userData = await fetch('/api/user')
      const data = await userData.json()
      setLength(data.length)
      console.log('dttta', data)
      setUsers(data)
      // setLoading(false)
    }
    fetchUser()
  }, [])

  // console.log(tour);

  // if (!tour) {
  //   return notFound();
  // }

  // if (loading) return <Modal />

  return (
    <div className="flex flex-col justify-start w-full gap-2 h-screen overflow-y-auto">
      <Link href={'/login'}>
        <Image
          title="افزودن"
          alt=""
          src="/icon/plusGreen.svg"
          width={40}
          height={40}
        />
      </Link>
      {length > 0 && (
        <div className="flex flex-row justify-center items-center">
          <h2 className="alib mr-3 text-2xl text-red-500">{length}</h2>
          <h2 className="alib text-xl text-red-500"> : تعداد کل کاربران </h2>
        </div>
      )}
      <div className="grid grid-flow-row gap-2 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users.map(({ _id, name, family, phone }) => {
          return (
            <div
              key={`${_id}`}
              className="flex flex-col justify-start items-center h-fit w-52 shadow-sm shadow-black rounded-xl"
            >
              <div className="prop">
                <div className="flex flex-row justify-center items-center">
                  <h2 className="alib mr-3 text-blue-500">{name} </h2>
                  <h2 className="alib text-blue-500"> نام </h2>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <h2 className="alib mr-3 text-green-500">{family} </h2>
                  <h2 className="alib text-green-500">فامیلی </h2>
                </div>
                <div className="flex flex-row justify-center items-center">
                  {phone && (
                    <h2 className="alib mr-3 text-pink-600"> {phone} </h2>
                  )}
                  <h2 className="alib text-pink-600"> موبایل </h2>
                </div>
              </div>

              <div className="detail flex flex-col gap-2 justify-center items-center my-5">
                {/* <Link
                    
                    href={`./../../managerRojanooAgency2000/tour/tourManagement/${_id}/edit`}
                    className="bg-yellow-300 alib rounded-lg py-1 px-5"
                  >
                    ویرایش
                  </Link> */}

                <form action={deleteUser.bind(null, _id)}>
                  <button className="bg-red-500 text-white alib rounded-lg py-1 px-5">
                    حذف
                  </button>
                </form>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Users
