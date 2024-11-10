'use client'
import React from 'react'
import Image from 'next/image'
import FareZv from '@/components/fare/fareZv'
import FareZvW from '@/components/fareZvW/fareZvW'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Modal from '@/components/modal/page/page'
// import axios from 'axios'

const MainResult = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [isOpenInfo, setIsOpen] = useState(false)
  const [isOpenReturn, setIsOpenRet] = useState(false)
  const [dataa, setData] = useState([])
  const [faree, setFaree] = useState([])
  const [flightNo, setFlightNo] = useState('')
  const [from, setfrom] = useState(props.from)
  const [to, setto] = useState(props.to)
  const [length, setlength] = useState(props.length)
  const [toname, settoname] = useState(props.toname)
  const [day, setday] = useState(props.day)
  const [monthNum, setmonthNum] = useState(props.monthNum)
  const [monthName, setmonthName] = useState(props.monthName)
  const [year, setyear] = useState(props.year)
  const [fromname, setfromname] = useState(props.fromname)
  const [adult, setadult] = useState(props.adult)
  const [child, setchild] = useState(props.child)
  const [infant, setinfant] = useState(props.infant)

  //   const setIsOpenInfo = (isOpenInfo) => {
  //   // setIsOpenInfo(!isOpenInfo)
  //   setIsOpenRet(false)
  //   setIsOpen((isOpenInfo) => !isOpenInfo)
  //   // console.log('isopen', isOpenInfo)
  // }

  //   const setIsOpenReturn = (isOpenReturn) => {
  //   // setIsOpenInfo(!isOpenInfo)
  //   setIsOpen(false)
  //   setIsOpenRet((isOpenReturn) => !isOpenReturn)
  //   // console.log('isopenRet', isOpenReturn)
  // }

  const closeTab = (isOpenInfo, isopenRet) => {
    setIsOpen(false)
    setIsOpenRet(false)
  }

  const handleFlight = (no) => {
    setFlightNo(no)
    // console.log('fnnnnnnno', flightNo)
    // console.log('nnnnnno', no)
  }

  useEffect(() => {
    setLoading(true)
    const res = fetch(
      `/api/avail?from=${props.from} &to=${props.to} &day=${props.day} &monthNum=${props.monthNum}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.AvailableFlights)
        // console.log('dddddddddddd',data.AvailableFlights)
        setFlightNo(data.AvailableFlights.OperatingFlightNo)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Modal />
  // if (!dataa) return <p>No profile data</p>

  return (
    <div className="flex w-full flex-col h-fit z-20 mb-10 justify-start p-5 bg-slate-100">
      {/* <div className="carousel w-full h-20"></div> */}

      {/* <div className="sorting w-full flex flex-row-reverse items-center justify-start">
        <div className="sortingTitle flex flex-row-reverse w-1/6">
          <span className="text-right alib text-xl">مرتب کردن </span>{' '}
          <span>:</span>
        </div>
        <div className="sortingtype bg-white p-5 rounded-lg w-4/6">
          <span className="p-3 alib text-xl">پیشنهاد ما</span>|{' '}
          <span className="p-3 alib text-xl">زودترین</span>|{' '}
          <span className="p-3 alib text-xl">دیرترین</span>|{' '}
          <span className="p-3 alib text-xl">ارزان ترین</span>|{' '}
          <span className="p-3 alib text-xl">گران ترین</span>
        </div>
      </div> */}

      {length > 0 && (
        <div className="warn p-5 w-full text-center flex flex-row-reverse justify-center">
          <h2 className="alib">قیمت ها برای </h2>
          <h2 className="alib mx-1 text-xl text-red-500 underline">
            {' '}
            {props.adult}{' '}
          </h2>
          <h2 className="alib mx-1 text-red-500"> بزرگسال </h2>
          {props.child > 0 && (
            <div className="flex flex-row-reverse">
              <h2 className="alib"> و </h2>
              <h2 className="alib text-xl mx-2 text-blue-500 underline">
                {' '}
                {props.child}{' '}
              </h2>
              <h2 className="alib ml-1 text-blue-500"> کودک </h2>
            </div>
          )}
          {props.child > 0 && (
            <div className="flex flex-row-reverse">
              <h2 className="alib"> و </h2>
              <h2 className="alib mx-2 text-xl text-green-500 underline">
                {' '}
                {props.infant}{' '}
              </h2>
              <h2 className="alib ml-1 text-green-500"> نوزاد </h2>
            </div>
          )}
          <h2 className="alib">محاسبه شده است</h2>
        </div>
      )}

      {length > 0 ? (
        JSON.parse(JSON.stringify(dataa)).map((dt) => (
          <div
            key={Math.random() * 100}
            className="tickets flex flex-row-reverse w-full "
          >
            <div className="right flex flex-col lg:w-4/5 rounded-lg">
              <div className="ticketRight flex flex-row-reverse alib text-xl lg:h-56 lg:w-full justify-center items-center bg-white hover:bg-yellow-100 ring-1">
                <div className="ticketRightAirline w-1/6 flex flex-col items-center justify-center">
                  <Image
                    className="mx-2 rounded-full"
                    alt="travel type icon"
                    src="/images/zagros.png"
                    width={120}
                    height={120}
                  />
                  <span>هوایپمایی زاگرس </span>
                </div>
                <div className="ticketRightResult w-5/6 flex flex-col justify-center">
                  <div className="flightType flex flex-row-reverse alib text-xl justify-around p-5">
                    <span>سیستمی</span>
                    <span>اکونومی</span>
                    <span>{dt.AircraftTypeCode} : مدل هواپیما </span>
                  </div>
                  <div className="flightTime flex flex-row-reverse justify-around alib text-2xl p-3">
                    <div className="from flex flex-row-reverse">
                      <Image
                        className="mx-2"
                        alt="travel type icon"
                        src="/icon/takeof.svg"
                        width={50}
                        height={50}
                      />
                      <span className="p-2">{props.fromname}</span>
                      <span className="p-2">
                        {dt.DepartureDateTime.toString().slice(11, 16)}
                      </span>
                    </div>
                    <div className="to flex flex-row-reverse">
                      <Image
                        className="mx-2"
                        alt="travel type icon"
                        src="/icon/Landing.svg"
                        width={50}
                        height={50}
                      />
                      <span className="p-2">{props.toname}</span>
                      <span className="p-2">
                        {dt.ArrivalDateTime.toString().slice(11, 16)}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse justify-start mr-5 gap-10 items-center">
                    <button
                      onClick={() => {
                        setIsOpenRet(false)
                        setIsOpen(!isOpenInfo)
                      }}
                      className="alib py-3 text-blue-600"
                    >
                      اطلاعات پرواز
                    </button>
                    <button
                      onClick={() => {
                        setIsOpen(false)
                        setIsOpenRet(!isOpenReturn)
                      }}
                      className="alib text-xl py-3 text-blue-600"
                    >
                      قوانین استرداد
                    </button>
                  </div>
                </div>
              </div>
              <div className="info flex lg:w-full bg-white ring-1">
                {isOpenInfo && (
                  <div className="ticketInfo flex flex-col justify-around lg:w-full lg:h-40 ">
                    <div className="infoTop flex flex-row-reverse justify-between lg:w-full">
                      <div className="info1 flex flex-col gap-3 justify-between w-1/4">
                        <span className="alib text-gray-700">شماره پرواز</span>
                        <span className="alib text-black lg:text-xl">
                          {dt.OperatingFlightNo}
                        </span>
                      </div>
                      <div className="info2 flex flex-col gap-3 justify-between w-1/4">
                        <span className="alib text-gray-700 ">کلاس کابین</span>
                        <span className="alib text-black lg:text-xl">
                          اکونومی
                        </span>
                      </div>
                      <div className="info3 flex flex-col gap-3 justify-between w-1/4">
                        <span className="alib text-gray-700 ">مدل هواپیما</span>
                        <span className="alib text-black lg:text-xl">
                          {dt.AircraftTypeCode}
                        </span>
                      </div>
                      <div className="info4 flex flex-col gap-3 justify-between w-1/4">
                        <span className="alib text-gray-700 ">بار مجاز</span>
                        <span className="alib text-black lg:text-xl">
                          <FareZvW
                            from={props.from}
                            to={props.to}
                            date={props.date}
                            flightNo={dt.OperatingFlightNo}
                          />
                        </span>
                      </div>
                    </div>
                    <div className="infoBut flex flex-row-reverse justify-start lg:w-full">
                      <div className="info5 flex flex-col gap-3 justify-between w-1/4">
                        <span className="alib text-gray-700 "> ترمینال</span>
                        <span className="alib text-black lg:text-xl"></span>
                      </div>
                      <div className="info6 flex flex-col gap-3 justify-between w-1/4">
                        <span className="alib text-gray-700 ">نوع پرواز </span>
                        <span className="alib text-black lg:text-xl">
                          سیستمی
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => closeTab(isOpenInfo, isOpenReturn)}
                      className="alib text-blue-500"
                    >
                      بستن
                    </button>
                  </div>
                )}
                {isOpenReturn && (
                  <div className="ticketRet flex flex-col lg:w-full lg:h-40">
                    <div className="title mr-3 flex flex-row-reverse justify-start">
                      <h2 className="alib">
                        درصد جریمه کسر شده بر اساس زمان اعلام کنسلی
                      </h2>
                      <Link
                        href={''}
                        className="alib mr-2 underline text-xl text-red-600"
                      >
                        قوانین استرداد
                      </Link>
                    </div>
                    <div className="persent lg:w-full flex flex-row-reverse gap-2 font-bold">
                      <div className="persent1 flex flex-col lg:w-1/4">
                        <h2 className="text-red-500 text-3xl">30 %</h2>
                        <span className="alib">از زمان صدور بلیط </span>
                        <span className="alib"> تا 12:00 ظهر </span>
                        <span className="alib"> سه روز قبل از پرواز </span>
                      </div>
                      <div className="persent2 flex flex-col lg:w-1/4">
                        <h2 className="text-red-500 text-3xl">40 %</h2>
                        <span className="alib"> از 12:00 ظهر 3 روز قبل </span>
                        <span className="alib"> تا 12:00 ظهر </span>
                        <span className="alib"> روز قبل از پرواز </span>
                      </div>
                      <div className="persent3 flex flex-col lg:w-1/4">
                        <h2 className="text-red-500 text-3xl">50 %</h2>
                        <span className="alib"> از 12:00 ظهر </span>
                        <span className="alib"> یک روز قبل از پرواز </span>
                        <span className="alib"> تا سه ساعت قبل از پرواز </span>
                      </div>
                      <div className="persent4 flex flex-col lg:w-1/4">
                        <h2 className="text-red-500 text-3xl">60 %</h2>
                        <span className="alib"> از 3 ساعت قبل از پرواز </span>
                        <span className="alib">به بعد</span>
                      </div>
                    </div>
                    <button
                      onClick={() => closeTab(isOpenInfo, isOpenReturn)}
                      className="alib text-blue-500"
                    >
                      بستن
                    </button>
                  </div>
                )}
              </div>
            </div>
            {isOpenInfo || isOpenReturn ? (
              <div className="ticketLeft flex flex-col lg:h-96 w-1/5 justify-center items-center bg-white hover:bg-yellow-100 ring-1">
                <div className="alib flex flex-row text-2xl my-2 ">
                  <span className="mr-1">ریال </span>

                  <FareZv
                    from={props.from}
                    to={props.to}
                    adult={props.adult}
                    child={props.child}
                    infant={props.infant}
                    date={dt.DepartureDateTime.toString().slice(0, 9)}
                    flightNo={dt.OperatingFlightNo}
                  />
                </div>

                <span className="alib text-xl my-2 text-red-500">
                  نرخ رسمی ایرلاین
                </span>

                <Link
                  href={{
                    pathname: `/flight/${flightNo}/passengers/`,
                    query: {
                      from: from,
                      fromname: fromname,
                      to: to,
                      toname: toname,
                      flightNo: flightNo,
                      adult: adult,
                      child: child,
                      infant: infant,
                      day: day,
                      MName: monthName,
                      MNum: monthNum,
                      year: year,
                      time: dt.DepartureDateTime.toString().slice(11, 16),
                      date: dt.DepartureDateTime.toString().slice(0, 9),
                    },
                  }}
                  className="bg-blue-600 alib my-4 text-xl px-10 py-4 text-white rounded-lg"
                >
                  انتخاب پرواز
                </Link>
              </div>
            ) : (
              <div className="ticketLeft flex flex-col lg:h-56 w-1/5 justify-center items-center bg-white hover:bg-yellow-100 ring-1">
                <div className="alib flex flex-row text-2xl my-2 ">
                  <span className="mr-1">ریال </span>

                  {/* <span>{Math.floor(faree.AdultTotalPrice * 1.11435)}</span> */}
                  <FareZv
                    from={props.from}
                    to={props.to}
                    adult={props.adult}
                    child={props.child}
                    infant={props.infant}
                    date={dt.DepartureDateTime.toString().slice(0, 9)}
                    flightNo={dt.OperatingFlightNo}
                  />
                </div>

                <span className="alib text-xl my-2 text-red-500">
                  نرخ رسمی ایرلاین
                </span>

                <Link
                  href={{
                    pathname: `/flight/${dt.OperatingFlightNo}/passengers/`,
                    query: {
                      from: from,
                      to: to,
                      fromname: fromname,
                      toname: toname,
                      time: dt.DepartureDateTime.toString().slice(11, 16),
                      flightNo: dt.OperatingFlightNo,
                      adult: adult,
                      child: child,
                      infant: infant,
                      day: day,
                      MName: monthName,
                      MNum: monthNum,
                      year: year,
                      date: dt.DepartureDateTime.toString().slice(0, 9),
                    },
                  }}
                  className="bg-blue-600 alib my-4 text-xl px-10 py-4 text-white rounded-lg"
                >
                  انتخاب پرواز
                </Link>
              </div>
            )}
          </div>
        ))
      ) : (
        <h2 className="alib w-fit mx-auto px-10 py-3 rounded-lg text-center text-2xl text-orange-500 bg-blue-900 my-5">
          با عرض پوزش پرواز مد نظر شما یافت نشد
        </h2>
      )}

      {/* <div className="tickets flex flex-row-reverse w-full ">
        <div className="ticketRight flex flex-row-reverse alib text-xl w-4/5 justify-center items-center bg-white hover:bg-yellow-100 ring-1">
          <div className="ticketRightAirline w-1/6 flex flex-col items-center justify-center">
            <Image
              className="mx-2 rounded-full"
              alt="travel type icon"
              src="/images/Meraj-Airline-logo.png"
              width={120}
              height={120}
            />
            <span>هوایپمایی معراج </span>
            <span className="py-3">اطلاعات پرواز</span>
          </div>
          <div className="ticketRightResult w-5/6 flex flex-col justify-center">
            <div className="flightType flex flex-row-reverse alib text-xl justify-around p-5">
              <span>سیستمی</span>
              <span>اکونومی</span>
              <span>Boeing 707</span>
            </div>
            <div className="flightTime flex flex-row-reverse justify-around alib text-2xl p-3">
              <div className="from flex flex-row-reverse">
                <Image
                  className="mx-2"
                  alt="travel type icon"
                  src="/icon/takeof.svg"
                  width={50}
                  height={50}
                />
                <span className="p-2">تهران</span>
                <span className="p-2">14:30</span>
              </div>
              <div className="to flex flex-row-reverse">
                <Image
                  className="mx-2"
                  alt="travel type icon"
                  src="/icon/landing.svg"
                  width={50}
                  height={50}
                />
                <span className="p-2">مشهد</span>
                <span className="p-2">16:30</span>
              </div>
            </div>
            <span className="alib text-xl">قوانین استرداد</span>
          </div>
        </div>
        <div className="ticketLeft flex flex-col w-1/5 justify-center items-center bg-white hover:bg-yellow-100 ring-1">
          <div className="alib flex flex-row text-2xl my-2 ">
            <span>ریال</span> <span>12,000,000</span>
          </div>

          <span className="alib text-xl my-2 text-red-500">
            نرخ رسمی ایرلاین
          </span>
          <button className="bg-blue-600 alib my-4 text-2xl px-10 py-5 text-white rounded-lg">
            انتخاب پرواز
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default MainResult
