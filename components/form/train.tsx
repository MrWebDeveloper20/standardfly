'use client'
import { FormEvent, useState } from 'react'
import { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import DatePicker from 'react-multi-date-picker'
import { NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'
import Link from 'next/link'
import TrainDropDown from './trainDropDown'

export default function TrainForm(props: any) {
  const [value, setValue] = useState(new Date())
  function handleChange(value: any) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    if (value instanceof DateObject) value = value.toDate()
    setValue(value)
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  const [date, setDate] = useState()
  const handleDate = (event: any) => {
    console.log(event.target.ariaLabel)
    console.log(event)
    setDate((date) => event.target.value)
  }

  const [way, setWay] = useState('oneWay')
  const handleWay = (event: any) => {
    console.log(event.target.value)
    setWay((way) => event.target.value)
  }

  return (
    <form
      onSubmit={onSubmit}
      action="/train"
      className="flex flex-col lg:w-5/6 2xl:w-3/4"
    >
      <div className="taskTitle lg:w-full flex max-sm:flex-col lg:flex-row-reverse p-5 justify-center  items-center w-full">
        <div className="taskTitle1 lg:w-1/2 max-sm:w-full flex flex-row justify-center py-2">
          <select
            className="text-center ring-1 ring-black rounded-lg max-sm:p-0 lg:p-2 max-sm:mx-1 lg:mx-5 alib max-sm:text-sm lg:text-xl justify-items-end hover:animate-pulse hover:text-purple-700"
            name="customerTask"
            id="customerTask"
            defaultValue={'دربست نمیخوام'}
          >
            <option value="special">دربست میخوام</option>
            <option value="normal">دربست نمیخوام</option>
          </select>
          <select
            onChange={() => handleWay(event)}
            className="text-center ring-1 ring-black rounded-lg max-sm:p-0 lg:p-2 max-sm:mx-1 lg:mx-5 alib max-sm:text-sm lg:text-xl justify-items-end hover:animate-pulse hover:text-purple-700"
            name="travelSide"
            id="travelSide"
            defaultValue={'یک طرفه'}
          >
            <option value="oneWay">یک طرفه</option>
            <option value="twoWay">دو طرفه</option>
          </select>
        </div>
        <div className="taskTitle2 lg:w-1/2 max-sm:w-full flex flex-row justify-center py-2">
          <select
            className="text-center ring-1 ring-black rounded-lg max-sm:p-0 lg:p-2 max-sm:mx-1 lg:mx-5 alib max-sm:text-sm lg:text-xl justify-items-end hover:animate-pulse hover:text-purple-700"
            name="travelSide"
            id="travelSide"
            defaultValue={'مسافرین عادی'}
          >
            <option value="normalPassenger">مسافرین عادی</option>
            <option value="mr">ویژه برادران</option>
            <option value="mrs">ویژه خواهران</option>
          </select>
          <select
            className="text-center ring-1 ring-black rounded-lg max-sm:p-0 lg:p-2 max-sm:mx-1 lg:mx-5 alib max-sm:text-sm lg:text-xl max-sm:items-center lg:justify-items-end hover:animate-pulse hover:text-purple-700"
            name="TrainClass"
            id="TrainClass"
            defaultValue={'حمل خودرو نمیخوام'}
          >
            <option value="whitoutCarTransport">حمل خودرو نمیخوام</option>
            <option value="carTransport">حمل خودرو میخوام</option>
          </select>
        </div>
      </div>

      <div className="taskSelect flex max-sm:flex-col lg:flex-row-reverse max-sm:pb-5 justify-items-center items-center w-full 2xl:flex-row-reverse 2xl:w-full 2xl:justify-around lg:justify-center 2xl:items-center">
        <div className="fromTo flex max-sm:flex-col lg:flex-row-reverse max-sm:p-0 lg:p-1 lg:m-0 lg:w-full max-sm:w-5/6">
          <input
            type="text"
            className="alib text-right max-sm:my-2 max-sm:p-1 lg:p-3  max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full hover:bg-cyan-200 focus:bg-green-300"
            name="from"
            placeholder="مبدا (شهر)"
          />
          <input
            type="text"
            className="alib text-right max-sm:my-2 max-sm:p-1 lg:p-3  max-sm:rounded-lg lg:rounded-l-lg ring-1 ring-black max-sm:w-full hover:bg-cyan-200 focus:bg-green-300"
            name="to"
            placeholder="مقصد (شهر)"
          />
        </div>
        <div className="date lg:text-sm flex max-sm:flex-col lg:flex-row-reverse max-sm:p-0 lg:p-1 lg:m-0 lg:w-full max-sm:w-5/6 ">
          {way === 'oneWay' && (
            <DatePicker
              onChange={() => handleDate(event)}
              className="bg-dark"
              locale={persian_fa}
              calendar={persian}
              range={false}
              rangeHover={true}
              dateSeparator=">"
              placeholder="تاریخ رفت"
              monthYearSeparator="||"
              hideOnScroll
              numberOfMonths={1}
              style={{
                backgroundColor: 'white',
                height: '40px',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '22px 44px',
                border: '1px solid black',
                direction: 'rtl',
                fontFamily: 'alib',
              }}
            />
          )}
          {way === 'twoWay' && (
            <DatePicker
              onChange={() => handleDate(event)}
              className="bg-dark"
              locale={persian_fa}
              calendar={persian}
              range={true}
              rangeHover={true}
              dateSeparator=" برگشت : "
              placeholder=" انتخاب بازه تاریخ رفت و برگشت"
              monthYearSeparator="||"
              hideOnScroll
              numberOfMonths={2}
              style={{
                backgroundColor: 'white',
                height: '40px',
                borderRadius: '8px',
                fontSize: '16px',
                padding: '23px 14px',
                border: '1px solid black',
                direction: 'rtl',
                fontFamily: 'alib',
                width: '280px',
                justifyContent: 'center',
              }}
            />
          )}
        </div>
        <div className="passengerNumber flex flex-row-reverse max-sm:py-1 max-sm:my-3 max-sm:w-5/6 ring-1 ring-black max-sm:mx-4 lg:px-5 lg:mx-10 max-sm:p-1 lg:p-2 rounded-lg justify-center">
          <TrainDropDown />
        </div>
        <Link href={'/train'}>
          <input
            className="alib lg:mr-3 max-sm:text-sm lg:text-xl max-sm:w-5/6 lg:px-4 px-10 max-sm:my-4 bg-orange-500 max-lg:w-1/2 p-2 rounded-lg outline text-center"
            type="submit"
            value="جستجو"
          />
        </Link>
      </div>
    </form>
  )
}
