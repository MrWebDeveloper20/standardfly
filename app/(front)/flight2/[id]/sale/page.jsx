'use client'
import Image from 'next/image'
import FareZv from '@/components/fare/fareZv'
import FareZvW from '@/components/fareZvW/fareZvW'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Modal from '@/components/modal/page'

const Sale = () => {
  const searchParams = useSearchParams()
  const fromnameUrl = searchParams.get('fromname')
  const tonameUrl = searchParams.get('toname')
  const fromUrl = searchParams.get('from')
  const toUrl = searchParams.get('to')
  const adultUrl = searchParams.get('adult')
  const childUrl = searchParams.get('child')
  const infantUrl = searchParams.get('infant')
  const dateGUrl = searchParams.get('dateG')
  const dateRUrl = searchParams.get('dateR')
  const timeUrl = searchParams.get('time')
  const timeDUrl = searchParams.get('timeD')
  const dayUrl = searchParams.get('day')
  const MNameUrl = searchParams.get('MName')
  const yearUrl = searchParams.get('year')
  const day2Url = searchParams.get('day2')
  const MName2Url = searchParams.get('MName2')
  const year2Url = searchParams.get('year2')
  const flightNoGUrl = searchParams.get('flightNoG')
  const flightNoRUrl = searchParams.get('flightNoR')

  const [fromname, setfromname] = useState(fromnameUrl)
  const [toname, settoname] = useState(tonameUrl)
  const [from, setfrom] = useState(fromUrl)
  const [to, setto] = useState(toUrl)
  const [adult, setadult] = useState(adultUrl)
  const [child, setchild] = useState(childUrl)
  const [infant, setinfant] = useState(infantUrl)
  const [dateG, setdateG] = useState(dateGUrl)
  const [dateR, setdateR] = useState(dateRUrl)
  const [time, settime] = useState(timeUrl)
  const [timeD, settimeD] = useState(timeDUrl)
  const [day, setday] = useState(dayUrl)
  const [MName, setMName] = useState(MNameUrl)
  const [year, setyear] = useState(yearUrl)
  const [day2, setday2] = useState(day2Url)
  const [MName2, setMName2] = useState(MName2Url)
  const [year2, setyear2] = useState(year2Url)
  const [flightNoG, setflightNoG] = useState(flightNoGUrl)
  const [flightNoR, setflightNoR] = useState(flightNoRUrl)

  const age1Url = searchParams.get('age1')
  const identify1Url = searchParams.get('identify1')
  const latinName1Url = searchParams.get('latinName1')
  const family1Url = searchParams.get('family1')
  const sex1Url = searchParams.get('sex1')
  const melliCode1Url = searchParams.get('melliCode1')
  const passNum1Url = searchParams.get('passNum1')
  const birthcount1Url = searchParams.get('birthcount1')
  const dayI1Url = searchParams.get('dayI1')
  const monthI1Url = searchParams.get('monthI1')
  const yearI1Url = searchParams.get('yearI1')
  const dayM1Url = searchParams.get('dayM1')
  const monthM1Url = searchParams.get('monthM1')
  const yearM1Url = searchParams.get('yearM1')

  const [age1, setage1] = useState(age1Url)
  const [identify1, setidentify1] = useState(identify1Url)
  const [latinName1, setlatinName1] = useState(latinName1Url)
  const [family1, setfamily1] = useState(family1Url)
  const [sex1, setsex1] = useState(sex1Url)
  const [melliCode1, setmelliCode1] = useState(melliCode1Url)
  const [passNum1, setpassNum1] = useState(passNum1Url)
  const [birthcount1, setbirthcount1] = useState(birthcount1Url)
  const [dayI1, setdayI1] = useState(dayI1Url)
  const [monthI1, setmonthI1] = useState(monthI1Url)
  const [yearI1, setyearI1] = useState(yearI1Url)
  const [dayM1, setdayM1] = useState(dayM1Url)
  const [monthM1, setmonthM1] = useState(monthM1Url)
  const [yearM1, setyearM1] = useState(yearM1Url)

  const age2Url = searchParams.get('age2')
  const identify2Url = searchParams.get('identify2')
  const latinName2Url = searchParams.get('latinName2')
  const family2Url = searchParams.get('family2')
  const sex2Url = searchParams.get('sex2')
  const melliCode2Url = searchParams.get('melliCode2')
  const passNum2Url = searchParams.get('passNum2')
  const birthcount2Url = searchParams.get('birthcount2')
  const dayI2Url = searchParams.get('dayI2')
  const monthI2Url = searchParams.get('monthI2')
  const yearI2Url = searchParams.get('yearI2')
  const dayM2Url = searchParams.get('dayM2')
  const monthM2Url = searchParams.get('monthM2')
  const yearM2Url = searchParams.get('yearM2')

  const [age2, setage2] = useState(age2Url)
  const [identify2, setidentify2] = useState(identify2Url)
  const [latinName2, setlatinName2] = useState(latinName2Url)
  const [family2, setfamily2] = useState(family2Url)
  const [sex2, setsex2] = useState(sex2Url)
  const [melliCode2, setmelliCode2] = useState(melliCode2Url)
  const [passNum2, setpassNum2] = useState(passNum2Url)
  const [birthcount2, setbirthcount2] = useState(birthcount2Url)
  const [dayI2, setdayI2] = useState(dayI2Url)
  const [monthI2, setmonthI2] = useState(monthI2Url)
  const [yearI2, setyearI2] = useState(yearI2Url)
  const [dayM2, setdayM2] = useState(dayM2Url)
  const [monthM2, setmonthM2] = useState(monthM2Url)
  const [yearM2, setyearM2] = useState(yearM2Url)

  const age3Url = searchParams.get('age3')
  const identify3Url = searchParams.get('identify3')
  const latinName3Url = searchParams.get('latinName3')
  const family3Url = searchParams.get('family3')
  const sex3Url = searchParams.get('sex3')
  const melliCode3Url = searchParams.get('melliCode3')
  const passNum3Url = searchParams.get('passNum3')
  const dayI3Url = searchParams.get('dayI3')
  const monthI3Url = searchParams.get('monthI3')
  const yearI3Url = searchParams.get('yearI3')
  const dayM3Url = searchParams.get('dayM3')
  const monthM3Url = searchParams.get('monthM3')
  const yearM3Url = searchParams.get('yearM3')
  const birthcount3Url = searchParams.get('birthcount3')

  const [age3, setage3] = useState(age3Url)
  const [identify3, setidentify3] = useState(identify3Url)
  const [latinName3, setlatinName3] = useState(latinName3Url)
  const [family3, setfamily3] = useState(family3Url)
  const [sex3, setsex3] = useState(sex3Url)
  const [melliCode3, setmelliCode3] = useState(melliCode3Url)
  const [passNum3, setpassNum3] = useState(passNum3Url)
  const [dayI3, setdayI3] = useState(dayI3Url)
  const [monthI3, setmonthI3] = useState(monthI3Url)
  const [yearI3, setyearI3] = useState(yearI3Url)
  const [dayM3, setdayM3] = useState(dayM3Url)
  const [monthM3, setmonthM3] = useState(monthM3Url)
  const [yearM3, setyearM3] = useState(yearM3Url)
  const [birthcount3, setbirthcount3] = useState(birthcount3Url)

  const age4Url = searchParams.get('age4')
  const identify4Url = searchParams.get('identify4')
  const latinName4Url = searchParams.get('latinName4')
  const family4Url = searchParams.get('family4')
  const sex4Url = searchParams.get('sex4')
  const melliCode4Url = searchParams.get('melliCode4')
  const passNum4Url = searchParams.get('passNum4')
  const dayI4Url = searchParams.get('dayI4')
  const monthI4Url = searchParams.get('monthI4')
  const yearI4Url = searchParams.get('yearI4')
  const dayM4Url = searchParams.get('dayM4')
  const monthM4Url = searchParams.get('monthM4')
  const yearM4Url = searchParams.get('yearM4')
  const birthcount4Url = searchParams.get('birthcount4')

  const [age4, setage4] = useState(age4Url)
  const [identify4, setidentify4] = useState(identify4Url)
  const [latinName4, setlatinName4] = useState(latinName4Url)
  const [family4, setfamily4] = useState(family4Url)
  const [sex4, setsex4] = useState(sex4Url)
  const [melliCode4, setmelliCode4] = useState(melliCode4Url)
  const [passNum4, setpassNum4] = useState(passNum4Url)
  const [dayI4, setdayI4] = useState(dayI4Url)
  const [monthI4, setmonthI4] = useState(monthI4Url)
  const [yearI4, setyearI4] = useState(yearI4Url)
  const [dayM4, setdayM4] = useState(dayM4Url)
  const [monthM4, setmonthM4] = useState(monthM4Url)
  const [yearM4, setyearM4] = useState(yearM4Url)
  const [birthcount4, setbirthcount4] = useState(birthcount4Url)

  const age5Url = searchParams.get('age5')
  const identify5Url = searchParams.get('identify5')
  const latinName5Url = searchParams.get('latinName5')
  const family5Url = searchParams.get('family5')
  const sex5Url = searchParams.get('sex5')
  const melliCode5Url = searchParams.get('melliCode5')
  const passNum5Url = searchParams.get('passNum5')
  const dayI5Url = searchParams.get('dayI5')
  const monthI5Url = searchParams.get('monthI5')
  const yearI5Url = searchParams.get('yearI5')
  const dayM5Url = searchParams.get('dayM5')
  const monthM5Url = searchParams.get('monthM5')
  const yearM5Url = searchParams.get('yearM5')
  const birthcount5Url = searchParams.get('birthcount5')

  const [age5, setage5] = useState(age5Url)
  const [identify5, setidentify5] = useState(identify5Url)
  const [latinName5, setlatinName5] = useState(latinName5Url)
  const [family5, setfamily5] = useState(family5Url)
  const [sex5, setsex5] = useState(sex5Url)
  const [melliCode5, setmelliCode5] = useState(melliCode5Url)
  const [passNum5, setpassNum5] = useState(passNum5Url)
  const [dayI5, setdayI5] = useState(dayI5Url)
  const [monthI5, setmonthI5] = useState(monthI5Url)
  const [yearI5, setyearI5] = useState(yearI5Url)
  const [dayM5, setdayM5] = useState(dayM5Url)
  const [monthM5, setmonthM5] = useState(monthM5Url)
  const [yearM5, setyearM5] = useState(yearM5Url)
  const [birthcount5, setbirthcount5] = useState(birthcount5Url)

  const age6Url = searchParams.get('age6')
  const identify6Url = searchParams.get('identify6')
  const latinName6Url = searchParams.get('latinName6')
  const family6Url = searchParams.get('family6')
  const sex6Url = searchParams.get('sex6')
  const melliCode6Url = searchParams.get('melliCode6')
  const passNum6Url = searchParams.get('passNum6')
  const dayI6Url = searchParams.get('dayI6')
  const monthI6Url = searchParams.get('monthI6')
  const yearI6Url = searchParams.get('yearI6')
  const dayM6Url = searchParams.get('dayM6')
  const monthM6Url = searchParams.get('monthM6')
  const yearM6Url = searchParams.get('yearM6')
  const birthcount6Url = searchParams.get('birthcount6')

  const [age6, setage6] = useState(age6Url)
  const [identify6, setidentify6] = useState(identify6Url)
  const [latinName6, setlatinName6] = useState(latinName6Url)
  const [family6, setfamily6] = useState(family6Url)
  const [sex6, setsex6] = useState(sex6Url)
  const [melliCode6, setmelliCode6] = useState(melliCode6Url)
  const [passNum6, setpassNum6] = useState(passNum6Url)
  const [dayI6, setdayI6] = useState(dayI6Url)
  const [monthI6, setmonthI6] = useState(monthI6Url)
  const [yearI6, setyearI6] = useState(yearI6Url)
  const [dayM6, setdayM6] = useState(dayM6Url)
  const [monthM6, setmonthM6] = useState(monthM6Url)
  const [yearM6, setyearM6] = useState(yearM6Url)
  const [birthcount6, setbirthcount6] = useState(birthcount6Url)

  const age7Url = searchParams.get('age7')
  const identify7Url = searchParams.get('identify7')
  const latinName7Url = searchParams.get('latinName7')
  const family7Url = searchParams.get('family7')
  const sex7Url = searchParams.get('sex7')
  const melliCode7Url = searchParams.get('melliCode7')
  const passNum7Url = searchParams.get('passNum7')
  const dayI7Url = searchParams.get('dayI7')
  const monthI7Url = searchParams.get('monthI7')
  const yearI7Url = searchParams.get('yearI7')
  const dayM7Url = searchParams.get('dayM7')
  const monthM7Url = searchParams.get('monthM7')
  const yearM7Url = searchParams.get('yearM7')
  const birthcount7Url = searchParams.get('birthcount7')

  const [age7, setage7] = useState(age7Url)
  const [identify7, setidentify7] = useState(identify7Url)
  const [latinName7, setlatinName7] = useState(latinName7Url)
  const [family7, setfamily7] = useState(family7Url)
  const [sex7, setsex7] = useState(sex7Url)
  const [melliCode7, setmelliCode7] = useState(melliCode7Url)
  const [passNum7, setpassNum7] = useState(passNum7Url)
  const [dayI7, setdayI7] = useState(dayI7Url)
  const [monthI7, setmonthI7] = useState(monthI7Url)
  const [yearI7, setyearI7] = useState(yearI7Url)
  const [dayM7, setdayM7] = useState(dayM7Url)
  const [monthM7, setmonthM7] = useState(monthM7Url)
  const [yearM7, setyearM7] = useState(yearM7Url)
  const [birthcount7, setbirthcount7] = useState(birthcount7Url)

  const age8Url = searchParams.get('age8')
  const identify8Url = searchParams.get('identify8')
  const latinName8Url = searchParams.get('latinName8')
  const family8Url = searchParams.get('family8')
  const sex8Url = searchParams.get('sex8')
  const melliCode8Url = searchParams.get('melliCode8')
  const passNum8Url = searchParams.get('passNum8')
  const dayI8Url = searchParams.get('dayI8')
  const monthI8Url = searchParams.get('monthI8')
  const yearI8Url = searchParams.get('yearI8')
  const dayM8Url = searchParams.get('dayM8')
  const monthM8Url = searchParams.get('monthM8')
  const yearM8Url = searchParams.get('yearM8')
  const birthcount8Url = searchParams.get('birthcount8')

  const [age8, setage8] = useState(age8Url)
  const [identify8, setidentify8] = useState(identify8Url)
  const [latinName8, setlatinName8] = useState(latinName8Url)
  const [family8, setfamily8] = useState(family8Url)
  const [sex8, setsex8] = useState(sex8Url)
  const [melliCode8, setmelliCode8] = useState(melliCode8Url)
  const [passNum8, setpassNum8] = useState(passNum8Url)
  const [dayI8, setdayI8] = useState(dayI8Url)
  const [monthI8, setmonthI8] = useState(monthI8Url)
  const [yearI8, setyearI8] = useState(yearI8Url)
  const [dayM8, setdayM8] = useState(dayM8Url)
  const [monthM8, setmonthM8] = useState(monthM8Url)
  const [yearM8, setyearM8] = useState(yearM8Url)
  const [birthcount8, setbirthcount8] = useState(birthcount8Url)

  const age9Url = searchParams.get('age9')
  const identify9Url = searchParams.get('identify9')
  const latinName9Url = searchParams.get('latinName9')
  const family9Url = searchParams.get('family9')
  const sex9Url = searchParams.get('sex9')
  const melliCode9Url = searchParams.get('melliCode9')
  const passNum9Url = searchParams.get('passNum9')
  const dayI9Url = searchParams.get('dayI9')
  const monthI9Url = searchParams.get('monthI9')
  const yearI9Url = searchParams.get('yearI9')
  const dayM9Url = searchParams.get('dayM9')
  const monthM9Url = searchParams.get('monthM9')
  const yearM9Url = searchParams.get('yearM9')
  const birthcount9Url = searchParams.get('birthcount9')

  const [age9, setage9] = useState(age9Url)
  const [identify9, setidentify9] = useState(identify9Url)
  const [latinName9, setlatinName9] = useState(latinName9Url)
  const [family9, setfamily9] = useState(family9Url)
  const [sex9, setsex9] = useState(sex9Url)
  const [melliCode9, setmelliCode9] = useState(melliCode9Url)
  const [passNum9, setpassNum9] = useState(passNum9Url)
  const [dayI9, setdayI9] = useState(dayI9Url)
  const [monthI9, setmonthI9] = useState(monthI9Url)
  const [yearI9, setyearI9] = useState(yearI9Url)
  const [dayM9, setdayM9] = useState(dayM9Url)
  const [monthM9, setmonthM9] = useState(monthM9Url)
  const [yearM9, setyearM9] = useState(yearM9Url)
  const [birthcount9, setbirthcount9] = useState(birthcount9Url)

  const [user1, setuser1] = useState([
    age1,
    identify1,
    latinName1,
    family1,
    sex1,
    melliCode1,
    passNum1,
    dayI1,
    monthI1,
    yearI1,
    dayM1,
    monthM1,
    yearM1,
    birthcount1,
  ])
  const [user2, setuser2] = useState([
    age2,
    identify2,
    latinName2,
    family2,
    sex2,
    melliCode2,
    passNum2,
    dayI2,
    monthI2,
    yearI2,
    dayM2,
    monthM2,
    yearM2,
    birthcount2,
  ])
  const [user3, setuser3] = useState([
    age3,
    identify3,
    latinName3,
    family3,
    sex3,
    melliCode3,
    passNum3,
    dayI3,
    monthI3,
    yearI3,
    dayM3,
    monthM3,
    yearM3,
    birthcount3,
  ])
  const [user4, setuser4] = useState([
    age4,
    identify4,
    latinName4,
    family4,
    sex4,
    melliCode4,
    passNum4,
    dayI4,
    monthI4,
    yearI4,
    dayM4,
    monthM4,
    yearM4,
    birthcount4,
  ])
  const [user5, setuser5] = useState([
    age5,
    identify5,
    latinName5,
    family5,
    sex5,
    melliCode5,
    passNum5,
    dayI5,
    monthI5,
    yearI5,
    dayM5,
    monthM5,
    yearM5,
    birthcount5,
  ])
  const [user6, setuser6] = useState([
    age6,
    identify6,
    latinName6,
    family6,
    sex6,
    melliCode6,
    passNum6,
    dayI6,
    monthI6,
    yearI6,
    dayM6,
    monthM6,
    yearM6,
    birthcount6,
  ])
  const [user7, setuser7] = useState([
    age7,
    identify7,
    latinName7,
    family7,
    sex7,
    melliCode7,
    passNum7,
    dayI7,
    monthI7,
    yearI7,
    dayM7,
    monthM7,
    yearM7,
    birthcount7,
  ])
  const [user8, setuser8] = useState([
    age8,
    identify8,
    latinName8,
    family8,
    sex8,
    melliCode8,
    passNum8,
    dayI8,
    monthI8,
    yearI8,
    dayM8,
    monthM8,
    yearM8,
    birthcount8,
  ])
  const [user9, setuser9] = useState([
    age9,
    identify9,
    latinName9,
    family9,
    sex9,
    melliCode9,
    passNum9,
    dayI9,
    monthI9,
    yearI9,
    dayM9,
    monthM9,
    yearM9,
    birthcount9,
  ])

  const [isLoading, setLoading] = useState(false)
  const [AdultTotalPriceG, setAdultTotalPriceG] = useState()
  const [ChildTotalPriceG, setChildTotalPriceG] = useState()
  const [InfantTotalPriceG, setInfantTotalPriceG] = useState()
  const [loadWeightG, setloadWeightG] = useState()
  useEffect(() => {
    setLoading(true)
    const fareeG = fetch(
      '/api/fare?from=' +
        from +
        '&to=' +
        to +
        '&date=' +
        dateG +
        '&flightNo=' +
        flightNoG
    )
      .then((res) => res.json())
      .then((data) => {
        setAdultTotalPriceG(data.AdultTotalPrice)
        setChildTotalPriceG(data.ChildTotalPrice)
        setInfantTotalPriceG(data.InfantTotalPrice)
        setloadWeightG(data.BaggageAllowanceWeight.toString().slice(0, 2))
        setLoading(false)
      })
  }, [])

  const [AdultTotalPriceR, setAdultTotalPriceR] = useState()
  const [ChildTotalPriceR, setChildTotalPriceR] = useState()
  const [InfantTotalPriceR, setInfantTotalPriceR] = useState()
  const [loadWeightR, setloadWeightR] = useState()
  useEffect(() => {
    setLoading(true)
    const fareeR = fetch(
      '/api/fare?from=' +
        to +
        '&to=' +
        from +
        '&date=' +
        dateR +
        '&flightNo=' +
        flightNoR
    )
      .then((res) => res.json())
      .then((data) => {
        setAdultTotalPriceR(data.AdultTotalPrice)
        setChildTotalPriceR(data.ChildTotalPrice)
        setInfantTotalPriceR(data.InfantTotalPrice)
        setloadWeightR(data.BaggageAllowanceWeight.toString().slice(0, 2))
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Modal />

  return (
    <div className="flex flex-col justify-center items-left w-5/6 my-3 mx-auto h-fit">
      <div className="goneTicket flex flex-col justify-center items-left w-full h-fit mx-auto">
        <div className="ticketInfo flex flex-row justify-center items-center my-2">
          <h2 className="alib mr-2 text-green-500 text-xl">اطلاعات بلیط رفت</h2>
          <Image src={'/icon/ticket.png'} alt="" width={30} height={30} />
        </div>
        <div className="flex flex-col w-full ring-2 shadow-lg shadow-gray-600 rounded-lg bg-red-100">
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 rounded-tr-lg py-3">مبدا</h2>
            <h2 className="alib w-4/5 ring-1 rounded-tl-lg py-3">{fromname}</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3">مقصد</h2>
            <h2 className="alib w-4/5 ring-1 py-3">{toname}</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3">شرکت هواپیمایی</h2>
            <h2 className="alib w-4/5 ring-1 py-3">زاگرس</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3"> ساعت و تاریخ </h2>
            <div className="flex flex-row-reverse justify-center w-4/5 ring-1 rounded-bl-lg">
              <h2 className="alib py-3">- {timeD}</h2>
              <h2 className="alib py-3 mr-2"> {day} </h2>
              <h2 className="alib py-3 mx-1"> {MName}</h2>
              <h2 className="alib py-3 "> {year}</h2>
            </div>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3">شماره پرواز </h2>
            <h2 className="alib w-4/5 ring-1 py-3">{flightNoG}</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3">کلاس پرواز </h2>
            <h2 className="alib w-4/5 ring-1 py-3">اکونومی</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 rounded-br-lg py-3">بار مجاز </h2>
            <div className="WEIGHT flex flex-row-reverse justify-center w-4/5 ring-1 rounded-bl-lg">
              <h2 className="alib py-3 text-red-500 text-xl">
                {Number(loadWeightG) * adult}
              </h2>
              <h2 className="alib mr-2 py-3"> کیلوگرم</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="returnTicket flex flex-col justify-center items-left w-full h-fit mx-auto">
        <div className="ticketInfo flex flex-row justify-center items-center my-2">
          <h2 className="alib mr-2 text-blue-500 text-xl my-2">
            اطلاعات بلیط برگشت
          </h2>
          <Image src={'/icon/ticket.png'} alt="" width={30} height={30} />
        </div>
        <div className="flex flex-col w-full ring-2 shadow-lg shadow-gray-600 rounded-lg bg-blue-100">
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 rounded-tr-lg py-3">مبدا</h2>
            <h2 className="alib w-4/5 ring-1 rounded-tl-lg py-3">{toname}</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3">مقصد</h2>
            <h2 className="alib w-4/5 ring-1 py-3">{fromname}</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3">شرکت هواپیمایی</h2>
            <h2 className="alib w-4/5 ring-1 py-3">زاگرس</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3"> ساعت و تاریخ </h2>
            <div className="flex flex-row-reverse justify-center w-4/5 ring-1 rounded-bl-lg">
              <h2 className="alib py-3">- {time}</h2>
              <h2 className="alib py-3 mr-2"> {day2} </h2>
              <h2 className="alib py-3 mx-1"> {MName2}</h2>
              <h2 className="alib py-3 "> {year2}</h2>
            </div>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3">شماره پرواز </h2>
            <h2 className="alib w-4/5 ring-1 py-3">{flightNoR}</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 py-3">کلاس پرواز </h2>
            <h2 className="alib w-4/5 ring-1 py-3">اکونومی</h2>
          </div>
          <div className="ticketInfo1 flex flex-row-reverse justify-center items-center">
            <h2 className="alib w-1/5 ring-1 rounded-br-lg py-3">بار مجاز </h2>
            <div className="WEIGHT flex flex-row-reverse justify-center w-4/5 ring-1 rounded-bl-lg">
              <h2 className="alib py-3 text-red-500 text-xl">
                {Number(loadWeightR) * adult}
              </h2>
              <h2 className="alib mr-2 py-3"> کیلوگرم</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="ticketInfo flex flex-row justify-center items-center my-3">
        <h2 className="alib mr-2 text-blue-500 text-xl">اطلاعات مسافران</h2>
        <Image src={'/icon/passenger.svg'} alt="" width={30} height={30} />
      </div>
      <div className="flex flex-col w-full ring-2 shadow-lg shadow-gray-600 rounded-t-lg">
        <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-400 rounded-t-lg">
          <h2 className="alib w-1/6">رده سنی</h2>
          <h2 className="alib w-1/6">نام و نام خانوادگی</h2>
          <h2 className="alib w-1/6">جنسیت</h2>
          <h2 className="alib w-1/6">کد ملی/شماره پاسپورت</h2>
          <h2 className="alib w-1/6">تاریخ تولد</h2>
          <h2 className="alib w-1/6">ملیت</h2>
        </div>
      </div>
      <div className="flex flex-col w-full ring-2 shadow-lg shadow-gray-300 rounded-b-lg">
        <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
          <h2 className="alib w-1/6 ">{age1} </h2>
          <div className="flex flex-row justify-center gap-2 w-1/6 ">
            <h2 className="alib "> {latinName1} </h2>
            <h2 className="alib "> {family1} </h2>
          </div>
          <h2 className="alib w-1/6 "> {sex1 === 'MR' ? 'آقـا' : 'بانـو'} </h2>
          {identify1 === 'melli1' ? (
            <h2 className="alib w-1/6"> {melliCode1} </h2>
          ) : (
            <h2 className="alib w-1/6"> {passNum1} </h2>
          )}

          {identify1 === 'melli1' ? (
            <div className="flex flex-row justify-center w-1/6">
              <h2 className="alib "> {yearI1} </h2>
              <h2 className="alib mx-1"> {'/'} </h2>
              <h2 className="alib "> {monthI1} </h2>
              <h2 className="alib mx-1"> {'/'} </h2>
              <h2 className="alib "> {dayI1} </h2>
            </div>
          ) : (
            <div className="flex flex-row justify-center w-1/6">
              <h2 className="alib "> {yearM1} </h2>
              <h2 className="alib mx-1"> {'/'} </h2>
              <h2 className="alib "> {monthM1} </h2>
              <h2 className="alib mx-1"> {'/'} </h2>
              <h2 className="alib "> {dayM1} </h2>
            </div>
          )}
          {identify1 === 'melli1' ? (
            <div className="w-1/6">
              <h2 className="alib w-full ">ایرانی</h2>
            </div>
          ) : (
            <div className="w-1/6">
              <h2 className="alib w-full ">
                {birthcount1}
                {'ی'}
              </h2>
            </div>
          )}
        </div>

        {age2 && (
          <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
            <h2 className="alib w-1/6 ">{age2} </h2>
            <div className="flex flex-row justify-center gap-2 w-1/6 ">
              <h2 className="alib "> {latinName2} </h2>
              <h2 className="alib "> {family2} </h2>
            </div>
            <h2 className="alib w-1/6 ">
              {' '}
              {sex2 === 'MR' ? 'آقـا' : 'بانـو'}{' '}
            </h2>
            {identify2 === 'melli2' ? (
              <h2 className="alib w-1/6"> {melliCode2} </h2>
            ) : (
              <h2 className="alib w-1/6"> {passNum2} </h2>
            )}
            {identify2 === 'melli2' ? (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearI2} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthI2} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayI2} </h2>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearM2} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthM2} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayM2} </h2>
              </div>
            )}
            {identify2 === 'melli2' ? (
              <div className="w-1/6">
                <h2 className="alib w-full ">ایرانی</h2>
              </div>
            ) : (
              <div className="w-1/6">
                <h2 className="alib w-full ">
                  {birthcount1}
                  {'ی'}
                </h2>
              </div>
            )}
          </div>
        )}

        {age3 && (
          <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
            <h2 className="alib w-1/6 ">{age3} </h2>
            <div className="flex flex-row justify-center gap-2 w-1/6 ">
              <h2 className="alib "> {latinName3} </h2>
              <h2 className="alib "> {family3} </h2>
            </div>
            <h2 className="alib w-1/6 ">
              {' '}
              {sex3 === 'MR' ? 'آقـا' : 'بانـو'}{' '}
            </h2>
            {identify3 === 'melli3' ? (
              <h2 className="alib w-1/6"> {melliCode3} </h2>
            ) : (
              <h2 className="alib w-1/6"> {passNum3} </h2>
            )}
            {identify3 === 'melli3' ? (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearI3} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthI3} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayI3} </h2>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearM3} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthM3} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayM3} </h2>
              </div>
            )}
            {identify3 === 'melli3' ? (
              <div className="w-1/6">
                <h2 className="alib w-full ">ایرانی</h2>
              </div>
            ) : (
              <div className="w-1/6">
                <h2 className="alib w-full ">
                  {birthcount1}
                  {'ی'}
                </h2>
              </div>
            )}
          </div>
        )}

        {age4 && (
          <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
            <h2 className="alib w-1/6 ">{age4} </h2>
            <div className="flex flex-row justify-center gap-2 w-1/6 ">
              <h2 className="alib "> {latinName4} </h2>
              <h2 className="alib "> {family4} </h2>
            </div>
            <h2 className="alib w-1/6 ">
              {' '}
              {sex4 === 'MR' ? 'آقـا' : 'بانـو'}{' '}
            </h2>
            {identify4 === 'melli4' ? (
              <h2 className="alib w-1/6"> {melliCode4} </h2>
            ) : (
              <h2 className="alib w-1/6"> {passNum4} </h2>
            )}
            {identify4 === 'melli4' ? (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearI4} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthI4} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayI4} </h2>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearM4} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthM4} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayM4} </h2>
              </div>
            )}
            {identify4 === 'melli4' ? (
              <div className="w-1/6">
                <h2 className="alib w-full ">ایرانی</h2>
              </div>
            ) : (
              <div className="w-1/6">
                <h2 className="alib w-full ">
                  {birthcount1}
                  {'ی'}
                </h2>
              </div>
            )}
          </div>
        )}

        {age5 && (
          <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
            <h2 className="alib w-1/6 ">{age5} </h2>
            <div className="flex flex-row justify-center gap-2 w-1/6 ">
              <h2 className="alib "> {latinName5} </h2>
              <h2 className="alib "> {family5} </h2>
            </div>
            <h2 className="alib w-1/6 ">
              {' '}
              {sex5 === 'MR' ? 'آقـا' : 'بانـو'}{' '}
            </h2>
            {identify5 === 'melli5' ? (
              <h2 className="alib w-1/6"> {melliCode5} </h2>
            ) : (
              <h2 className="alib w-1/6"> {passNum5} </h2>
            )}
            {identify5 === 'melli5' ? (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearI5} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthI5} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayI4} </h2>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearM5} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthM5} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayM5} </h2>
              </div>
            )}
            {identify5 === 'melli5' ? (
              <div className="w-1/6">
                <h2 className="alib w-full ">ایرانی</h2>
              </div>
            ) : (
              <div className="w-1/6">
                <h2 className="alib w-full ">
                  {birthcount1}
                  {'ی'}
                </h2>
              </div>
            )}
          </div>
        )}

        {age6 && (
          <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
            <h2 className="alib w-1/6 ">{age6} </h2>
            <div className="flex flex-row justify-center gap-2 w-1/6 ">
              <h2 className="alib "> {latinName6} </h2>
              <h2 className="alib "> {family6} </h2>
            </div>
            <h2 className="alib w-1/6 ">
              {' '}
              {sex6 === 'MR' ? 'آقـا' : 'بانـو'}{' '}
            </h2>
            {identify6 === 'melli6' ? (
              <h2 className="alib w-1/6"> {melliCode6} </h2>
            ) : (
              <h2 className="alib w-1/6"> {passNum6} </h2>
            )}
            {identify6 === 'melli6' ? (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearI6} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthI6} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayI6} </h2>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearM6} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthM6} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayM6} </h2>
              </div>
            )}
            {identify6 === 'melli6' ? (
              <div className="w-1/6">
                <h2 className="alib w-full ">ایرانی</h2>
              </div>
            ) : (
              <div className="w-1/6">
                <h2 className="alib w-full ">
                  {birthcount1}
                  {'ی'}
                </h2>
              </div>
            )}
          </div>
        )}

        {age7 && (
          <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
            <h2 className="alib w-1/6 ">{age7} </h2>
            <div className="flex flex-row justify-center gap-2 w-1/6 ">
              <h2 className="alib "> {latinName7} </h2>
              <h2 className="alib "> {family7} </h2>
            </div>
            <h2 className="alib w-1/6 ">
              {' '}
              {sex7 === 'MR' ? 'آقـا' : 'بانـو'}{' '}
            </h2>
            {identify7 === 'melli7' ? (
              <h2 className="alib w-1/6"> {melliCode7} </h2>
            ) : (
              <h2 className="alib w-1/6"> {passNum7} </h2>
            )}
            {identify7 === 'melli7' ? (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearI7} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthI7} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayI7} </h2>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearM7} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthM7} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayM7} </h2>
              </div>
            )}
            {identify7 === 'melli7' ? (
              <div className="w-1/6">
                <h2 className="alib w-full ">ایرانی</h2>
              </div>
            ) : (
              <div className="w-1/6">
                <h2 className="alib w-full ">
                  {birthcount1}
                  {'ی'}
                </h2>
              </div>
            )}
          </div>
        )}

        {age8 && (
          <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
            <h2 className="alib w-1/6 ">{age8} </h2>
            <div className="flex flex-row justify-center gap-2 w-1/6 ">
              <h2 className="alib "> {latinName8} </h2>
              <h2 className="alib "> {family8} </h2>
            </div>
            <h2 className="alib w-1/6 ">
              {' '}
              {sex8 === 'MR' ? 'آقـا' : 'بانـو'}{' '}
            </h2>
            {identify8 === 'melli8' ? (
              <h2 className="alib w-1/6"> {melliCode8} </h2>
            ) : (
              <h2 className="alib w-1/6"> {passNum8} </h2>
            )}
            {identify8 === 'melli8' ? (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearI8} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthI8} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayI8} </h2>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearM8} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthM8} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayM8} </h2>
              </div>
            )}
            {identify8 === 'melli8' ? (
              <div className="w-1/6">
                <h2 className="alib w-full ">ایرانی</h2>
              </div>
            ) : (
              <div className="w-1/6">
                <h2 className="alib w-full ">
                  {birthcount1}
                  {'ی'}
                </h2>
              </div>
            )}
          </div>
        )}

        {age9 && (
          <div className="title flex flex-row-reverse w-full h-10 p-2 justify-between bg-slate-200">
            <h2 className="alib w-1/6 ">{age9} </h2>
            <div className="flex flex-row justify-center gap-2 w-1/6 ">
              <h2 className="alib "> {latinName9} </h2>
              <h2 className="alib "> {family9} </h2>
            </div>
            <h2 className="alib w-1/6 ">
              {' '}
              {sex9 === 'MR' ? 'آقـا' : 'بانـو'}{' '}
            </h2>
            {identify9 === 'melli9' ? (
              <h2 className="alib w-1/6"> {melliCode9} </h2>
            ) : (
              <h2 className="alib w-1/6"> {passNum9} </h2>
            )}
            {identify9 === 'melli9' ? (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearI9} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthI9} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayI9} </h2>
              </div>
            ) : (
              <div className="flex flex-row justify-center w-1/6">
                <h2 className="alib "> {yearM9} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {monthM9} </h2>
                <h2 className="alib mx-1"> {'/'} </h2>
                <h2 className="alib "> {dayM9} </h2>
              </div>
            )}
            {identify9 === 'melli9' ? (
              <div className="w-1/6">
                <h2 className="alib w-full ">ایرانی</h2>
              </div>
            ) : (
              <div className="w-1/6">
                <h2 className="alib w-full ">
                  {birthcount1}
                  {'ی'}
                </h2>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="ticketInfo flex flex-row justify-center items-center my-3">
        <h2 className="alib mr-2 text-blue-500 text-xl">اطلاع رسانی سفر</h2>
        <Image src={'/icon/phone1.svg'} alt="" width={30} height={30} />
      </div>
      <div className="callInfo flex flex-col w-full bg-slate-300 m-2 p-2 rounded-lg">
        <div className="info flex flex-row justify-center items-center my-2">
          <h2 className="alib text-yellow-400 bg-slate-900 p-2 rounded-lg">
            {' '}
            : اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود{' '}
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="phone flex flex-row-reverse my-2">
            <h2 className="alib"> : شماره موبایل </h2>
            <h2 className="alib mr-2">09120000000</h2>
          </div>
          <div className="email flex flex-row-reverse">
            <h2 className="alib"> : ایمیل </h2>
            <h2 className="alib mr-2">test@gmail.com</h2>
          </div>
        </div>
      </div>
      <div className="price w-full flex flex-col bg-slate-300 m-2 p-2 rounded-lg">
        <div className="ticketInfo flex flex-row justify-center items-center my-2">
          <h2 className="alib mr-2 text-blue-500 text-xl">
            {' '}
            مبلغ قابل پرداخت{' '}
          </h2>
          <Image src={'/icon/cash.svg'} alt="" width={30} height={30} />
        </div>
        <div className="flex flex-row-reverse justify-center items-center w-1/5 rounded-lg px-10 py-3 mx-auto bg-red-500">
          <h2 className="alib text-xl">
            {Number(
              adult * (Math.floor(AdultTotalPriceG / 1000) * 1000) +
                child * (Math.floor(ChildTotalPriceG / 1000) * 1000) +
                infant *
                  (Math.floor((InfantTotalPriceG * 1.18943) / 1000) * 1000)
            ) +
              Number(
                adult * (Math.floor(AdultTotalPriceR / 1000) * 1000) +
                  child * (Math.floor(ChildTotalPriceR / 1000) * 1000) +
                  infant *
                    (Math.floor((InfantTotalPriceR * 1.18943) / 1000) * 1000)
              )}
          </h2>
          <h2 className="alib mr-2">ریال</h2>
        </div>
        <Link
          href={'https://www.behpardakht.com/'}
          className="alib px-10 py-3 my-5 text-white text-xl w-1/5 rounded-lg mx-auto bg-blue-500"
        >
          پرداخت آنلاین
        </Link>
      </div>
      {/* <button 
      onClick={()=>{
        history.push("https://www.behpardakht.com/")
      }} 
      className="alib px-10 py-3 my-5 text-white text-xl w-1/5 rounded-lg mx-auto bg-blue-500">
        پرداخت آنلاین
      </button> */}
    </div>
  )
}

export default Sale
