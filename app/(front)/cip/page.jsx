'use client'
import React from 'react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Modal from '@/components/modal/page'
import Description from './desc'

import { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import DatePicker from 'react-multi-date-picker'

const CRP = () => {
  const [isLoading, setLoading] = useState(false)

  let [adultNum, setAdultNum] = useState(1)
  const adultIncrease = (adultNum) => {
    if (adultNum < 9 - childNum - babyNum) {
      setAdultNum(adultNum + 1)
    } else {
      setAdultNum(9 - childNum - babyNum)
    }
  }
  const adultDecrease = (adultNum) => {
    if (adultNum > 1) {
      setAdultNum(adultNum - 1)
    } else {
      setAdultNum(1)
    }
  }
  const [childNum, setChildNum] = useState(0)
  const childIncrease = (childNum) => {
    switch (adultNum) {
      case 1:
        if (childNum < 3 && childNum + babyNum < 3) {
          setChildNum(childNum + 1)
        } else {
          setChildNum(3 - babyNum)
        }
        break
      case 2:
        if (childNum < 6 && childNum + babyNum < 6) {
          setChildNum(childNum + 1)
        } else {
          setChildNum(6 - babyNum)
        }
        break
      default:
        if (
          childNum < 6 &&
          childNum + babyNum < 6 &&
          adultNum + childNum + babyNum < 9
        ) {
          setChildNum(childNum + 1)
        } else {
          setChildNum(9 - adultNum - babyNum)
        }
        break
    }
  }
  const childDecrease = (childNum) => {
    if (childNum > 0) {
      setChildNum(childNum - 1)
    } else {
      setChildNum(0)
    }
  }
  const [babyNum, setBabyNum] = useState(0)
  const babyIncrease = (babyNum) => {
    switch (adultNum) {
      case 1:
        if (babyNum < 3 && babyNum + childNum < 3) {
          setBabyNum(babyNum + 1)
        } else {
          setBabyNum(3 - childNum)
        }
        break
      case 2:
        if (babyNum < 6 && babyNum + childNum < 6) {
          setBabyNum(babyNum + 1)
        } else {
          setBabyNum(6 - childNum)
        }
        break
      default:
        if (
          babyNum < 6 &&
          childNum + babyNum < 6 &&
          adultNum + childNum + babyNum < 9
        ) {
          setBabyNum(babyNum + 1)
        } else {
          setBabyNum(9 - adultNum - childNum)
        }
        break
    }
  }
  const babyDecrease = (babyNum) => {
    if (babyNum > 0) {
      setBabyNum(babyNum - 1)
    } else {
      setBabyNum(0)
    }
  }

  const [passNum, setPassNum] = useState(adultNum + childNum + babyNum)
  const Pass = (adultNum, childNum, babyNum) => {
    if (passNum < 9) {
      setPassNum(adultNum + childNum + babyNum)
    } else {
      setAdultNum(adultNum)
      setChildNum(childNum)
      setBabyNum(babyNum)
      setPassNum(9)
    }
  }

  // Create a ref for the element to detect outside clicks
  const ref = useRef()
  // Our dropdown's state
  const [isOpenDropdown, setOpenDropdown] = useState(false)
  // Call hook passing in the ref and a function to call on outside click

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (ref && isOpenDropdown) {
        setOpenDropdown(false)
      }
    }
    // When user click any place in document
    document.addEventListener('click', handleClickOutside)
    return () => {
      // Clean it on rerender
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref, isOpenDropdown, setOpenDropdown])

  // const CustomContext = useContext(CustomContext)
  const [frommm, setFrommm] = useState('')

  const [value, setValue] = useState(new Date())
  function handleChange(value) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    if (value instanceof DateObject) value = value.toDate()
    setValue(value)
  }

  const handleDecrease = (passNum) => {
    if (passNum > 1) {
      setPassNum(passNum - 1)
    } else {
      setPassNum(1)
    }
  }

  const [Cdate, setCDate] = useState(new Date().toLocaleDateString('fa-FA'))
  const [date, setDate] = useState(new Date())
  const [Cdate2, setCDate2] = useState(new Date().toLocaleDateString('fa-FA'))
  const [date2, setDate2] = useState(new Date())
  const [startDate, setStartDate] = useState({})
  const [startDateDay, setStartDateDay] = useState()
  const [startDateMonthNum, setStartDateMonthNum] = useState()
  const [startDateMonthName, setStartDateMonthName] = useState()
  const [startDateYear, setStartDateYear] = useState()
  const [startDateDay2, setStartDateDay2] = useState()
  const [startDateMonthNum2, setStartDateMonthNum2] = useState()
  const [startDateMonthName2, setStartDateMonthName2] = useState()
  const [startDateYear2, setStartDateYear2] = useState()

  const handleChangeDate = (range) => {
    const [startDate, endDate] = range
    setStartDate(startDate)

    setEndDate(endDate)
  }

  const [child, setChild] = useState('')
  const childParent = (childData) => {
    setChild(childData)
  }

  const router = useRouter()

  if (isLoading) return <Modal />

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="banner my-2 rounded-lg">
        <Image
          className="rounded-lg"
          src={'/images/cip.jpeg'}
          alt=""
          width={1300}
          height={300}
        />
      </div>

      <form
        action=""
        className="flex flex-row-reverse justify-between items-center w-full lg:h-24 bg-slate-900 rounded-lg lg:-mt-5"
      >
        <div className="airport flex flex-col max-sm:justify-center lg:items-end max-sm:h-fit lg:h-20 lg:w-1/5 max-sm:w-full lg:mr-3">
          <label htmlFor="go" className="alir fontcolor text-right lg:mr-2 ">
            {' '}
            انتخاب فرودگاه{' '}
          </label>
          <select
            className="text-right max-sm:my-2 max-sm:p-2 lg:p-3 rounded-lg lg:mt-1"
            name="airport"
            id="airport"
          >
            <option value="">انتخاب </option>
            <option value="">فرودگاه امام خمینی (ره)</option>
            <option value="">فرودگاه مهرآباد</option>
            <option value="">فرودگاه کیش</option>
            <option value="">فرودگاه مشهد</option>
            <option value="">فرودگاه اصفهان</option>
            <option value="">فرودگاه رشت</option>
            <option value="">فرودگاه اهواز</option>
            <option value="">فرودگاه تبریز</option>
            <option value="">فرودگاه کرمانشاه</option>
            <option value="">فرودگاه بین المللی دبی</option>
          </select>
        </div>
        <div className="flightType flex flex-col max-sm:justify-center lg:items-end max-sm:h-fit lg:h-20 lg:w-1/5 max-sm:w-full">
          <label htmlFor="go" className="alir fontcolor text-right lg:mr-2 ">
            {' '}
            نوع پرواز / نوع سفر{' '}
          </label>
          <select
            className=" text-right max-sm:my-2 max-sm:p-2 lg:p-3 rounded-lg lg:mt-1"
            name="type"
            id="type"
          >
            <option value="">...</option>
            <option value="">پرواز بین المللی - ورودی</option>
            <option value="">پرواز بین المللی - خروجی</option>
            <option value="">پراز داخلی - ورودی</option>
            <option value="">پراز داخلی - خروجی</option>
          </select>
        </div>
        <div className="date flex flex-col max-sm:justify-center lg:items-end max-sm:h-fit lg:h-20 lg:w-1/5 max-sm:w-full">
          <label htmlFor="go" className="alir fontcolor text-right lg:mr-2 ">
            {' '}
            تاریخ{' '}
          </label>
          <DatePicker
            required={true}
            value={''}
            numberOfMonths={2}
            // placeholder="تاریخ رفت"
            monthYearSeparator="||"
            onChange={(date) => {
              // onChange(date?.isValid ? date : "");
              // console.log('uuuuuuuuuuu',date)
              // console.log('uuuuuuuuuuuday',date.day)
              setStartDateDay(date.day)
              // console.log('uuuuuuuuuuuMName',date.month.name)
              setStartDateMonthName(date.month.name)
              // console.log('uuuuuuuuuuu-mmNum',date.month.number)
              setStartDateMonthNum(date.month.number)
              // console.log('uuuuuuuuuuumy',date.year)
              setStartDateYear(date.year)
            }}
            format={'YYYY/MM/DD'}
            locale={persian_fa}
            calendar={persian}
            // calendarPosition="bottom-right"
            style={{
              backgroundColor: 'white',
              // height: '45px',
              borderRadius: '8px',
              fontSize: '16px',
              padding: '24px 4px',
              border: '1px solid black',
              direction: 'rtl',
              fontFamily: 'alir',
              width: '220px',
              height: '50px',
              textAlign: 'center',
            }}
          />
        </div>

        <div className="passDrop flex flex-col max-sm:justify-center lg:items-end max-sm:h-fit lg:h-20 lg:w-1/5 max-sm:w-full">
          <label htmlFor="pass" className="alir fontcolor text-right lg:mr-2">
            {' '}
            تعداد مسافر{' '}
          </label>
          <div className="pass max-sm:w-full max-sm:p-2 lg:w-full flex justify-center items-center rounded-lg bg-white">
            {/* <FlightDropDown /> */}
            <div ref={ref} className="menu relative z-50">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  setOpenDropdown(!isOpenDropdown)
                }}
              >
                <div className="flex flex-row px-14 py-[10px]">
                  <h2 className="alir text-lg">مسافر</h2>
                  <h2 className="alir text-lg px-2">
                    {adultNum + childNum + babyNum < 10
                      ? adultNum + childNum + babyNum
                      : 9}
                  </h2>
                </div>
              </button>
              {isOpenDropdown && (
                <div className="dropdown absolute top-12 -right-24 w-72 z-20 bg-gray-100 rounded-xl">
                  <div className="flex flex-row-reverse items-center justify-between pl-2 py-2">
                    <h1 className="alir text-lg px-2">
                      بزرگسال <span className="text-sm">(12 سال به بالا)</span>
                    </h1>
                    <div className="flex flex-row-reverse items-center">
                      <button
                        className="px-3 rounded-full bg-blue-600"
                        onClick={() =>
                          adultIncrease(adultNum, childNum, babyNum)
                        }
                      >
                        +
                      </button>
                      <span className="text-lg px-2">{adultNum}</span>
                      <button
                        className="px-3 rounded-full bg-red-500"
                        onClick={() => adultDecrease(adultNum)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-row-reverse items-center justify-between pl-2 py-3">
                    <h1 className="alir text-lg px-2">
                      کودک <span className="text-sm">( 2 تا 12 سال )</span>
                    </h1>
                    <div className="flex flex-row-reverse items-center">
                      <button
                        className="px-3 rounded-full bg-blue-600"
                        onClick={() => childIncrease(childNum)}
                      >
                        +
                      </button>
                      <span className="text-lg px-2">{childNum}</span>
                      <button
                        className="px-3 rounded-full bg-red-500"
                        onClick={() => childDecrease(childNum)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-row-reverse items-center justify-between pl-2 py-2">
                    <h1 className="alir text-lg px-2">
                      نوزاد <span className="text-sm">( 10 روز تا 2 سال )</span>
                    </h1>
                    <div className="flex flex-row-reverse items-center">
                      <button
                        className="px-3 rounded-full bg-blue-600"
                        onClick={() => babyIncrease(babyNum)}
                      >
                        +
                      </button>
                      <span className="text-lg px-2">{babyNum}</span>
                      <button
                        className="px-3 rounded-full bg-red-500"
                        onClick={() => babyDecrease(babyNum)}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="rule flex flex-col justify-center items-end">
                    <h3 className="alir text-sm text-gray-600 mr-3">
                      {' '}
                      : قوانین{' '}
                    </h3>
                    <p className="alir text-sm text-red-400 py-1 mr-3">
                      حداکثر تعداد مسافران 9 نفر
                    </p>
                    <p className="alir text-sm text-red-400 mr-3 pb-2">
                      به ازای هر بزرگسال حداکثر 3 کودک یا نوزاد
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="search lg:mt-1 w-1/5 mt-3">
          <button
            className="bg-blue-600 alir lg:w-4/5 max-lg:w-full text-xl px-10 py-3 text-white rounded-lg"
            type="submit"
          >
            جستجو
          </button>
        </div>
      </form>

      <div className="desc">
        <Description />
      </div>
    </div>
  )
}

export default CRP
