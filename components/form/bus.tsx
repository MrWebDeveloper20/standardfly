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

export default function BusForm(props: any) {
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

  return (
    <form
      onSubmit={onSubmit}
      action="/bus"
      className="flex flex-col lg:w-5/6 2xl:w-3/4"
    >
      <div className="taskSelect my-5 flex max-sm:flex-col lg:flex-row-reverse max-sm:pb-5 justify-items-center items-center w-full 2xl:flex-row-reverse 2xl:w-full 2xl:justify-around lg:justify-center 2xl:items-center">
        <div className="fromTo flex max-sm:flex-col lg:flex-row-reverse max-sm:p-0 lg:p-1 lg:m-0 lg:w-full max-sm:w-5/6">
          <input
            type="text"
            className="alib text-right ring-1 ring-black max-sm:my-2 max-sm:p-1 lg:p-3  max-sm:rounded-lg lg:rounded-r-lg max-sm:w-full hover:bg-cyan-200 focus:bg-green-300"
            name="from"
            placeholder="مبدا (شهر)"
          />
          <input
            type="text"
            className="alib text-right ring-1 ring-black max-sm:my-2 max-sm:p-1 lg:p-3  max-sm:rounded-lg lg:rounded-l-lg max-sm:w-full hover:bg-cyan-200 focus:bg-green-300"
            name="to"
            placeholder="مقصد (شهر)"
          />
        </div>
        <div className="date lg:text-sm flex max-sm:flex-col lg:flex-row-reverse max-sm:p-0 lg:p-1 lg:m-0 lg:w-full max-sm:w-5/6">
          <DatePicker
            className="bg-dark"
            locale={persian_fa}
            calendar={persian}
            range={true}
            rangeHover={true}
            dateSeparator=">"
            placeholder="تاریخ"
            monthYearSeparator="||"
            hideOnScroll
            style={{
              backgroundColor: 'white',
              height: '40px',
              borderRadius: '8px',
              fontSize: '16px',
              padding: '24px 44px',
              border: '1px solid black',
              direction: 'rtl',
              fontFamily: 'alib',
            }}
          />
        </div>
        {/* <div className='passengerNumber flex ring-1 ring-black flex-row-reverse max-sm:py-1 max-sm:my-3 max-sm:w-5/6 max-sm:mx-4 lg:px-5 lg:mx-10 max-sm:p-1 lg:p-2 rounded-lg justify-center'>
          <span className='alib max-sm:text-sm lg:text-xl mx-3' defaultValue={1}>1</span>
          <span className='alib max-sm:text-sm lg:text-xl '>مسافر</span>
        </div> */}
        <Link className="lg:w-full lg:mx-2" href={'/bus'}>
          <input
            className="alib lg:w-full lg:mr-3 max-sm:text-sm lg:text-xl max-sm:w-5/6 lg:px-4 px-10 max-sm:my-4 bg-orange-500 max-lg:w-1/2 p-2 rounded-lg outline text-center"
            type="submit"
            value="جستجو"
          />
        </Link>
      </div>
    </form>
  )
}
