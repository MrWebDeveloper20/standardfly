'use client'

import { ChangeEvent, useState } from 'react'
import { Tour } from '@/types'
import { editTourAction } from '@/actions'

import { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import DatePicker from 'react-multi-date-picker'

interface TourEditFormProps {
  tour: Tour
}

export default function TourEditForm(props: TourEditFormProps) {
  const [date, setDate] = useState()
  const handleDate = (event: any) => {
    console.log(event.target.ariaLabel)
    console.log(event)
    setDate((date) => event.target.value)
  }

  const [tour, setTour] = useState(props.tour)

  // Handle Change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTour({ ...tour, [e.target.name]: e.target.value })
  }

  return (
    <form action={editTourAction.bind(null, tour)}>
      <div className="flex flex-col gap-3 max-w-xl mx-auto bg-slate-300 p-3 rounded">
        <h3 className="font-bold text-right">ویرایش تور </h3>

        <div className="flex justify-between items-center gap-5 alib">
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={tour.name}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-2/3 text-right"
          />
          <label className="" htmlFor="name">
            : عنوان تور
          </label>
        </div>

        <div className="flex justify-between items-center gap-5 alib">
          <input
            type="text"
            name="price"
            id="price"
            defaultValue={tour.price}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-2/3 text-right"
          />
          <label className="" htmlFor="price">
            : قیمت تور
          </label>
        </div>

        <div className="flex justify-between items-center gap-5 alib">
          <input
            type="number"
            name="duration"
            id="duration"
            defaultValue={tour.duration}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-2/3 text-right"
          />
          <label className="" htmlFor="duration">
            : مدت تور
          </label>
        </div>

        <div className="flex justify-between items-center gap-5 alib">
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
              padding: '22px 44px',
              border: '1px solid black',
              direction: 'rtl',
              fontFamily: 'alib',
            }}
          />
        </div>

        <div className="flex justify-between items-center gap-5 alib">
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
              padding: '22px 44px',
              border: '1px solid black',
              direction: 'rtl',
              fontFamily: 'alib',
            }}
          />
        </div>

        <div className="flex justify-between items-center gap-5 alib">
          <input
            type="text"
            name="planName"
            id="planName"
            defaultValue={tour.planName}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-2/3 text-right"
          />
          <label className="" htmlFor="planName">
            : روز ...
          </label>
        </div>

        <div className="flex justify-between items-center gap-5 alib">
          <input
            type="text"
            name="planDescription"
            id="planDescription"
            defaultValue={tour.planDescription}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-2/3 text-right"
          />
          <label className="" htmlFor="planDescription">
            : توضیحات
          </label>
        </div>

        <div className="flex justify-between items-center gap-5 alib">
          <input
            type="text"
            name="nightPlan"
            id="nightPlan"
            defaultValue={tour.nightPlan}
            onChange={(e) => handleChange(e)}
            className="border rounded p-2 w-2/3 text-right"
          />
          <label className="" htmlFor="nightPlan">
            : توقف شب
          </label>
        </div>

        <button
          type="submit"
          className="rounded bg-green-500 p-2 text-white font-bold"
        >
          Update
        </button>
      </div>
    </form>
  )
}
