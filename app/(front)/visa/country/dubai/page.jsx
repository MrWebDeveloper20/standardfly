'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Price from './price'
import Document from './document'
import Stage from './stage'
import Faq from './faq'
import Description from './description'

const Dubai = () => {
  const [tikk, setTikk] = useState(false)
  const [childd, setChildd] = useState(0)
  const [adultt, setAdultt] = useState(1)

  return (
    <div className="flex flex-col justify-center items-center mx-auto w-3/5 h-fit rounded-lg my-5 bg-gray-200">
      <div className="banner w-full">
        <Image
          className="rounded-lg"
          src={'/images/visa/dubai.jpg'}
          alt="flag"
          width={1400}
          height={400}
        />
      </div>
      <div className="title flex flex-col justify-center items-center w-full m-3 p-2 ring-2 rounded-lg">
        <Image src={'/icon/flags/uae.svg'} alt="flag" width={40} height={40} />
        <h1 className="alib py-2"> ویزای توریستی دبی (امارات متحده عربی) </h1>
        <h2 className="alib">پردازش 1 تا 3 روز کاری</h2>
      </div>
      <div className="desc flex flex-row justify-end w-full bg-gray-100">
        <div className="right flex flex-col h-fit w-full m-1 p-2">
          <div className="proccess flex flex-row-reverse gap-2 w-full">
            <div className="proccessLeft flex flex-col justify-around items-center shadow-lg shadow-gray-400 h-32 w-1/2 rounded-xl">
              <Image
                src={'/icon/calendar2.svg'}
                alt=""
                width={30}
                height={30}
              />
              <h2 className="alib">زمان پردازش ویزا</h2>
              <h2 className="alib"> یک تا سه روز کاری</h2>
            </div>
            <div className="proccessRight flex flex-col justify-around items-center shadow-lg shadow-gray-400 h-32 w-1/2 rounded-xl">
              <Image src={'/icon/time.svg'} alt="" width={30} height={30} />
              <h2 className="alib">اعتبار ویزا پس از صدور</h2>
              <div className="flex flex-row-reverse">
                <h2 className="alib text-red-500 ml-2"> 58 </h2>
                <h2 className="alib">روز </h2>
              </div>
            </div>
          </div>

          <Price />

          <Document />

          <Stage />

          <Faq />

          <Description />
        </div>
      </div>
      <div className="fixed top-36 left-4 flex bg-gray-100 z-50 w-1/6 rounded-lg">
        <form
          action=""
          className="w-full flex flex-col justify-end h-fit ring-2 rounded-lg p-2 m-2"
        >
          <label className="alib text-right mr-2" htmlFor="visa">
            {' '}
            نوع ویزا
          </label>
          <select
            name="visa"
            id="visa"
            className="alib text-right w-full ring-1 m-1 p-2 rounded-lg"
          >
            <option value=""></option>
            <option value="10s">(یکبار ورود) 10 روزه </option>
            <option value="30s">(یکبار ورود) 30 روزه </option>
            <option value="30m">(چندبار ورود) 30 روزه </option>
            <option value="60s">(یکبار ورود) 60 روزه </option>
            <option value="60m">(چندبار ورود) 60 روزه </option>
          </select>

          <label className="alib text-right mr-2" htmlFor="adult">
            {' '}
            بزرگسال
          </label>
          <input
            onChange={() => setAdultt(event.target.value)}
            className="alib text-right w-full ring-1 m-1 p-2 rounded-lg"
            type="number"
            name="adult"
            id="adult"
            max={10}
            min={1}
          />

          <label className="alib text-right mr-2" htmlFor="child">
            {' '}
            کودک
          </label>
          <input
            onChange={() => setChildd(event.target.value)}
            className="alib text-right w-full ring-1 m-1 p-2 rounded-lg"
            type="number"
            name="child"
            id="child"
            max={10}
            min={0}
          />

          <div className="tamdid flex flex-row-reverse items-center justify-start w-full m-2">
            <div onClick={() => setTikk(!tikk)} className="tik w-4 h-4 mx-2">
              {tikk ? (
                <div className="tik1 w-4 h-4 ring-1 bg-blue-400 rounded-full"></div>
              ) : (
                <div className="tik2 w-4 h-4 ring-1 rounded-full"></div>
              )}
            </div>
            <h2 className="alib">قصد تمدید دارم</h2>
          </div>
          <div className="passNum flex flex-row-reverse w-full">
            <h3 className="alib">برای</h3>
            <h3 className="alib mx-2 text-red-500">
              {Number(childd) + Number(adultt)}
            </h3>
            <h3 className="alib">مسافر</h3>
          </div>
          <button className="alib w-full text-white bg-blue-500 py-2 mt-3 rounded-lg">
            درخواست ویزا
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dubai
