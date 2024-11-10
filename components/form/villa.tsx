'use client'
import { FormEvent, useState } from 'react'
import { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import DatePicker from 'react-multi-date-picker'
import Link from 'next/link'

export default function VillaForm(props: any) {
  const [value, setValue] = useState(new Date())
  function handleChange(value: any) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    if (value instanceof DateObject) value = value.toDate()
    setValue(value)
  }

  const [innerOuter, setInnerOuter] = useState('inner')
  const handleInnerOuter = (event: any) => {
    console.log(event.target.value)
    setInnerOuter((innerOuter) => event.target.value)
  }

  const [way, setWay] = useState('oneWay')
  const handleWay = (event: any) => {
    console.log(event.target.value)
    setWay((way) => event.target.value)
  }

  const [flightType, setFlightType] = useState('economy')
  const handleFlightType = (event: any) => {
    console.log(event.target.value)
    setFlightType((flightType) => event.target.value)
  }

  const [from, setFrom] = useState('')
  const handleFrom = (event: any) => {
    console.log(event.target.value)
    setFrom((from) => event.target.value)
  }

  const [to, setTo] = useState('')
  const handleTo = (event: any) => {
    console.log(event.target.value)
    setTo((to) => event.target.value)
  }

  const [date, setDate] = useState()
  const handleDate = (event: any) => {
    console.log(event.target.ariaLabel)
    console.log(event)
    setDate((date) => event.target.value)
  }

  const [passNum, setPassNum] = useState(1)
  const handleIncrease = (passNum: number) => {
    setPassNum(passNum + 1)
  }

  const handleDecrease = (passNum: number) => {
    if (passNum > 1) {
      setPassNum(passNum - 1)
    } else {
      setPassNum(1)
    }
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
      action="/flight"
      className="flex flex-col lg:w-5/6 2xl:w-3/4"
    >
      <div className="taskSelect my-5 flex max-sm:flex-col lg:flex-row-reverse max-sm:pb-5 justify-items-center items-center w-full 2xl:flex-row-reverse 2xl:w-full 2xl:justify-around lg:justify-center 2xl:items-center">
        <div className="fromTo flex max-sm:flex-col lg:flex-row-reverse max-sm:p-0 lg:p-1 lg:m-0 lg:w-full max-sm:w-5/6">
          <input
            onChange={() => handleTo(event)}
            type="text"
            className="alib text-right max-sm:my-2 max-sm:p-1 lg:p-3  max-sm:rounded-lg lg:rounded-lg ring-1 ring-black max-sm:w-full lg:w-full"
            name="to"
            placeholder="مقصد یا نوع اقامتگاه"
          />
        </div>
        <div className="date lg:text-sm flex max-sm:flex-col lg:flex-row-reverse max-sm:p-0 lg:p-1 lg:m-0 lg:w-full max-sm:w-5/6">
          <DatePicker
            onChange={() => handleDate(event)}
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
              padding: '22px 44px',
              border: '1px solid black',
              direction: 'rtl',
              fontFamily: 'alib',
            }}
          />
        </div>
        <div className="passengerNumber flex flex-row-reverse max-sm:py-1 max-sm:my-3 max-sm:w-5/6 ring-1 ring-black max-sm:mx-4 lg:px-5 lg:mx-10 max-sm:p-1 lg:p-2 rounded-lg justify-center">
          <button onClick={() => handleIncrease(passNum)}>
            <div className="flex justify-center items-center w-7 h-7 bg-green-400 rounded-xl mx-2">
              <span className="alib max-sm:text-sm lg:text-3xl ">+</span>
            </div>
          </button>
          <div className="mx-5 flex flex-row-reverse">
            <span className="alib max-sm:text-sm lg:text-xl" defaultValue={1}>
              {passNum}
            </span>
            <span className="alib max-sm:text-sm lg:text-xl mx-3">نفر</span>
          </div>

          <button onClick={() => handleDecrease(passNum)}>
            <div className="flex justify-center items-center w-7 h-7 bg-red-400 rounded-xl mx-2">
              <span className="alib max-sm:text-sm lg:text-3xl ">-</span>
            </div>
          </button>
        </div>

        <Link href={'villa'}>
          <input
            className="alib lg:mr-3 max-sm:text-sm lg:text-xl max-sm:w-5/6 lg:px-4 px-10 max-sm:my-4 bg-orange-500 max-lg:w-1/2 p-2 rounded-lg ring-1 ring-black text-center"
            type="submit"
            value="جستجو"
          />
        </Link>
      </div>
    </form>
  )
}
