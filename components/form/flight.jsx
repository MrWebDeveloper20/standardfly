'use client'
// import { GET } from '@/app/api/availZv/route'
import FlightDropDown from './flightDropDown'
import { FormEvent, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useFormState, useFormStatus } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import Modal from '@/components/modal/page'

// import DropFormInput from './dropFrom'
// import DropFormInput2 from './dropFrom2'

import { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import DatePicker from 'react-multi-date-picker'

export const revalidate = 100

export default function FlightForm(props) {
  const [isLoading, setLoading] = useState(false)
  const [replace, setReplace] = useState(true)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

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

  // const [state, FormAction] = useFormState(FormSubmit, '')
  const { pending } = useFormStatus()

  const [value, setValue] = useState(new Date())
  function handleChange(value) {
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    if (value instanceof DateObject) value = value.toDate()
    setValue(value)
  }

  const [innerOuter, setInnerOuter] = useState('innerFlight')
  const handleInnerOuter = (event) => {
    // console.log(event.target.value)
    setInnerOuter((innerOuter) => event.target.value)
  }

  const [way, setWay] = useState('oneWay')
  const handleWay = (event) => {
    // console.log(event.target.value)
    setWay((way) => event.target.value)
  }

  const [flightType, setFlightType] = useState('economy')
  const handleFlightType = (event) => {
    // console.log(event.target.value)
    setFlightType((flightType) => event.target.value)
  }

  const handleFrom = (event) => {
    // console.log('frrrrom', event.target.value)
    setFrom((from) => event.target.value)
  }

  const handleTo = (event) => {
    // console.log('tttttto', event.target.value)
    setTo((to) => event.target.value)
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

  const [endDate, setEndDate] = useState({})
  const [endDateDay, setEndDateDay] = useState()
  const [endDateMonth, setEndDateMonth] = useState()
  const [endDateYear, setEndDateYear] = useState()

  const handleChangeDate = (range) => {
    const [startDate, endDate] = range
    setStartDate(startDate)

    setEndDate(endDate)
  }

  const [child, setChild] = useState('')
  const childParent = (childData) => {
    setChild(childData)
  }

  const [change, setChange] = useState(true)
  const changeDirect = () => {
    setFrom(to)
    setTo(from)
    setChange((change) => !change)
  }

  const [air, setAir] = useState('')

  const [azz, setAzz] = useState('')
  const [bee, setBee] = useState('')

  const [fromname, setFromname] = useState('')
  const [toname, setToname] = useState('')

  // async function onSubmit(event) {
  //   event.preventDefault()

  //   const formData = new FormData(event.currentTarget)
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })

  //   // Handle response if necessary
  //   const data = await response.json()
  //   // ...
  //   // console.log('data', data)
  // }

  const router = useRouter()

  if (isLoading) return <Modal />

  return (
    <form
      // onSubmit={formSub}
      action={way === 'oneWay' ? '/flight/' : '/flight2/gone'}
      // method="post"
      className="bg-slate-900 flex flex-col justify-center items-center max-sm:h-fit rounded-b-xl lg:w-full 2xl:w-3/4"
    >
      <div className="taskTitle lg:w-full flex flex-row-reverse p-5 justify-center h-fit items-center w-full">
        <select
          onChange={() => handleInnerOuter(event)}
          className="text-slate-700 text-center rounded-lg p-2 max-sm:mx-1 lg:mx-5 alir  max-sm:text-sm lg:text-xl justify-items-end focus:animate-pulse"
          name="customerTask"
          id="customerTask"
          defaultValue={'پرواز داخلی'}
        >
          <option value="innerFlight">پرواز داخلی</option>
          <option value="foreignFlight">پرواز خارجی</option>
        </select>
        <select
          onChange={() => handleWay(event)}
          className="text-slate-700 text-center rounded-lg p-2 max-sm:mx-1 lg:mx-5 alir  max-sm:text-sm lg:text-xl justify-items-end focus:animate-pulse"
          name="travelSide"
          id="travelSide"
          defaultValue={'یک طرفه'}
        >
          <option value="oneWay"> یک طرفه</option>
          <option value="twoWay"> دو طرفه</option>
        </select>

        {innerOuter !== 'innerFlight' && (
          <select
            onChange={() => handleFlightType(event)}
            className="text-slate-700 text-center rounded-lg p-2 max-sm:mx-1 lg:mx-5 alir  max-sm:text-sm lg:text-xl justify-items-end focus:animate-pulse"
            name="flightClass"
            id="flightClass"
            defaultValue={'اکونومی '}
          >
            <option value="economy"> اکونومی</option>
            <option value="premiumEconomy"> پرمیوم اکونومی</option>
            <option value="business"> بیزینس</option>
            <option value="premiumBusiness"> پرمیموم بیزینس</option>
            <option value="first"> فرست</option>
            <option value="premiumFirst"> پرمیموم فرست</option>
          </select>
        )}
      </div>
      <div className="taskSelect flex max-sm:flex-col lg:flex-row-reverse lg:mr-8 max-sm:pb-5 justify-between items-center w-full 2xl:flex-row-reverse 2xl:w-full 2xl:justify-around lg:justify-between 2xl:items-center">
        <div className="com flex lg:flex-row-reverse max-sm:flex-col gap-3 w-full max-sm:h-fit lg:h-13 justify-between">
          <div
            className={`route flex w-2/6 ${
              replace ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className="from1 max-sm:w-full lg:w-1/2 flex flex-col max-sm:justify-center lg:justify-start items-end mt-1">
              <label htmlFor="az" className="fontcolor alir text-right lg:mr-2">
                {replace ? ' مقصد (شهر)' : ' مبدا (شهر)'}
              </label>
              {innerOuter === 'innerFlight' ? (
                <select
                  onChange={(event) => {
                    // console.log('eventttt',event.target.value)
                    switch (event.target.value) {
                      case 'AJK':
                        setFrom('اراک')
                        setAzz('AJK')
                        break
                      case 'OMH':
                        setFrom('ارومیه')
                        setAzz('OMH')
                        break
                      case 'ADU':
                        setFrom('اردبیل')
                        setAzz('ADU')
                        break
                      case 'IFN':
                        setFrom('اصفهان')
                        setAzz('IFN')
                        break
                      case 'AWZ':
                        setFrom('اهواز')
                        setAzz('AWZ')
                        break
                      case 'IIL':
                        setFrom('ایلام')
                        setAzz('IIL')
                        break
                      case 'BND':
                        setFrom('بندرعباس')
                        setAzz('BND')
                        break
                      case 'BUZ':
                        setFrom('بوشهر')
                        setAzz('BUZ')
                        break
                      case 'XBJ':
                        setFrom('بیرجند')
                        setAzz('XBJ')
                        break
                      case 'TBZ':
                        setFrom('تبریز')
                        setAzz('TBZ')
                        break
                      case 'THR':
                        setFrom('تهران')
                        setAzz('THR')
                        break
                      case 'KHD':
                        setFrom('خرم آباد')
                        setAzz('KHD')
                        break
                      case 'RAS':
                        setFrom('رشت')
                        setAzz('RAS')
                        break
                      case 'ZAH':
                        setFrom('زاهدان')
                        setAzz('ZAH')
                        break
                      case 'JWN':
                        setFrom('زنجان')
                        setAzz('JWN')
                        break
                      case 'SRY':
                        setFrom('ساری')
                        setAzz('SRY')
                        break
                      case 'SDG':
                        setFrom('سنندج')
                        setAzz('SDG')
                        break
                      case 'CQD':
                        setFrom('شهرکرد')
                        setAzz('CQD')
                        break
                      case 'SYZ':
                        setFrom('شیراز')
                        setAzz('SYZ')
                        break
                      case 'PGU':
                        setFrom('عسلویه')
                        setAzz('PGU')
                        break
                      case 'GSM':
                        setFrom('قشم')
                        setAzz('GSM')
                        break
                      case 'PYK':
                        setFrom('کرج')
                        setAzz('PYK')
                        break
                      case 'KER':
                        setFrom('کرمان')
                        setAzz('KER')
                        break
                      case 'KSH':
                        setFrom('کرمانشاه')
                        setAzz('KSH')
                        break
                      case 'KIH':
                        setFrom('کیش')
                        setAzz('KIH')
                        break
                      case 'GBT':
                        setFrom('گرگان')
                        setAzz('GBT')
                        break
                      case 'MHD':
                        setFrom('مشهد')
                        setAzz('MHD')
                        break
                      case 'HDM':
                        setFrom('همدان')
                        setAzz('HDM')
                        break
                      case 'YES':
                        setFrom('یاسوج')
                        setAzz('YES')
                        break
                      case 'AZD':
                        setFrom('یزد')
                        setAzz('AZD')
                        break
                      default:
                        break
                    }
                  }}
                  required={true}
                  defaultValue={''}
                  // name="from"
                  // id="from"
                  // key={Math.random() * 100}
                  className="alir text-right max-sm:my-2 max-sm:p-2 lg:p-3 rounded-lg   max-sm:w-full lg:w-full "
                >
                  <option className="text-center" value="">
                    انتخاب شهر
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="AJK"
                    innerText="اراک"
                  >
                    اراک
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OMH"
                  >
                    ارومیه
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ADU"
                  >
                    اردبیل
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="IFN"
                  >
                    اصفهان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="AWZ"
                  >
                    اهواز
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="IIL"
                  >
                    ایلام
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="BND"
                  >
                    بندرعباس
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="BUZ"
                  >
                    بوشهر
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="XBJ"
                  >
                    بیرجند
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="TBZ"
                  >
                    تبریز
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="THR"
                  >
                    تهران
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="KHD"
                  >
                    خرم آباد
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="RAS"
                  >
                    رشت
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ZAH"
                  >
                    زاهدان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="JWN"
                  >
                    زنجان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="SRY"
                  >
                    ساری
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="SDG"
                  >
                    سنندج
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="CQD"
                  >
                    شهرکرد
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="SYZ"
                  >
                    شیراز
                  </option>

                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="PGU"
                  >
                    عسلویه
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="GSM"
                  >
                    قشم
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="PYK"
                  >
                    کرج
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="KER"
                  >
                    کرمان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="KSH"
                  >
                    کرمانشاه
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="KIH"
                  >
                    کیش
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="GBT"
                  >
                    گرگان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="MHD"
                  >
                    مشهد
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="HDM"
                  >
                    همدان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="YES"
                  >
                    یاسوج
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="AZD"
                  >
                    یزد
                  </option>
                </select>
              ) : (
                <select
                  onClick={() => {
                    ChangeFrom(event)
                  }}
                  required={true}
                  defaultValue={''}
                  // name="from"
                  // id="from"
                  // key={Math.random() * 100}
                  className="ali text-right max-sm:my-2 max-sm:p-2 lg:p-3 rounded-lg ring-1 ring-black max-sm:w-full lg:w-full "
                >
                  <option className="text-center" value="">
                    انتخاب شهر
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OIIE"
                  >
                    فرودگاه امام خمینی
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="LTFM"
                  >
                    استانبول
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OMDB"
                  >
                    دبی
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="LTAC"
                  >
                    آنکارا
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="LTBJ"
                  >
                    ازمیر
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="UDYZ"
                  >
                    ایروان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="EGLL"
                  >
                    لندن
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="CYYZ"
                  >
                    تورنتو
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="EDDF"
                  >
                    فرانکفورت
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="LIMC"
                  >
                    میلان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ORBI"
                  >
                    بغداد
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ORNI"
                  >
                    نجف
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="IQ-0028"
                  >
                    کربلا
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OEJN"
                  >
                    جده
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OERK"
                  >
                    ریاض
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OSDI"
                  >
                    دمشق
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OLBA"
                  >
                    بیروت
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ZBAA"
                  >
                    پکن
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="RJTT"
                  >
                    توکیو
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="RKSI"
                  >
                    سئول
                  </option>
                  {/* {air &&
                air.map((a) => (
                  <option
                    key={a._id}
                    // value={a.latin}
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                  >
                    {emptyFrom ? a.name : ''}
                  </option>
                ))} */}
                </select>
              )}
            </div>

            <div
              onClick={() => setReplace(!replace)}
              className="directionArrow flex flex-col lg:justify-center max-sm:items-start lg:items-center lg:mt-2 max-sm:-my-3 lg:mx-1"
            >
              <div className="lg max-sm:hidden">
                <Image
                  src={'/icon/arrowLeftRight.svg'}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className="sm lg:hidden">
                <Image
                  src={'/icon/arrow-down-arrow-up.svg'}
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
            </div>

            <div className="from2 max-sm:w-full lg:w-1/2 flex flex-col max-sm:justify-center lg:justify-start items-end mt-1">
              <label htmlFor="to" className="alir fontcolor text-right lg:mr-2">
                {replace ? ' مبدا (شهر)' : ' مقصد (شهر)'}
              </label>
              {innerOuter === 'innerFlight' ? (
                <select
                  onChange={(event) => {
                    // console.log('eventttt',event.target.value)
                    switch (event.target.value) {
                      case 'AJK':
                        setTo('اراک')
                        setBee('AJK')
                        break
                      case 'OMH':
                        setTo('ارومیه')
                        setBee('OMH')
                        break
                      case 'ADU':
                        setTo('اردبیل')
                        setBee('ADU')
                        break
                      case 'IFN':
                        setTo('اصفهان')
                        setBee('IFN')
                        break
                      case 'AWZ':
                        setTo('اهواز')
                        setBee('AWZ')
                        break
                      case 'IIL':
                        setTo('ایلام')
                        setBee('IIL')
                        break
                      case 'BND':
                        setTo('بندرعباس')
                        setBee('BND')
                        break
                      case 'BUZ':
                        setTo('بوشهر')
                        setBee('BUZ')
                        break
                      case 'XBJ':
                        setTo('بیرجند')
                        setBee('XBJ')
                        break
                      case 'TBZ':
                        setTo('تبریز')
                        setBee('TBZ')
                        break
                      case 'THR':
                        setTo('تهران')
                        setBee('THR')
                        break
                      case 'KHD':
                        setTo('خرم آباد')
                        setBee('KHD')
                        break
                      case 'RAS':
                        setTo('رشت')
                        setBee('RAS')
                        break
                      case 'ZAH':
                        setTo('زاهدان')
                        setBee('ZAH')
                        break
                      case 'JWN':
                        setTo('زنجان')
                        setBee('JWN')
                        break
                      case 'SRY':
                        setTo('ساری')
                        setBee('SRY')
                        break
                      case 'SDG':
                        setTo('سنندج')
                        setBee('SDG')
                        break
                      case 'CQD':
                        setTo('شهرکرد')
                        setBee('CQD')
                        break
                      case 'SYZ':
                        setTo('شیراز')
                        setBee('SYZ')
                        break
                      case 'PGU':
                        setTo('عسلویه')
                        setBee('PGU')
                        break
                      case 'GSM':
                        setTo('قشم')
                        setBee('GSM')
                        break
                      case 'PYK':
                        setTo('کرج')
                        setBee('PYK')
                        break
                      case 'KER':
                        setTo('کرمان')
                        setBee('KER')
                        break
                      case 'KSH':
                        setTo('کرمانشاه')
                        setBee('KSH')
                        break
                      case 'KIH':
                        setTo('کیش')
                        setBee('KIH')
                        break
                      case 'GBT':
                        setTo('گرگان')
                        setBee('GBT')
                        break
                      case 'MHD':
                        setTo('مشهد')
                        setBee('MHD')
                        break
                      case 'HDM':
                        setTo('همدان')
                        setBee('HDM')
                        break
                      case 'YES':
                        setTo('یاسوج')
                        setBee('YES')
                        break
                      case 'AZD':
                        setTo('یزد')
                        setBee('AZD')
                        break
                      default:
                        break
                    }
                  }}
                  required={true}
                  value={bee}
                  // name="to"
                  // id="to"
                  className="alir  text-right max-sm:my-2 max-sm:p-2 lg:p-3 rounded-lg ring-1 ring-black max-sm:w-full lg:w-full "
                >
                  <option className="text-center" value="">
                    انتخاب شهر
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="AJK"
                  >
                    اراک
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OMH"
                  >
                    ارومیه
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ADU"
                  >
                    اردبیل
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="IFN"
                  >
                    اصفهان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="AWZ"
                  >
                    اهواز
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="IIL"
                  >
                    ایلام
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="BND"
                  >
                    بندرعباس
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="BUZ"
                  >
                    بوشهر
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="XBJ"
                  >
                    بیرجند
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="TBZ"
                  >
                    تبریز
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="THR"
                  >
                    تهران
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="KHD"
                  >
                    خرم آباد
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="RAS"
                  >
                    رشت
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ZAH"
                  >
                    زاهدان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="JWN"
                  >
                    زنجان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="SRY"
                  >
                    ساری
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="SDG"
                  >
                    سنندج
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="CQD"
                  >
                    شهرکرد
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="SYZ"
                  >
                    شیراز
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="GBT"
                  >
                    گرگان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="PGU"
                  >
                    عسلویه
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="GSM"
                  >
                    قشم
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="PYK"
                  >
                    کرج
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="KER"
                  >
                    کرمان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="KSH"
                  >
                    کرمانشاه
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="KIH"
                  >
                    کیش
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="GBT"
                  >
                    گرگان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="MHD"
                  >
                    مشهد
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="HDM"
                  >
                    همدان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="YES"
                  >
                    یاسوج
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="AZD"
                  >
                    یزد
                  </option>
                  {/* {air &&
                  air.map((a) => (
                    <option
                      key={a._id}
                      // value={a.latin}
                      className="alir bg-blue-300 text-right max-sm:my-2 max-sm:p-1 lg:p-3 max-sm:rounded-lg lg:rounded-l-lg ring-1 ring-black max-sm:w-full lg:w-full hover:bg-blue-200 focus:bg-blue-300"
                    >
                      {emptyTo ? a.name : ''}
                    </option>
                  ))} */}
                </select>
              ) : (
                <select
                  onClick={() => {
                    ChangeTo(event)
                  }}
                  required={true}
                  value={bee}
                  // name="to"
                  // id="to"
                  className="alir  text-right max-sm:my-2 max-sm:p-2 lg:p-3 rounded-lg ring-1 ring-black max-sm:w-full lg:w-full "
                >
                  <option className="text-center" value="">
                    انتخاب شهر
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OIIE"
                  >
                    فرودگاه امام خمینی
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="LTFM"
                  >
                    استانبول
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OMDB"
                  >
                    دبی
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="LTAC"
                  >
                    آنکارا
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="LTBJ"
                  >
                    ازمیر
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="UDYZ"
                  >
                    ایروان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="EGLL"
                  >
                    لندن
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="CYYZ"
                  >
                    تورنتو
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="EDDF"
                  >
                    فرانکفورت
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="LIMC"
                  >
                    میلان
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ORBI"
                  >
                    بغداد
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ORNI"
                  >
                    نجف
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="IQ-0028"
                  >
                    کربلا
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OEJN"
                  >
                    جده
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OERK"
                  >
                    ریاض
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OSDI"
                  >
                    دمشق
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="OLBA"
                  >
                    بیروت
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="ZBAA"
                  >
                    پکن
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="RJTT"
                  >
                    توکیو
                  </option>
                  <option
                    className="alir text-right max-sm:my-2 max-sm:p-1 lg:p-3 pr-2 max-sm:rounded-lg lg:rounded-r-lg ring-1 ring-black max-sm:w-full lg:w-full "
                    value="RKSI"
                  >
                    سئول
                  </option>
                  {/* {air &&
                  air.map((a) => (
                    <option
                      key={a._id}
                      // value={a.latin}
                      className="alir bg-blue-300 text-right max-sm:my-2 max-sm:p-1 lg:p-3 max-sm:rounded-lg lg:rounded-l-lg ring-1 ring-black max-sm:w-full lg:w-full hover:bg-blue-200 focus:bg-blue-300"
                    >
                      {emptyTo ? a.name : ''}
                    </option>
                  ))} */}
                </select>
              )}
            </div>
          </div>

          <div className="dte lg:mr-1 flex flex-row-reverse max-sm:flex-col lg:justify-between max-sm:justify-between items-center lg:gap-1 max-sm:w-[290px] lg:w-2/6 max-sm:h-48 lg:h-14 max-sm:mt-2">
            <div className="go max-sm:w-[290px] lg:w-[180px] flex flex-col justify-start items-end lg:h-14 max-sm:px-10">
              <label
                htmlFor="go"
                className="alir fontcolor text-right lg:mr-2 pt-[2.5px]"
              >
                {' '}
                تاریخ رفت{' '}
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
                  width: '180px',
                  height: '50px',
                  textAlign: 'center',
                }}
              />
            </div>

            {way === 'twoWay' && (
              <div className="back max-sm:w-[290px] lg:w-[180px] flex flex-col justify-start items-end lg:h-14 max-sm:mb-2 max-sm:px-10">
                <label
                  htmlFor="back"
                  className="alir fontcolor text-right lg:mr-2 pt-[2.5px]"
                >
                  {' '}
                  تاریخ برگشت{' '}
                </label>
                <DatePicker
                  required={true}
                  value={''}
                  numberOfMonths={2}
                  // placeholder="تاریخ برگشت"
                  monthYearSeparator="||"
                  onChange={(date2) => {
                    // onChange(date?.isValid ? date : "");
                    console.log('dateeeee2', date2)
                    // console.log('uuuuuuuuuuuday',date.day)
                    setStartDateDay2(date2.day)
                    // console.log('uuuuuuuuuuuMName',date.month.name)
                    setStartDateMonthName2(date2.month.name)
                    // console.log('uuuuuuuuuuu-mmNum',date.month.number)
                    setStartDateMonthNum2(date2.month.number)
                    // console.log('uuuuuuuuuuumy',date.year)
                    setStartDateYear2(date2.year)
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
                    width: '180px',
                    textAlign: 'center',
                  }}
                />
              </div>
            )}

            {way === 'oneWay' && (
              <div className="back lg:w-[180px] max-sm:w-[260px] flex flex-col justify-start items-end lg:mt-8 max-sm:mt-4 lg:mr-1 h-[88px]">
                <label
                  htmlFor="back"
                  className="alir text-right text-gray-400 mr-2 pt-[2.5px]"
                >
                  {' '}
                  تاریخ برگشت{' '}
                </label>
                <div className="h-16 w-full mb-3 bg-slate-500 rounded-lg ring-1"></div>
              </div>
            )}
          </div>

          <div className="passDrop flex flex-col max-sm:justify-center lg:items-end max-sm:h-fit lg:h-20 lg:w-1/6 max-sm:w-full lg:mt-1">
            <label htmlFor="pass" className="alir fontcolor text-right lg:mr-2">
              {' '}
              تعداد مسافر{' '}
            </label>
            <div className="pass max-sm:w-full max-sm:p-2 lg:w-full flex justify-center items-center rounded-lg bg-white">
              {/* <FlightDropDown /> */}
              <div ref={ref} className="menu relative z-50">
                {props.children}
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
                        بزرگسال{' '}
                        <span className="text-sm">(12 سال به بالا)</span>
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
                        نوزاد{' '}
                        <span className="text-sm">( 10 روز تا 2 سال )</span>
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

          <div className="srch flex justify-end items-center max-sm:w-full lg:mt-3 lg:w-1/6 h-20">
            <input type="hidden" name="from" value={replace ? to : from} />
            <input type="hidden" name="to" value={replace ? from : to} />
            <input type="hidden" name="adult" value={adultNum} />
            <input type="hidden" name="child" value={childNum} />
            <input type="hidden" name="infant" value={babyNum} />
            <input type="hidden" name="day" value={startDateDay} />
            <input type="hidden" name="MName" value={startDateMonthName} />
            <input type="hidden" name="MNum" value={startDateMonthNum} />
            <input type="hidden" name="year" value={startDateYear} />
            {way === 'twoWay' && (
              <input type="hidden" name="day2" value={startDateDay2} />
            )}
            {way === 'twoWay' && (
              <input type="hidden" name="MName2" value={startDateMonthName2} />
            )}
            {way === 'twoWay' && (
              <input type="hidden" name="MNum2" value={startDateMonthNum2} />
            )}
            {way === 'twoWay' && (
              <input type="hidden" name="year2" value={startDateYear2} />
            )}
            <input type="hidden" name="azz" value={replace ? bee : azz} />
            <input type="hidden" name="bee" value={replace ? azz : bee} />
            {console.log('aaaaazzzzzz', azz)}
            {console.log('bbbeeeeee', bee)}
            {/* {way === 'twoWay' ? (
              <Link
                className="bg-blue-600 alir lg:w-4/5 max-lg:w-full my-3 text-xl px-10 py-3 text-white rounded-lg"
                href={{
                  pathname: '/flight2/gone',
                  query: {
                    from: from,
                    to: to,
                    azz: azz,
                    bee: bee,
                    adult: adultNum,
                    child: childNum,
                    infant: babyNum,
                    day: startDateDay,
                    MName: startDateMonthName,
                    MNum: startDateMonthNum,
                    year: startDateYear,
                    day2:startDateDay2,
                    MName2:startDateMonthName2,
                    MNum2:startDateMonthNum2,
                    year2:startDateYear2,
                  },
                }}
              >
                جستجو
              </Link>
            ) : (
              <Link
                className="bg-blue-600 alir lg:w-4/5 max-lg:w-full my-3 text-xl px-10 py-3 text-white rounded-lg"
                href={{
                  pathname: '/flight/',
                  query: {
                    from: from,
                    to: to,
                    azz: azz,
                    bee: bee,
                    adult: adultNum,
                    child: childNum,
                    infant: babyNum,
                    day: startDateDay,
                    MName: startDateMonthName,
                    MNum: startDateMonthNum,
                    year: startDateYear,
                  },
                }}
              >
                جستجو
              </Link>
            )} */}

            <button
              className="bg-blue-600 alir lg:w-4/5 max-lg:w-full my-3 text-xl px-10 py-3 text-white rounded-lg"
              type="submit"
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
