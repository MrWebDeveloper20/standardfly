'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const SideResult = (props: any) => {
  // const [length, setLength] = useState(props.length)
  const [toggle, setToggle] = useState(true)
  const [toggle1, setToggle1] = useState(true)
  const [toggle2, setToggle2] = useState(true)
  const [toggle3, setToggle3] = useState(true)

  console.log('props.length', props.length)

  const set = (toggle: boolean) => {
    setToggle((toggle) => !toggle)
  }

  const set1 = (toggle1: boolean) => {
    setToggle1((toggle1) => !toggle1)
  }

  const set2 = (toggle2: boolean) => {
    setToggle2((toggle2) => !toggle2)
  }

  const set3 = (toggle3: boolean) => {
    setToggle3((toggle3) => !toggle3)
  }

  return (
    <div className="alib mb-5 text-xl flex flex-col justify-start items-center max-sm:hidden w-1/4 h-fit rounded-lg ml-5 bg-slate-100">
      <div className="resultNumber flex w-full flex-row-reverse ring-1 justify-center py-10">
        <h2>تعداد نتایج</h2>
        <span className="mr-1">:</span>{' '}
        <span className="mr-3">{props.length}</span>
      </div>

      <div className="timeDomain flex flex-col w-full ring-1 py-5 justify-center items-center">
        <div className="top flex flex-col w-full justify-between items-center">
          <div className="arrow w-full flex flex-col">
            {toggle ? (
              <button onClick={() => set(toggle)}>
                <div className="flex flex-row-reverse justify-between w-full">
                  <span className="m-4 text-lg">:ساعت حرکت</span>
                  <Image
                    className="ml-3 "
                    alt="arrow buttom icon"
                    src={'/icon/arrow-bottom.svg'}
                    width={25}
                    height={25}
                  />
                </div>
              </button>
            ) : (
              <div className="w-full flex flex-col">
                <button onClick={() => set(toggle)}>
                  <div className="flex w-full flex-row-reverse justify-between">
                    <span className="m-4">:ساعت حرکت</span>
                    <Image
                      className="ml-3 "
                      alt="arrow top icon"
                      src={'/icon/arrow-top.svg'}
                      width={25}
                      height={25}
                    />
                  </div>
                </button>
                <div className="buttom flex flex-col w-full">
                  <label id="timeDomain"> :(از ساعت 5 تا 22)</label>
                  <input
                    className="m-3 "
                    type="range"
                    name="timeDomain"
                    id="timeDomain"
                    min={5}
                    max={22}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="ticketType flex flex-col w-full ring-1 py-5 justify-center items-center">
        <div className="top flex flex-col w-full justify-between items-center">
          <div className="arrow w-full flex flex-col">
            {toggle1 ? (
              <button onClick={() => set1(toggle1)}>
                <div className="flex flex-row-reverse justify-between w-full">
                  <span className="m-4">نوع بلیط</span>
                  <Image
                    className="ml-3 "
                    alt="arrow buttom icon"
                    src={'/icon/arrow-bottom.svg'}
                    width={25}
                    height={25}
                  />
                </div>
              </button>
            ) : (
              <div className="w-full flex flex-col">
                <button onClick={() => set1(toggle1)}>
                  <div className="flex w-full flex-row-reverse justify-between">
                    <span className="m-4 text-lg">نوع بلیط</span>
                    <Image
                      className="ml-3 "
                      alt="arrow top icon"
                      src={'/icon/arrow-top.svg'}
                      width={25}
                      height={25}
                    />
                  </div>
                </button>
                <div className="buttom flex flex-row-reverse items-center text-right w-full">
                  <input
                    className="m-4 w-8 h-8 text-xl"
                    type="checkbox"
                    name="ticketType"
                    id="ticketType"
                  />
                  <span className="m-2">سیستمی</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="airlines flex flex-col w-full ring-1 py-5 justify-center items-center">
        <div className="top flex flex-col w-full justify-between items-center">
          <div className="arrow w-full flex flex-col">
            {toggle2 ? (
              <button onClick={() => set2(toggle2)}>
                <div className="flex flex-row-reverse justify-between w-full">
                  <span className="m-4 text-lg">شرکت های هواپیمایی</span>
                  <Image
                    className="ml-3 "
                    alt="arrow buttom icon"
                    src={'/icon/arrow-bottom.svg'}
                    width={25}
                    height={25}
                  />
                </div>
              </button>
            ) : (
              <div className="w-full flex flex-col">
                <button onClick={() => set2(toggle2)}>
                  <div className="flex w-full flex-row-reverse justify-between">
                    <span className="m-4 text-lg">شرکت های هواپیمایی</span>
                    <Image
                      className="ml-3 "
                      alt="arrow top icon"
                      src={'/icon/arrow-top.svg'}
                      width={25}
                      height={25}
                    />
                  </div>
                </button>
                <div className="buttom flex flex-col justify-between items-center text-right w-full">
                  <div className="flex flex-row-reverse items-center justify-center">
                    <input
                      className="m-4 w-6 h-6 text-xl"
                      type="checkbox"
                      name="ticketType"
                      id="ticketType"
                    />
                    <Image
                      className="m-1 rounded-full"
                      alt="arrow top icon"
                      src={'/images/zagros.png'}
                      width={40}
                      height={40}
                    />
                    <span className="m-1 text-sm"> زاگرس</span>
                  </div>
                  <div className="flex flex-row-reverse items-center ml-2">
                    <span className="m-1 text-sm alib mr-1">از</span>
                    <span className="text-red-500 text-sm mx-1">
                      25,000,000
                    </span>
                    <span className="m-1 text-sm alib">ریال</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="other flex flex-col w-full ring-1 py-5 justify-center items-center">
        <div className="top flex flex-col w-full justify-between items-center">
          <div className="arrow w-full flex flex-col">
            {toggle3 ? (
              <button onClick={() => set3(toggle3)}>
                <div className="flex flex-row-reverse justify-between w-full">
                  <span className="m-4 text-lg">سایر موارد</span>
                  <Image
                    className="ml-3 "
                    alt="arrow buttom icon"
                    src={'/icon/arrow-bottom.svg'}
                    width={25}
                    height={25}
                  />
                </div>
              </button>
            ) : (
              <div className="w-full flex flex-col">
                <button onClick={() => set3(toggle3)}>
                  <div className="flex w-full flex-row-reverse justify-between">
                    <span className="m-4">سایر موارد</span>
                    <Image
                      className="ml-3 "
                      alt="arrow top icon"
                      src={'/icon/arrow-top.svg'}
                      width={25}
                      height={25}
                    />
                  </div>
                </button>
                <div className="buttom flex flex-row-reverse justify-between items-center text-right w-full">
                  <div className="buttom flex flex-col w-full">
                    <div className="buttom flex flex-row-reverse items-center text-right w-full">
                      <input
                        className="m-4 w-8 h-8 text-xl"
                        type="checkbox"
                        name="ticketType"
                        id="ticketType"
                      />
                      <span className="m-2 text-sm">نمایش بلیط های تکراری</span>
                    </div>

                    <div className="buttom flex flex-row-reverse items-center text-right w-full">
                      <input
                        className="m-4 w-8 h-8 text-xl"
                        type="checkbox"
                        name="ticketType"
                        id="ticketType"
                      />
                      <span className="m-2 text-sm">نمایش بلیط های موجود</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideResult
