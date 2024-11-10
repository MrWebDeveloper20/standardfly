'use client'
import { createVisa } from '@/actions'
import { useState } from 'react'

export default function VisaCreatePage() {
  const [date, setDate] = useState()
  const handleDate = (event: any) => {
    console.log(event.target.ariaLabel)
    console.log(event)
    setDate((date) => event.target.value)
  }

  return (
    <form className="flex  justify-center items-center" action={createVisa}>
      <div className="alib flex flex-col justify-center items-center w-96 gap-3 max-w-xl mx-auto bg-slate-300 p-5 ">
        <h3 className="alib font-bold m-3">افزودن ویزا </h3>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="name"
            id="name"
            className="w-2/3 h-10 rounded-lg text-right pr-3"
          />
          <label className="w-1/3" htmlFor="name">
            : نام ویزا
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="latin"
            id="latin"
            className="w-2/3 h-10 rounded-lg text-right pr-3"
          />
          <label className="w-1/3" htmlFor="latin">
            : لاتین
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="number"
            name="startDate"
            id="startDate"
            className="w-2/3 h-10 rounded-lg text-right pr-3"
          />
          <label className="w-1/3" htmlFor="startDate">
            : (روز)شروع
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="number"
            name="endDate"
            id="endDate"
            className="w-2/3 h-10 rounded-lg text-right pr-3"
          />
          <label className="w-1/3" htmlFor="endDate">
            : (روز)پایان
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="price"
            id="price"
            className="w-2/3 h-10 rounded-lg text-right pr-3"
          />
          <label className="w-1/3" htmlFor="price">
            : قیمت ویزا
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="text"
            name="unit"
            id="unit"
            className="w-2/3 h-10 rounded-lg text-right pr-3"
          />
          <label className="w-1/3" htmlFor="unit">
            : واحد پول
          </label>
        </div>

        <div className="flex justify-center items-center text-right w-full mx-auto gap-4">
          <input
            type="file"
            name="image"
            id="image"
            className="w-3/4 h-10 rounded-lg text-right pr-3"
          />
          <label className="" htmlFor="image">
            : عکس
          </label>
        </div>

        <button type="submit" className="rounded bg-green-500 p-3 mx-3 w-full">
          افزودن
        </button>
      </div>
    </form>
  )
}
