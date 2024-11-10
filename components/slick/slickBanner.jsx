'use client'
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SlickBanner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplaySpeed: 5000,
    autoplay : true,
    InitalSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  }
  return (
    <div className="w-4/5 m-auto my-5">
      <div className="slider-container">
        <Slider {...settings}>
          <a
            target="blank"
            href="/tour"
            className="flex flex-col justify-start items-center rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/advertizement/canada.jpeg"
              alt=""
              width={500}
              height={500}
            />

            <h2 className="alib fontcolor text-lg mb-2 p-1"> ویزای کانادا </h2>
          </a>

          <a
            target="blank"
            href="/tour"
            className="flex flex-col justify-start items-center  rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/advertizement/canada1.jpeg"
              alt=""
              width={500}
              height={500}
            />

            <h2 className="alib fontcolor text-lg mb-2 p-1"> ویزای کانادا </h2>
          </a>

          <a
            target="blank"
            href="/tour"
            className="flex flex-col justify-start items-center  rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/advertizement/japan.jpeg"
              alt=""
              width={500}
              height={500}
            />

            <h2 className="alib fontcolor text-lg mb-2 p-1"> تور ژاپن </h2>
          </a>

          <a
            target="blank"
            href="/tour"
            className="flex flex-col justify-start items-center  rounded-lg bg-slate-900 px-2"
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/images/advertizement/roj.jpeg"
              alt=""
              width={500}
              height={500}
            />

            <h2 className="alib fontcolor text-lg mb-2 p-1"> روژانو </h2>
          </a>
        </Slider>
      </div>
    </div>
  )
}

export default SlickBanner
