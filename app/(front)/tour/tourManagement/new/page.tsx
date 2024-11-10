'use client'

import { createTour } from '@/actions'
import { useState } from 'react'
import Image from 'next/image'

import { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import DatePicker from 'react-multi-date-picker'

export default function CountryCreatePage() {
  const [date, setDate] = useState()
  const handleDate = (event: any) => {
    console.log(event.target.ariaLabel)
    console.log(event)
    setDate((date) => event.target.value)
  }

  return (
    <form className="flex  justify-center items-center" action={createTour}>
      <div className="alib flex flex-col justify-center items-center w-96 gap-3 max-w-xl mx-auto bg-slate-300 p-5 ">
        <h3 className="alib font-bold m-3">افزودن تور </h3>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="name"
            id="name"
            className="w-3/4 h-10 rounded-lg text-right pr-3"
          />
          <label className="" htmlFor="name">
            : عنوان تور
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="price"
            id="price"
            className="w-3/4 h-10 rounded-lg text-right pr-3"
          />
          <label className="" htmlFor="price">
            : قیمت تور
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="number"
            name="duration"
            id="duration"
            className="w-3/4 h-10 rounded-lg text-right pr-3"
          />
          <label className="" htmlFor="duration">
            : مدت تور
          </label>
        </div>

        <div className="flex flex-row-reverse justify-between items-center text-right w-full mx-auto gap-4">
          <label className="" htmlFor="startDate">
            : شروع
          </label>
          <DatePicker
            onChange={() => handleDate(event)}
            className="bg-dark"
            locale={persian_fa}
            calendar={persian}
            range={false}
            name="startDate"
            rangeHover={true}
            dateSeparator=">"
            placeholder=" تاریخ شروع"
            monthYearSeparator="||"
            hideOnScroll
            numberOfMonths={1}
            style={{
              backgroundColor: 'white',
              height: '40px',
              borderRadius: '8px',
              fontSize: '16px',
              padding: '22px 34px',
              border: '1px solid black',
              direction: 'rtl',
              fontFamily: 'alib',
            }}
          />
        </div>

        <div className="flex flex-row-reverse justify-between items-center text-right w-full mx-auto gap-4">
          <label className="" htmlFor="startDate">
            : پایان
          </label>
          <DatePicker
            onChange={() => handleDate(event)}
            className="bg-dark"
            locale={persian_fa}
            calendar={persian}
            range={false}
            name="endDate"
            rangeHover={true}
            dateSeparator=">"
            placeholder=" تاریخ پایان"
            monthYearSeparator="||"
            hideOnScroll
            numberOfMonths={1}
            style={{
              backgroundColor: 'white',
              height: '40px',
              borderRadius: '8px',
              fontSize: '16px',
              padding: '22px 34px',
              border: '1px solid black',
              direction: 'rtl',
              fontFamily: 'alib',
            }}
          />
        </div>

        <div className="flex justify-between items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="planName"
            id="planName"
            className="w-3/4 h-10 rounded-lg text-right pr-3"
          />
          <label className="" htmlFor="planName">
            : روز
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="planDescription"
            id="planDescription"
            className="w-3/4 h-10 rounded-lg text-right pr-3"
          />
          <label className="" htmlFor="planDescription">
            : توضیحات
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="nightPlan"
            id="nightPlan"
            className="w-3/4 h-10 rounded-lg text-right pr-3"
          />
          <label className="" htmlFor="nightPlan">
            : توقف شب
          </label>
        </div>

        {/* <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="file"
            accept="image/*"
            name="image"
            id="image"
            {...register("imageUrl")}
            onChange={handleFileChange}
            className="w-3/4 h-10 rounded-lg text-right pr-3"
          />
          <label className="" htmlFor="image">
            :   تصویر
          </label>
        </div> */}

        <button type="submit" className="rounded bg-green-500 p-3 mx-3 w-full">
          افزودن
        </button>
      </div>
    </form>
  )
}
