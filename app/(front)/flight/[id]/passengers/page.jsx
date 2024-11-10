'use client'
import Image from 'next/image'
import Banner from '@/components/banner/banner'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import FareZv from '@/components/fare/fareZv'
// import Adult from './adult'
// import Child from './child'
// import Infant from './infant'

const Flight = (params) => {
  const searchParams = useSearchParams()
  const fromUrl = searchParams.get('from')
  const toUrl = searchParams.get('to')
  const fromnameUrl = searchParams.get('fromname')
  const tonameUrl = searchParams.get('toname')
  const adultUrl = searchParams.get('adult')
  const childUrl = searchParams.get('child')
  const infantUrl = searchParams.get('infant')
  const dayUrl = searchParams.get('day')
  const MNameUrl = searchParams.get('MName')
  const MNumUrl = searchParams.get('MNum')
  const yearUrl = searchParams.get('year')
  const dateUrl = searchParams.get('date')
  const timeUrl = searchParams.get('time')
  const flightNoUrl = searchParams.get('flightNo')

  const [from, setfrom] = useState(fromUrl)
  const [to, setTo] = useState(toUrl)
  const [fromname, setfromname] = useState(fromnameUrl)
  const [toname, setToname] = useState(tonameUrl)
  const [adult, setAdult] = useState(adultUrl)
  const [child, setChild] = useState(childUrl)
  const [infant, setInfant] = useState(infantUrl)
  const [day, setDay] = useState(dayUrl)
  const [MName, setMName] = useState(MNameUrl)
  const [MNum, setMNum] = useState(MNumUrl)
  const [date, setdate] = useState(dateUrl)
  const [time, settime] = useState(timeUrl)
  const [year, setyear] = useState(yearUrl)
  const [flightNo, setflightNo] = useState(flightNoUrl)

  // console.log('dattttttttte', date)

  const [latinName1, setAdultLatin1] = useState()
  const [latinName2, setAdultLatin2] = useState()
  const [latinName3, setAdultLatin3] = useState()
  const [latinName4, setAdultLatin4] = useState()
  const [latinName5, setAdultLatin5] = useState()
  const [latinName6, setAdultLatin6] = useState()
  const [latinName7, setAdultLatin7] = useState()
  const [latinName8, setAdultLatin8] = useState()
  const [latinName9, setAdultLatin9] = useState()

  const setALatin = (event) => {
    // setAdultLatin(...latinName1,latinName)
    // console.log('test',event.target.id, event.target.value)
    // console.log('test2',latinName)
    switch (event.target.id) {
      case 'latinName1':
        setAdultLatin1(event.target.value)
        break
      case 'latinName2':
        setAdultLatin2(event.target.value)
        break
      case 'latinName3':
        setAdultLatin3(event.target.value)
        break
      case 'latinName4':
        setAdultLatin4(event.target.value)
        break
      case 'latinName5':
        setAdultLatin5(event.target.value)
        break
      case 'latinName6':
        setAdultLatin6(event.target.value)
        break
      case 'latinName7':
        setAdultLatin7(event.target.value)
        break
      case 'latinName8':
        setAdultLatin8(event.target.value)
        break
      case 'latinName9':
        setAdultLatin9(event.target.value)
        break
      default:
        break
    }
    // setAdultLatin1(latinName)
  }
  // console.log('test6',latinName1)
  // console.log('test7',latinName2)
  // console.log('test8',latinName3)

  const [family1, setAdultFamily1] = useState()
  const [family2, setAdultFamily2] = useState()
  const [family3, setAdultFamily3] = useState()
  const [family4, setAdultFamily4] = useState()
  const [family5, setAdultFamily5] = useState()
  const [family6, setAdultFamily6] = useState()
  const [family7, setAdultFamily7] = useState()
  const [family8, setAdultFamily8] = useState()
  const [family9, setAdultFamily9] = useState()

  const setAFamily = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'family1':
        setAdultFamily1(event.target.value)
        break
      case 'family2':
        setAdultFamily2(event.target.value)
        break
      case 'family3':
        setAdultFamily3(event.target.value)
        break
      case 'family4':
        setAdultFamily4(event.target.value)
        break
      case 'family5':
        setAdultFamily5(event.target.value)
        break
      case 'family6':
        setAdultFamily6(event.target.value)
        break
      case 'family7':
        setAdultFamily7(event.target.value)
        break
      case 'family8':
        setAdultFamily8(event.target.value)
        break
      case 'family9':
        setAdultFamily9(event.target.value)
        break
      default:
        break
    }
  }

  // console.log('test2',family2)

  const [sex1, setAdultSex1] = useState()
  const [sex2, setAdultSex2] = useState()
  const [sex3, setAdultSex3] = useState()
  const [sex4, setAdultSex4] = useState()
  const [sex5, setAdultSex5] = useState()
  const [sex6, setAdultSex6] = useState()
  const [sex7, setAdultSex7] = useState()
  const [sex8, setAdultSex8] = useState()
  const [sex9, setAdultSex9] = useState()

  const setAsex = (event) => {
    // console.log('test',event.target.id, event)
    switch (event.target.id) {
      case 'sex1':
        setAdultSex1(event.target.innerText)
        break
      case 'sex2':
        setAdultSex2(event.target.innerText)
        break
      case 'sex3':
        setAdultSex3(event.target.innerText)
        break
      case 'sex4':
        setAdultSex4(event.target.innerText)
        break
      case 'sex5':
        setAdultSex5(event.target.innerText)
        break
      case 'sex6':
        setAdultSex6(event.target.innerText)
        break
      case 'sex7':
        setAdultSex7(event.target.innerText)
        break
      case 'sex8':
        setAdultSex8(event.target.innerText)
        break
      case 'sex9':
        setAdultSex9(event.target.innerText)
        break
      default:
        break
    }
  }

  const [melliCode1, setAdultMelli1] = useState()
  const [melliCode2, setAdultMelli2] = useState()
  const [melliCode3, setAdultMelli3] = useState()
  const [melliCode4, setAdultMelli4] = useState()
  const [melliCode5, setAdultMelli5] = useState()
  const [melliCode6, setAdultMelli6] = useState()
  const [melliCode7, setAdultMelli7] = useState()
  const [melliCode8, setAdultMelli8] = useState()
  const [melliCode9, setAdultMelli9] = useState()

  const setAMelliCode = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'melliCode1':
        setAdultMelli1(event.target.value)
        break
      case 'melliCode2':
        setAdultMelli2(event.target.value)
        break
      case 'melliCode3':
        setAdultMelli3(event.target.value)
        break
      case 'melliCode4':
        setAdultMelli4(event.target.value)
        break
      case 'melliCode5':
        setAdultMelli5(event.target.value)
        break
      case 'melliCode6':
        setAdultMelli6(event.target.value)
        break
      case 'melliCode7':
        setAdultMelli7(event.target.value)
        break
      case 'melliCode8':
        setAdultMelli8(event.target.value)
        break
      case 'melliCode9':
        setAdultMelli9(event.target.value)
        break
      default:
        break
    }
  }

  const [dayI1, setAdultDayI1] = useState()
  const [dayI2, setAdultDayI2] = useState()
  const [dayI3, setAdultDayI3] = useState()
  const [dayI4, setAdultDayI4] = useState()
  const [dayI5, setAdultDayI5] = useState()
  const [dayI6, setAdultDayI6] = useState()
  const [dayI7, setAdultDayI7] = useState()
  const [dayI8, setAdultDayI8] = useState()
  const [dayI9, setAdultDayI9] = useState()

  const setADayI = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'dayI1':
        setAdultDayI1(event.target.value)
        break
      case 'dayI2':
        setAdultDayI2(event.target.value)
        break
      case 'dayI3':
        setAdultDayI3(event.target.value)
        break
      case 'dayI4':
        setAdultDayI4(event.target.value)
        break
      case 'dayI5':
        setAdultDayI5(event.target.value)
        break
      case 'dayI6':
        setAdultDayI6(event.target.value)
        break
      case 'dayI7':
        setAdultDayI7(event.target.value)
        break
      case 'dayI8':
        setAdultDayI8(event.target.value)
        break
      case 'dayI9':
        setAdultDayI9(event.target.value)
        break
      default:
        break
    }
  }

  const [monthI1, setAdultmonthI1] = useState()
  const [monthI2, setAdultmonthI2] = useState()
  const [monthI3, setAdultmonthI3] = useState()
  const [monthI4, setAdultmonthI4] = useState()
  const [monthI5, setAdultmonthI5] = useState()
  const [monthI6, setAdultmonthI6] = useState()
  const [monthI7, setAdultmonthI7] = useState()
  const [monthI8, setAdultmonthI8] = useState()
  const [monthI9, setAdultmonthI9] = useState()

  const setAMonthI = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'monthI1':
        setAdultmonthI1(event.target.value)
        break
      case 'monthI2':
        setAdultmonthI2(event.target.value)
        break
      case 'monthI3':
        setAdultmonthI3(event.target.value)
        break
      case 'monthI4':
        setAdultmonthI4(event.target.value)
        break
      case 'monthI5':
        setAdultmonthI5(event.target.value)
        break
      case 'monthI6':
        setAdultmonthI6(event.target.value)
        break
      case 'monthI7':
        setAdultmonthI7(event.target.value)
        break
      case 'monthI8':
        setAdultmonthI8(event.target.value)
        break
      case 'monthI9':
        setAdultmonthI9(event.target.value)
        break
      default:
        break
    }
  }

  const [yearI1, setAdultyearI1] = useState()
  const [yearI2, setAdultyearI2] = useState()
  const [yearI3, setAdultyearI3] = useState()
  const [yearI4, setAdultyearI4] = useState()
  const [yearI5, setAdultyearI5] = useState()
  const [yearI6, setAdultyearI6] = useState()
  const [yearI7, setAdultyearI7] = useState()
  const [yearI8, setAdultyearI8] = useState()
  const [yearI9, setAdultyearI9] = useState()

  const setAYearI = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'yearI1':
        setAdultyearI1(event.target.value)
        break
      case 'yearI2':
        setAdultyearI2(event.target.value)
        break
      case 'yearI3':
        setAdultyearI3(event.target.value)
        break
      case 'yearI4':
        setAdultyearI4(event.target.value)
        break
      case 'yearI5':
        setAdultyearI5(event.target.value)
        break
      case 'yearI6':
        setAdultyearI6(event.target.value)
        break
      case 'yearI7':
        setAdultyearI7(event.target.value)
        break
      case 'yearI8':
        setAdultyearI8(event.target.value)
        break
      case 'yearI9':
        setAdultyearI9(event.target.value)
        break
      default:
        break
    }
  }

  const [dayM1, setAdultDayM1] = useState()
  const [dayM2, setAdultDayM2] = useState()
  const [dayM3, setAdultDayM3] = useState()
  const [dayM4, setAdultDayM4] = useState()
  const [dayM5, setAdultDayM5] = useState()
  const [dayM6, setAdultDayM6] = useState()
  const [dayM7, setAdultDayM7] = useState()
  const [dayM8, setAdultDayM8] = useState()
  const [dayM9, setAdultDayM9] = useState()

  const setADayM = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'dayM1':
        setAdultDayM1(event.target.value)
        break
      case 'dayM2':
        setAdultDayM2(event.target.value)
        break
      case 'dayM3':
        setAdultDayM3(event.target.value)
        break
      case 'dayM4':
        setAdultDayM4(event.target.value)
        break
      case 'dayM5':
        setAdultDayM5(event.target.value)
        break
      case 'dayM6':
        setAdultDayM6(event.target.value)
        break
      case 'dayM7':
        setAdultDayM7(event.target.value)
        break
      case 'dayM8':
        setAdultDayM8(event.target.value)
        break
      case 'dayM9':
        setAdultDayM9(event.target.value)
        break
      default:
        break
    }
  }

  const [monthM1, setAdultmonthM1] = useState()
  const [monthM2, setAdultmonthM2] = useState()
  const [monthM3, setAdultmonthM3] = useState()
  const [monthM4, setAdultmonthM4] = useState()
  const [monthM5, setAdultmonthM5] = useState()
  const [monthM6, setAdultmonthM6] = useState()
  const [monthM7, setAdultmonthM7] = useState()
  const [monthM8, setAdultmonthM8] = useState()
  const [monthM9, setAdultmonthM9] = useState()

  const setAMonthM = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'monthM1':
        setAdultmonthM1(event.target.value)
        break
      case 'monthM2':
        setAdultmonthM2(event.target.value)
        break
      case 'monthM3':
        setAdultmonthM3(event.target.value)
        break
      case 'monthM4':
        setAdultmonthM4(event.target.value)
        break
      case 'monthM5':
        setAdultmonthM5(event.target.value)
        break
      case 'monthM6':
        setAdultmonthM6(event.target.value)
        break
      case 'monthM7':
        setAdultmonthM7(event.target.value)
        break
      case 'monthM8':
        setAdultmonthM8(event.target.value)
        break
      case 'monthM9':
        setAdultmonthM9(event.target.value)
        break
      default:
        break
    }
  }

  const [yearM1, setAdultyearM1] = useState()
  const [yearM2, setAdultyearM2] = useState()
  const [yearM3, setAdultyearM3] = useState()
  const [yearM4, setAdultyearM4] = useState()
  const [yearM5, setAdultyearM5] = useState()
  const [yearM6, setAdultyearM6] = useState()
  const [yearM7, setAdultyearM7] = useState()
  const [yearM8, setAdultyearM8] = useState()
  const [yearM9, setAdultyearM9] = useState()

  const setAYearM = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'yearM1':
        setAdultyearM1(event.target.value)
        break
      case 'yearM2':
        setAdultyearM2(event.target.value)
        break
      case 'yearM3':
        setAdultyearM3(event.target.value)
        break
      case 'yearM4':
        setAdultyearM4(event.target.value)
        break
      case 'yearM5':
        setAdultyearM5(event.target.value)
        break
      case 'yearM6':
        setAdultyearM6(event.target.value)
        break
      case 'yearM7':
        setAdultyearM7(event.target.value)
        break
      case 'yearM8':
        setAdultyearM8(event.target.value)
        break
      case 'yearM9':
        setAdultyearM9(event.target.value)
        break
      default:
        break
    }
  }

  const [birthcount1, setAdultbirthcount1] = useState()
  const [birthcount2, setAdultbirthcount2] = useState()
  const [birthcount3, setAdultbirthcount3] = useState()
  const [birthcount4, setAdultbirthcount4] = useState()
  const [birthcount5, setAdultbirthcount5] = useState()
  const [birthcount6, setAdultbirthcount6] = useState()
  const [birthcount7, setAdultbirthcount7] = useState()
  const [birthcount8, setAdultbirthcount8] = useState()
  const [birthcount9, setAdultbirthcount9] = useState()

  const setABirthcount = (event) => {
    // console.log('test',event.target.id, event.target.value)
    switch (event.target.id) {
      case 'birthcount1':
        setAdultbirthcount1(event.target.value)
        break
      case 'birthcount2':
        setAdultbirthcount2(event.target.value)
        break
      case 'birthcount3':
        setAdultbirthcount3(event.target.value)
        break
      case 'birthcount4':
        setAdultbirthcount4(event.target.value)
        break
      case 'birthcount5':
        setAdultbirthcount5(event.target.value)
        break
      case 'birthcount6':
        setAdultbirthcount6(event.target.value)
        break
      case 'birthcount7':
        setAdultbirthcount7(event.target.value)
        break
      case 'birthcount8':
        setAdultbirthcount8(event.target.value)
        break
      case 'birthcount9':
        setAdultbirthcount9(event.target.value)
        break
      default:
        break
    }
  }

  const [melli, setMelli] = useState(true)
  const [melliChek, setMelliChek] = useState(true)
  const [pass, setPass] = useState(false)
  const [passChek, setPassChek] = useState(false)

  const melliChk = () => {
    setPassChek(false)
    setMelliChek(true)
    setPass(!pass)
    setMelli(true)
  }
  const passChk = () => {
    setMelliChek(false)
    setPassChek(true)
    setMelli(!melli)
    setPass(true)
  }

  const historyPass = () => {}

  const passSubmit = () => {
    console.log('ooooollll')
  }

  const [melliC, setmelliC] = useState(true)
  const [melliChekC, setmelliChekC] = useState(true)
  const [passC, setpassC] = useState(false)
  const [passChekC, setpassChekC] = useState(false)

  const melliChkC = () => {
    setpassChekC(false)
    setmelliChekC(true)
    setpassC(!passC)
    setmelliC(true)
  }
  const passChkC = () => {
    setmelliChekC(false)
    setpassChekC(true)
    setmelliC(!melliC)
    setpassC(true)
  }

  const [melliI, setmelliI] = useState(true)
  const [melliChekI, setmelliChekI] = useState(true)
  const [passI, setpassI] = useState(false)
  const [passChekI, setpassChekI] = useState(false)

  const melliChkI = () => {
    setpassChekI(false)
    setmelliChekI(true)
    setpassI(!passI)
    setmelliI(true)
  }
  const passIhkC = () => {
    setmelliChekI(false)
    setpassChekI(true)
    setmelliI(!melliI)
    setpassI(true)
  }

  // console.log('params',searchParams)

  // const [isLoading, setLoading] = useState(true)

  // if (isLoading) return <p>Loading...</p>
  // if (!data) return <p>No profile data</p>

  return (
    <div className="w-full flex flex-col justify-center items-center mt-3">
      <div className="contain flex flex-col gap-5 lg:w-3/5 h-fit mb-10">
        <div className="flightInfo flex flex-row-reverse w-full h-40 rounded-lg bg-gray-200">
          <div className="infoRight flex flex-row-reverse w-3/4 h-40">
            <div className="corp flex flex-col items-center justify-center w-1/3 shadow-sm shadow-black rounded-r-lg">
              <Image
                alt=""
                src={'/images/zagros.png'}
                width={120}
                height={120}
              />
              <span className="alib text-gray-600">هواپیمایی زاگرس</span>
            </div>
            <div className="info flex flex-col items-center justify-between my-2 w-2/3">
              <div className="date flex flex-row-reverse">
                <span className="alib">{day}</span>
                <span className="alib mx-3">{MName}</span>
                <span className="alib">{year}</span>
              </div>
              <div className="systemy flex flex-row-reverse gap-3">
                <span className="alib">سیستمی</span>
                <span className="alib">اکونومی</span>
                <span className="alib">بوئینگ</span>
              </div>
              <div className="Time">
                <div className="az"></div>
                <div className="khat w-10 h-1 bg-gray-800"></div>
                <div className="be"></div>
              </div>
            </div>
          </div>
          <div className="infoRight flex flex-col justify-around items-center w-1/4 h-40 shadow-sm shadow-black rounded-l-lg">
            <div className="change">
              <button className="alib bg-blue-400 px-4 py-2 rounded-xl text-white">
                تغییر بلیط
              </button>
            </div>
            <div className="price flex flex-row">
              <h2 className="alib">ریال</h2>
              <h2 className="alib mx-2 text-red-500">
                <FareZv
                  adult={adult}
                  child={child}
                  infant={infant}
                  from={from}
                  to={to}
                  date={date}
                  flightNo={flightNo}
                />
              </h2>

              <h2 className="alib">مجموع</h2>
            </div>
          </div>
        </div>

        <form
          action={`/flight/final${flightNo}/sale`}
          className="passengers flex flex-col w-full h-fit bg-gray-200 rounded-lg pb-10"
        >
          <div className="passProp flex flex-col gap-3">
            <div className="topp flex flex-col items-center justify-between w-full">
              <h2 className="alib mt-2">مشخصات مسافران</h2>
            </div>

            {(function (rows, s) {
              while (s++ < adult) {
                rows.push(
                  <div value="" key={s} className="w-full">
                    <div className="inputs flex lg:flex-col lg:mt-5 lg:gap-8 lg:justify-start m-2 shadow-lg shadow-gray-800 rounded-lg p-2 ">
                      <div className="flex flex-row-reverse items-center justify-between w-full h-10">
                        <div className="title flex flex-row-reverse justify-between w-1/2">
                          <div className="titleRight flex flex-row-reverse justify-start items-center gap-3 lg:mr-2 w-full">
                            <span className="alib bg-red-400 rounded-xl px-1">
                              بزرگسال
                            </span>
                            <input
                              type="hidden"
                              name={`age${s}`}
                              value={'بزرگسال'}
                            />
                            <div className="flex flex-row-reverse justify-center items-center gap-1">
                              {/* {console.log('chek', mellihek1 )} */}
                              {melliChek ? (
                                <div
                                  id={s}
                                  className="w-3 h-3 rounded-full ring-2 bg-blue-500"
                                >
                                  <input
                                    type="hidden"
                                    name={`identify${s}`}
                                    value={`melli${s}`}
                                  />
                                </div>
                              ) : (
                                <div
                                  id={s}
                                  onClick={() => melliChk()}
                                  className="w-3 h-3 ring-2 rounded-full bg-white"
                                >
                                  <input
                                    type="hidden"
                                    name={`identify${s}`}
                                    value={`passport${s}`}
                                  />
                                </div>
                              )}

                              <span className="alib mr-1">کد ملی</span>
                            </div>
                            <div className="flex flex-row-reverse justify-center items-center gap-1">
                              {/* {console.log('lklklklk', passhek1)} */}
                              {passChek ? (
                                <div
                                  id={s}
                                  className="w-3 h-3 rounded-full ring-2 bg-blue-500"
                                ></div>
                              ) : (
                                <div
                                  id={s}
                                  onClick={() => passChk()}
                                  className="w-3 h-3 ring-2 rounded-full bg-white"
                                ></div>
                              )}

                              <span className="alib mr-1">پاسپورت</span>
                            </div>
                          </div>
                        </div>

                        <div className="titleLEFT w-1/3">
                          <button onClick={() => historyPass()}>
                            <span className="alib text-green-500">
                              انتخاب مسافران سابق
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="top flex lg:flex-row-reverse gap-2 lg:justify-start">
                        <input
                          required={true}
                          onChange={() => setALatin(event)}
                          className="alib w-1/4 p-2 rounded-lg text-right"
                          type="text"
                          name={`latinName${s}`}
                          id={`latinName${s}`}
                          placeholder="نام لاتین"
                        />
                        <input
                          required={true}
                          // onChange={()=>`setAdultFamily${s}`(event.target.value)}
                          onChange={() => setAFamily(event)}
                          className="alib w-1/4 p-2 rounded-lg text-right"
                          type="text"
                          name={`family${s}`}
                          id={`family${s}`}
                          placeholder="نام خانوادگی لاتین"
                        />
                        <select
                          onChange={() => setAsex(event)}
                          name={`sex${s}`}
                          id={`sex${s}`}
                          className="alib w-1/4 p-2 rounded-lg text-right"
                        >
                          <option value="" disabled>
                            {' '}
                            جنسیت{' '}
                          </option>
                          <option
                            className="alib text-center bg-blue-400"
                            value="MR"
                          >
                            آقا
                          </option>
                          <option
                            className="alib text-center bg-pink-400"
                            value="MRS"
                          >
                            بانو
                          </option>
                        </select>
                        {/* {console.log('typpp',melli1) }
                        {console.log('typpp2',pass1) } */}
                        {melli && (
                          <input
                            required={true}
                            onChange={() => setAMelliCode(event)}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                            type="text"
                            name={`melliCode${s}`}
                            id={`melliCode${s}`}
                            placeholder="کد ملی "
                          />
                        )}
                        {pass == true && (
                          <div className="alib flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                            <span className="alib text-xs">
                              تاریخ تولد (میلادی){' '}
                            </span>
                            <div className="alib flex flex-row-reverse w-full">
                              <select
                                onChange={() => setADayM(event)}
                                className="w-1/5 ring-1 lg:rounded-r-lg"
                                name={`dayM${s}`}
                                id={`dayM${s}`}
                              >
                                {(function (rows, i) {
                                  while (i++ < 31) {
                                    rows.push(
                                      <option value="" key={i}>
                                        {i}
                                      </option>
                                    )
                                  }
                                  return rows
                                })([], 0, 10)}
                              </select>
                              <select
                                onChange={() => setAMonthM(event)}
                                className=" font-serif w-2/5 ring-1"
                                name={`monthM${s}`}
                                id={`monthM${s}`}
                              >
                                <option value="1"> Jan </option>
                                <option value="2"> Feb </option>
                                <option value="3"> Mar </option>
                                <option value="4"> Apr </option>
                                <option value="5"> May </option>
                                <option value="6"> Jun </option>
                                <option value="7"> Jul </option>
                                <option value="8"> Aug </option>
                                <option value="9"> Sep </option>
                                <option value="10"> Oct </option>
                                <option value="11"> Nov </option>
                                <option value="12"> Dec </option>
                              </select>
                              <select
                                onChange={() => setAYearM(event)}
                                className="w-2/5 ring-1 lg:rounded-l-lg"
                                name={`yearM${s}`}
                                id={`yearM${s}`}
                              >
                                {(function (rows, j) {
                                  for (j = 2012; j > 1924; j--) {
                                    rows.push(
                                      <option value="" key={j}>
                                        {j}
                                      </option>
                                    )
                                  }
                                  return rows
                                })([], 0, 10)}
                              </select>
                            </div>
                          </div>
                        )}
                      </div>

                      {melli && (
                        <div className="butt1 flex justify-end w-full">
                          <div className="alib datee flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                            <span className="alib text-xs">تاریخ تولد </span>
                            <div className="alib flex flex-row-reverse w-full">
                              <select
                                onChange={() => setADayI(event)}
                                className="w-1/5 ring-1 lg:rounded-r-lg"
                                name={`dayI${s}`}
                                id={`dayI${s}`}
                              >
                                {(function (rows, i) {
                                  while (i++ < 31) {
                                    rows.push(
                                      <option value={i} key={i}>
                                        {i}
                                      </option>
                                    )
                                  }
                                  return rows
                                })([], 0, 10)}
                              </select>
                              <select
                                onChange={() => setAMonthI(event)}
                                className="alib text-right font-serif w-2/5 ring-1"
                                name={`monthI${s}`}
                                id={`monthI${s}`}
                              >
                                <option value="1"> فروردین </option>
                                <option value="2"> اردیبهشت </option>
                                <option value="3"> خرداد </option>
                                <option value="4"> تیر </option>
                                <option value="5"> مرداد </option>
                                <option value="6"> شهریور </option>
                                <option value="7"> مهر </option>
                                <option value="8"> آبان </option>
                                <option value="9"> آذر </option>
                                <option value="10"> دی </option>
                                <option value="11"> بهمن </option>
                                <option value="12"> اسفند </option>
                              </select>
                              <select
                                onChange={() => setAYearI(event)}
                                className="w-2/5 ring-1 lg:rounded-l-lg"
                                name={`yearI${s}`}
                                id={`yearI${s}`}
                              >
                                {(function (rows, m) {
                                  for (m = 1391; m > 1300; m--) {
                                    rows.push(
                                      <option value={m} key={m}>
                                        {m}
                                      </option>
                                    )
                                  }
                                  return rows
                                })([], 0, 10)}
                              </select>
                            </div>
                          </div>
                        </div>
                      )}

                      {pass && (
                        <div className="butt flex lg:flex-row-reverse gap-2 lg:justify-start">
                          <input
                            required={true}
                            onChange={() => setABirthcount(event)}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                            type="text"
                            name={`birthcount${s}`}
                            id={`birthcount${s}`}
                            placeholder="کشور محل تولد "
                          />
                          <input
                            required={true}
                            onChange={() => setApassount(event)}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                            type="text"
                            name={`passount${s}`}
                            id={`passount${s}`}
                            placeholder="کشور صادر کننده پاسپورت "
                          />

                          <input
                            required={true}
                            onChange={() => setAPassNum(event)}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                            type="text"
                            name={`passNum${s}`}
                            id={`passNum${s}`}
                            placeholder="شماره پاسپورت "
                          />
                          <div className="alib datee flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                            <span className="alib text-xs">
                              تاریخ انقضاء پاسپورت{' '}
                            </span>
                            <div className="alib flex flex-row-reverse w-full">
                              <select
                                onChange={() => setADayEXP(event)}
                                className="w-1/5 ring-1 lg:rounded-r-lg"
                                name={`dayEXP${s}`}
                                id={`dayEXP${s}`}
                              >
                                {(function (rows, i) {
                                  while (i++ < 31) {
                                    rows.push(
                                      <option value="" key={i}>
                                        {i}
                                      </option>
                                    )
                                  }
                                  return rows
                                })([], 0, 10)}
                              </select>
                              <select
                                onChange={() => setAMonthEXP(event)}
                                className=" font-serif w-2/5 ring-1"
                                name={`monthEXP${s}`}
                                id={`monthEXP${s}`}
                              >
                                <option value="Jan"> Jan </option>
                                <option value="Feb"> Feb </option>
                                <option value="Mar"> Mar </option>
                                <option value="Apr"> Apr </option>
                                <option value="May"> May </option>
                                <option value="Jun"> Jun </option>
                                <option value="Jul"> Jul </option>
                                <option value="Aug"> Aug </option>
                                <option value="Sep"> Sep </option>
                                <option value="Oct"> Oct </option>
                                <option value="Nov"> Nov </option>
                                <option value="Dec"> Dec </option>
                              </select>
                              <select
                                onChange={() => setAYearEXP(event)}
                                className="w-2/5 ring-1 lg:rounded-l-lg"
                                name={`yearEXP${s}`}
                                id={`yearEXP${s}`}
                              >
                                {(function (rows, k) {
                                  for (k = 2024; k < 2030; k++) {
                                    rows.push(
                                      <option value="" key={k}>
                                        {k}
                                      </option>
                                    )
                                  }
                                  return rows
                                })([], 0, 10)}
                              </select>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              }
              return rows
            })([], 0, 10)}

            {child > 0 &&
              (function (rows, s) {
                while (s++ < child) {
                  rows.push(
                    <div value="" key={s} className="w-full">
                      <div className="inputs flex lg:flex-col lg:mt-5 lg:gap-8 lg:justify-start m-2 shadow-lg shadow-gray-800 rounded-lg p-2 ">
                        <div className="flex flex-row-reverse items-center justify-between w-full h-10">
                          <div className="title flex flex-row-reverse justify-between w-1/2">
                            <div className="titleRight flex flex-row-reverse justify-start items-center gap-3 lg:mr-2 w-full">
                              <span className="alib bg-orange-400 rounded-xl px-1">
                                کودک
                              </span>
                              <input
                                type="hidden"
                                name={`age${Number(s) + Number(adult)}`}
                                value={'کودک'}
                              />
                              <div className="flex flex-row-reverse justify-center items-center gap-1">
                                {/* <input
                           required={true}
                            onClick={()=>melliChkC(event)} type="radio" name="کد ملی" id="melliC" /> */}
                                {melliChekC ? (
                                  <div className="w-3 h-3 rounded-full ring-2 bg-blue-500">
                                    <input
                                      type="hidden"
                                      name="identify"
                                      value={`melli${s}`}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    onClick={() => melliChkC()}
                                    className="w-3 h-3 ring-2 rounded-full bg-white"
                                  >
                                    <input
                                      type="hidden"
                                      name="identify"
                                      value={`passport${s}`}
                                    />
                                  </div>
                                )}

                                <span className="alib mr-1">کد ملی</span>
                              </div>
                              <div className="flex flex-row-reverse justify-center items-center gap-1">
                                {/* <input
                           required={true}
                            onClick={()=>passChkC()} type="radio" name="پاسپورت" id="passCport" /> */}
                                {passChekC ? (
                                  <div className="w-3 h-3 rounded-full ring-2 bg-blue-500"></div>
                                ) : (
                                  <div
                                    onClick={() => passChkC()}
                                    className="w-3 h-3 ring-2 rounded-full bg-white"
                                  ></div>
                                )}
                                <span className="alib mr-1">پاسپورت</span>
                              </div>
                            </div>
                          </div>

                          <div className="titleLEFT w-1/3">
                            <button onClick={() => historypassC()}>
                              <span className="alib text-green-500">
                                انتخاب مسافران سابق
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="top flex lg:flex-row-reverse gap-2 lg:justify-start">
                          <input
                            required={true}
                            onChange={() => setALatin(event)}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                            type="text"
                            name={`latinName${Number(s) + Number(adult)}`}
                            id={`latinName${Number(s) + Number(adult)}`}
                            placeholder="نام لاتین"
                          />
                          <input
                            required={true}
                            // onChange={()=>`setChildfamily${s}`(event.target.value)}
                            onChange={() => setAFamily(event)}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                            type="text"
                            name={`family${Number(s) + Number(adult)}`}
                            id={`family${Number(s) + Number(adult)}`}
                            placeholder="نام خانوادگی لاتین"
                          />
                          <select
                            onChange={() => setAsex(event)}
                            name={`sex${Number(s) + Number(adult)}`}
                            id={`sex${Number(s) + Number(adult)}`}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                          >
                            <option value="" disabled>
                              {' '}
                              جنسیت{' '}
                            </option>
                            <option
                              className="alib text-center bg-blue-400"
                              value="MR"
                            >
                              آقا
                            </option>
                            <option
                              className="alib text-center bg-pink-400"
                              value="MRS"
                            >
                              بانو
                            </option>
                          </select>
                          {melliC && (
                            <input
                              required={true}
                              onChange={() => setAMelliCode(event)}
                              className="alib w-1/4 p-2 rounded-lg text-right"
                              type="text"
                              name={`melliCode${Number(s) + Number(adult)}`}
                              id={`melliCode${Number(s) + Number(adult)}`}
                              placeholder="کد ملی "
                            />
                          )}
                          {passC && (
                            <div className="alib flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                              <span className="alib text-xs">
                                تاریخ تولد (میلادی){' '}
                              </span>
                              <div className="alib flex flex-row-reverse w-full">
                                <select
                                  onChange={() => setADayM(event)}
                                  className="w-1/5 ring-1 lg:rounded-r-lg"
                                  name={`dayM${Number(s) + Number(adult)}`}
                                  id={`dayM${Number(s) + Number(adult)}`}
                                >
                                  {(function (rows, i) {
                                    while (i++ < 31) {
                                      rows.push(
                                        <option value="" key={i}>
                                          {i}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                                <select
                                  onChange={() => setAMonthM(event)}
                                  className=" font-serif w-2/5 ring-1"
                                  name={`monthM${Number(s) + Number(adult)}`}
                                  id={`monthM${Number(s) + Number(adult)}`}
                                >
                                  <option value="1"> Jan </option>
                                  <option value="2"> Feb </option>
                                  <option value="3"> Mar </option>
                                  <option value="4"> Apr </option>
                                  <option value="5"> May </option>
                                  <option value="6"> Jun </option>
                                  <option value="7"> Jul </option>
                                  <option value="8"> Aug </option>
                                  <option value="9"> Sep </option>
                                  <option value="10"> Oct </option>
                                  <option value="11"> Nov </option>
                                  <option value="12"> Dec </option>
                                </select>
                                <select
                                  onChange={() => setAYearM(event)}
                                  className="w-2/5 ring-1 lg:rounded-l-lg"
                                  name={`yearM${Number(s) + Number(adult)}`}
                                  id={`yearM${Number(s) + Number(adult)}`}
                                >
                                  {(function (rows, j) {
                                    for (j = 2022; j > 2012; j--) {
                                      rows.push(
                                        <option value="" key={j}>
                                          {j}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                              </div>
                            </div>
                          )}
                        </div>

                        {melliC && (
                          <div className="butt1 flex justify-end w-full">
                            <div className="alib datee flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                              <span className="alib text-xs">تاریخ تولد </span>
                              <div className="alib flex flex-row-reverse w-full">
                                <select
                                  onChange={() => setADayI(event)}
                                  className="w-1/5 ring-1 lg:rounded-r-lg"
                                  name={`dayI${Number(s) + Number(adult)}`}
                                  id={`dayI${Number(s) + Number(adult)}`}
                                >
                                  {(function (rows, i) {
                                    while (i++ < 31) {
                                      rows.push(
                                        <option value={i} key={i}>
                                          {i}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                                <select
                                  onChange={() => setAMonthI(event)}
                                  className="alib text-right font-serif w-2/5 ring-1"
                                  name={`monthI${Number(s) + Number(adult)}`}
                                  id={`monthI${Number(s) + Number(adult)}`}
                                >
                                  <option value="1"> فروردین </option>
                                  <option value="2"> اردیبهشت </option>
                                  <option value="3"> خرداد </option>
                                  <option value="4"> تیر </option>
                                  <option value="5"> مرداد </option>
                                  <option value="6"> شهریور </option>
                                  <option value="7"> مهر </option>
                                  <option value="8"> آبان </option>
                                  <option value="9"> آذر </option>
                                  <option value="10"> دی </option>
                                  <option value="11"> بهمن </option>
                                  <option value="12"> اسفند </option>
                                </select>
                                <select
                                  onChange={() => setAYearI(event)}
                                  className="w-2/5 ring-1 lg:rounded-l-lg"
                                  name={`yearI${Number(s) + Number(adult)}`}
                                  id={`yearI${Number(s) + Number(adult)}`}
                                >
                                  {(function (rows, m) {
                                    for (m = 1401; m > 1391; m--) {
                                      rows.push(
                                        <option value={m} key={m}>
                                          {m}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                              </div>
                            </div>
                          </div>
                        )}

                        {passC && (
                          <div className="butt flex lg:flex-row-reverse gap-2 lg:justify-start">
                            <input
                              required={true}
                              onChange={() => setABirthcount(event)}
                              className="alib w-1/4 p-2 rounded-lg text-right"
                              type="text"
                              name={`birthcount${Number(s) + Number(adult)}`}
                              id={`birthcount${Number(s) + Number(adult)}`}
                              placeholder="کشور محل تولد "
                            />
                            <input
                              required={true}
                              onChange={() => setApassCcount(event)}
                              className="alib w-1/4 p-2 rounded-lg text-right"
                              type="text"
                              name={`passCcount${Number(s) + Number(adult)}`}
                              id={`passCcount${Number(s) + Number(adult)}`}
                              placeholder="کشور صادر کننده پاسپورت "
                            />

                            <input
                              required={true}
                              onChange={() => setApassCNum(event)}
                              className="alib w-1/4 p-2 rounded-lg text-right"
                              type="text"
                              name={`passCNum${Number(s) + Number(adult)}`}
                              id={`passCNum${Number(s) + Number(adult)}`}
                              placeholder="شماره پاسپورت "
                            />
                            <div className="alib datee flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                              <span className="alib text-xs">
                                تاریخ انقضاء پاسپورت{' '}
                              </span>
                              <div className="alib flex flex-row-reverse w-full">
                                <select
                                  onChange={() => setADayEXP(event)}
                                  className="w-1/5 ring-1 lg:rounded-r-lg"
                                  name={`dayEXP${Number(s) + Number(adult)}`}
                                  id={`dayEXP${Number(s) + Number(adult)}`}
                                >
                                  {(function (rows, i) {
                                    while (i++ < 31) {
                                      rows.push(
                                        <option value="" key={i}>
                                          {i}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                                <select
                                  onChange={() => setAMonthEXP(event)}
                                  className=" font-serif w-2/5 ring-1"
                                  name={`monthEXP${Number(s) + Number(adult)}`}
                                  id={`monthEXP${Number(s) + Number(adult)}`}
                                >
                                  <option value="Jan"> Jan </option>
                                  <option value="Feb"> Feb </option>
                                  <option value="Mar"> Mar </option>
                                  <option value="Apr"> Apr </option>
                                  <option value="May"> May </option>
                                  <option value="Jun"> Jun </option>
                                  <option value="Jul"> Jul </option>
                                  <option value="Aug"> Aug </option>
                                  <option value="Sep"> Sep </option>
                                  <option value="Oct"> Oct </option>
                                  <option value="Nov"> Nov </option>
                                  <option value="Dec"> Dec </option>
                                </select>
                                <select
                                  onChange={() => setAYearEXP(event)}
                                  className="w-2/5 ring-1 lg:rounded-l-lg"
                                  name={`yearEXP${Number(s) + Number(adult)}`}
                                  id={`yearEXP${Number(s) + Number(adult)}`}
                                >
                                  {(function (rows, k) {
                                    for (k = 2024; k < 2030; k++) {
                                      rows.push(
                                        <option value="" key={k}>
                                          {k}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                }
                return rows
              })([], 0, 10)}

            {infant > 0 &&
              (function (rows, s) {
                while (s++ < infant) {
                  rows.push(
                    <div value="" key={s} className="w-full">
                      <div className="inputs flex lg:flex-col lg:mt-5 lg:gap-8 lg:justify-start m-2 shadow-lg shadow-gray-800 rounded-lg p-2 ">
                        <div className="flex flex-row-reverse items-center justify-between w-full h-10">
                          <div className="title flex flex-row-reverse justify-between w-1/2">
                            <div className="titleRight flex flex-row-reverse justify-start items-center gap-3 lg:mr-2 w-full">
                              <span className="alib bg-green-400 rounded-xl px-1">
                                نوزاد
                              </span>
                              <input
                                type="hidden"
                                name={`age${
                                  Number(s) + Number(child) + Number(adult)
                                }`}
                                value={'نوزاد'}
                              />
                              <div className="flex flex-row-reverse justify-center items-center gap-1">
                                {/* <input
                           required={true}
                            onClick={()=>melliChkI(event)} type="radio" name="کد ملی" id="melliI" /> */}
                                {melliChekI ? (
                                  <div className="w-3 h-3 rounded-full ring-2 bg-blue-500">
                                    <input
                                      type="hidden"
                                      name="identify"
                                      value={`melli${s}`}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    onClick={() => melliChkI()}
                                    className="w-3 h-3 ring-2 rounded-full bg-white"
                                  >
                                    <input
                                      type="hidden"
                                      name="identify"
                                      value={`passport${s}`}
                                    />
                                  </div>
                                )}

                                <span className="alib mr-1">کد ملی</span>
                              </div>
                              <div className="flex flex-row-reverse justify-center items-center gap-1">
                                {/* <input
                           required={true}
                            onClick={()=>passIhkC()} type="radio" name="پاسپورت" id="passIport" /> */}
                                {passChekI ? (
                                  <div className="w-3 h-3 rounded-full ring-2 bg-blue-500"></div>
                                ) : (
                                  <div
                                    onClick={() => passIhkC()}
                                    className="w-3 h-3 ring-2 rounded-full bg-white"
                                  ></div>
                                )}
                                <span className="alib mr-1">پاسپورت</span>
                              </div>
                            </div>
                          </div>

                          <div className="titleLEFT w-1/3">
                            <button onClick={() => historypassI()}>
                              <span className="alib text-green-500">
                                انتخاب مسافران سابق
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="top flex lg:flex-row-reverse gap-2 lg:justify-start">
                          <input
                            required={true}
                            onChange={() => setALatin(event)}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                            type="text"
                            name={`latinName${
                              Number(s) + Number(child) + Number(adult)
                            }`}
                            id={`latinName${
                              Number(s) + Number(child) + Number(adult)
                            }`}
                            placeholder="نام لاتین"
                          />
                          <input
                            required={true}
                            // onChange={()=>`setInfantfamily${Number(s) + Number(child)  + Number(adult)}`(event.target.value)}
                            onChange={() => setAFamily(event)}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                            type="text"
                            name={`family${
                              Number(s) + Number(child) + Number(adult)
                            }`}
                            id={`family${
                              Number(s) + Number(child) + Number(adult)
                            }`}
                            placeholder="نام خانوادگی لاتین"
                          />
                          <select
                            onChange={() => setAsex(event)}
                            name={`sex${
                              Number(s) + Number(child) + Number(adult)
                            }`}
                            id={`sex${
                              Number(s) + Number(child) + Number(adult)
                            }`}
                            className="alib w-1/4 p-2 rounded-lg text-right"
                          >
                            <option value="" disabled>
                              {' '}
                              جنسیت{' '}
                            </option>
                            <option
                              className="alib text-center bg-blue-400"
                              value="MR"
                            >
                              آقا
                            </option>
                            <option
                              className="alib text-center bg-pink-400"
                              value="MRS"
                            >
                              بانو
                            </option>
                          </select>
                          {melliI && (
                            <input
                              required={true}
                              onChange={() => setAMelliCode(event)}
                              className="alib w-1/4 p-2 rounded-lg text-right"
                              type="text"
                              name={`melliCode${
                                Number(s) + Number(child) + Number(adult)
                              }`}
                              id={`melliCode${
                                Number(s) + Number(child) + Number(adult)
                              }`}
                              placeholder="کد ملی "
                            />
                          )}
                          {passI && (
                            <div className="alib flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                              <span className="alib text-xs">
                                تاریخ تولد (میلادی){' '}
                              </span>
                              <div className="alib flex flex-row-reverse w-full">
                                <select
                                  onChange={() => setADayM(event)}
                                  className="w-1/5 ring-1 lg:rounded-r-lg"
                                  name={`dayM${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`dayM${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  {(function (rows, i) {
                                    while (i++ < 31) {
                                      rows.push(
                                        <option value="" key={i}>
                                          {i}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                                <select
                                  onChange={() => setAMonthM(event)}
                                  className=" font-serif w-2/5 ring-1"
                                  name={`monthM${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`monthM${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  <option value="1"> Jan </option>
                                  <option value="2"> Feb </option>
                                  <option value="3"> Mar </option>
                                  <option value="4"> Apr </option>
                                  <option value="5"> May </option>
                                  <option value="6"> Jun </option>
                                  <option value="7"> Jul </option>
                                  <option value="8"> Aug </option>
                                  <option value="9"> Sep </option>
                                  <option value="10"> Oct </option>
                                  <option value="11"> Nov </option>
                                  <option value="12"> Dec </option>
                                </select>
                                <select
                                  onChange={() => setAYearM(event)}
                                  className="w-2/5 ring-1 lg:rounded-l-lg"
                                  name={`yearM${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`yearM${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  {(function (rows, j) {
                                    for (j = 2024; j > 2022; j--) {
                                      rows.push(
                                        <option value="" key={j}>
                                          {j}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                              </div>
                            </div>
                          )}
                        </div>

                        {melliI && (
                          <div className="butt1 flex justify-end w-full">
                            <div className="alib datee flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                              <span className="alib text-xs">تاریخ تولد </span>
                              <div className="alib flex flex-row-reverse w-full">
                                <select
                                  onChange={() => setADayI(event)}
                                  className="w-1/5 ring-1 lg:rounded-r-lg"
                                  name={`dayI${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`dayI${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  {(function (rows, i) {
                                    while (i++ < 31) {
                                      rows.push(
                                        <option value={i} key={i}>
                                          {i}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                                <select
                                  onChange={() => setAMonthI(event)}
                                  className="alib text-right font-serif w-2/5 ring-1"
                                  name={`monthI${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`monthI${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  <option value="1"> فروردین </option>
                                  <option value="2"> اردیبهشت </option>
                                  <option value="3"> خرداد </option>
                                  <option value="4"> تیر </option>
                                  <option value="5"> مرداد </option>
                                  <option value="6"> شهریور </option>
                                  <option value="7"> مهر </option>
                                  <option value="8"> آبان </option>
                                  <option value="9"> آذر </option>
                                  <option value="10"> دی </option>
                                  <option value="11"> بهمن </option>
                                  <option value="12"> اسفند </option>
                                </select>
                                <select
                                  onChange={() => setAYearI(event)}
                                  className="w-2/5 ring-1 lg:rounded-l-lg"
                                  name={`yearI${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`yearI${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  {(function (rows, m) {
                                    for (m = 1403; m > 1401; m--) {
                                      rows.push(
                                        <option value={m} key={m}>
                                          {m}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                              </div>
                            </div>
                          </div>
                        )}

                        {passI && (
                          <div className="butt flex lg:flex-row-reverse gap-2 lg:justify-start">
                            <input
                              required={true}
                              onChange={() => setABirthcount(event)}
                              className="alib w-1/4 p-2 rounded-lg text-right"
                              type="text"
                              name={`birthcount${
                                Number(s) + Number(child) + Number(adult)
                              }`}
                              id={`birthcount${
                                Number(s) + Number(child) + Number(adult)
                              }`}
                              placeholder="کشور محل تولد "
                            />
                            <input
                              required={true}
                              onChange={() => setCpassIcount(event)}
                              className="alib w-1/4 p-2 rounded-lg text-right"
                              type="text"
                              name={`passIcount${
                                Number(s) + Number(child) + Number(adult)
                              }`}
                              id={`passIcount${
                                Number(s) + Number(child) + Number(adult)
                              }`}
                              placeholder="کشور صادر کننده پاسپورت "
                            />

                            <input
                              required={true}
                              onChange={() => setCpassINum(event)}
                              className="alib w-1/4 p-2 rounded-lg text-right"
                              type="text"
                              name={`passINum${
                                Number(s) + Number(child) + Number(adult)
                              }`}
                              id={`passINum${
                                Number(s) + Number(child) + Number(adult)
                              }`}
                              placeholder="شماره پاسپورت "
                            />
                            <div className="alib datee flex flex-col m-0 w-1/4 p-0 rounded-lg text-right">
                              <span className="alib text-xs">
                                تاریخ انقضاء پاسپورت{' '}
                              </span>
                              <div className="alib flex flex-row-reverse w-full">
                                <select
                                  onChange={() => setCDayEXP(event)}
                                  className="w-1/5 ring-1 lg:rounded-r-lg"
                                  name={`dayEXP${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`dayEXP${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  {(function (rows, i) {
                                    while (i++ < 31) {
                                      rows.push(
                                        <option value="" key={i}>
                                          {i}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                                <select
                                  onChange={() => setCMonthEXP(event)}
                                  className=" font-serif w-2/5 ring-1"
                                  name={`monthEXP${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`monthEXP${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  <option value="Jan"> Jan </option>
                                  <option value="Feb"> Feb </option>
                                  <option value="Mar"> Mar </option>
                                  <option value="Apr"> Apr </option>
                                  <option value="May"> May </option>
                                  <option value="Jun"> Jun </option>
                                  <option value="Jul"> Jul </option>
                                  <option value="Aug"> Aug </option>
                                  <option value="Sep"> Sep </option>
                                  <option value="Oct"> Oct </option>
                                  <option value="Nov"> Nov </option>
                                  <option value="Dec"> Dec </option>
                                </select>
                                <select
                                  onChange={() => setCYearEXP(event)}
                                  className="w-2/5 ring-1 lg:rounded-l-lg"
                                  name={`yearEXP${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                  id={`yearEXP${
                                    Number(s) + Number(child) + Number(adult)
                                  }`}
                                >
                                  {(function (rows, k) {
                                    for (k = 2024; k < 2030; k++) {
                                      rows.push(
                                        <option value="" key={k}>
                                          {k}
                                        </option>
                                      )
                                    }
                                    return rows
                                  })([], 0, 10)}
                                </select>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                }
                return rows
              })([], 0, 10)}

            <input type="hidden" name="fromname" value={fromname} />
            <input type="hidden" name="toname" value={toname} />
            <input type="hidden" name="to" value={to} />
            <input type="hidden" name="from" value={from} />
            <input type="hidden" name="adult" value={adult} />
            <input type="hidden" name="child" value={child} />
            <input type="hidden" name="infant" value={infant} />
            <input type="hidden" name="flightNo" value={flightNo} />
            <input type="hidden" name="day" value={day} />
            <input type="hidden" name="date" value={date} />
            <input type="hidden" name="time" value={time} />
            <input type="hidden" name="MName" value={MName} />
            <input type="hidden" name="year" value={year} />
          </div>
          <div className="submit mt-2">
            <button
              onSubmit={() => {}}
              type="submit"
              className="alib bg-blue-400 px-8 py-3 my-2 text-white rounded-tr-xl rounded-bl-xl"
            >
              ثبت اطلاعات (پذیرش قوانین)
            </button>
          </div>
        </form>
      </div>

      <div className="flex w-full mb-10 lg:">
        <Banner im="/images/airplaneForien.png" />
      </div>
    </div>
  )
}

export default Flight
