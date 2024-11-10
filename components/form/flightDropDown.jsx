import { useState, useEffect, useRef } from 'react'
import { Form } from 'react-hook-form'

function FlightDropDown(props) {
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

  return (
    <div ref={ref} className="menu relative">
      {props.children}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setOpenDropdown(!isOpenDropdown)
        }}
      >
        <div className="flex flex-row">
          <h2 className="alib text-lg">مسافر</h2>
          <h2 className="alib text-lg px-2">
            {adultNum + childNum + babyNum < 10
              ? adultNum + childNum + babyNum
              : 9}
          </h2>
        </div>
      </button>
      {isOpenDropdown && (
        <div className="dropdown absolute top-12 -right-20 w-72 z-20 bg-gray-100 rounded-xl">
          <div className="flex flex-row-reverse items-center justify-between pl-2 py-2">
            <h1 className="alib text-lg px-2">
              بزرگسال <span className="text-sm">(12 سال به بالا)</span>
            </h1>
            <div className="flex flex-row-reverse items-center">
              <button
                className="px-3 rounded-full bg-green-600"
                onClick={() => adultIncrease(adultNum, childNum, babyNum)}
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
            <h1 className="alib text-lg px-2">
              کودک <span className="text-sm">( 2 تا 12 سال )</span>
            </h1>
            <div className="flex flex-row-reverse items-center">
              <button
                className="px-3 rounded-full bg-green-600"
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
            <h1 className="alib text-lg px-2">
              نوزاد <span className="text-sm">( 10 روز تا 2 سال )</span>
            </h1>
            <div className="flex flex-row-reverse items-center">
              <button
                className="px-3 rounded-full bg-green-600"
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
            <h3 className="alib text-sm text-gray-600 mr-3"> : قوانین </h3>
            <p className="alib text-sm text-red-400 py-1 mr-3">
              حداکثر تعداد مسافران 9 نفر
            </p>
            <p className="alib text-sm text-red-400 mr-3 pb-2">
              به ازای هر بزرگسال حداکثر 3 کودک یا نوزاد
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default FlightDropDown
