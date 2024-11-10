'use client'
import React from 'react'
import Image from 'next/image'
// import a from 'next/a'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Slick = () => {
  const settings = {
    infinite : true,
    slidesToShow : 4,
    autoplaySpeed: 4000,
    autoplay : true,
    slidesToScroll : 2,
    InitalSlide : 0,

    responsive : [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          autoplay : true,
          infinite :true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          autoplay : true,
            infinite :true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay : true,
            infinite :true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          autoplay : true,
            infinite :true,
        },
      },
      ],
    
  };
  return (
    <div className="w-4/5 m-auto">
        
     <h2 className="alib text-slate-900 lg:text-xl sm:text-base p-1"> : مشتری های ویژه روژانو   </h2>
      <div className="slider-container">
        <Slider {...settings}>
          <a
            target="blank"
            href="https://diamedtour.com/"
            className="flex flex-col justify-start items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/logo/dayamed.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-xl p-2">Daya Med </h2>
            <h2 className="alib fontcolor text-lg p-1"> دایا مد </h2>
            <p className="alir fontcolor text-lg p-1">توریست سلامت </p>
          </a>

          <a
            target="blank"
            href="https://bayermarket.ir/"
            className="flex flex-col justify-start items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/logo/bayer.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-xl p-2">Teb Tejarat Bayer </h2>
            <h2 className="alib fontcolor text-lg p-1"> فروشگاه اینترنتی بایر مارکت </h2>
            <p className="alir fontcolor text-lg p-1">خدمات کشاورزی </p>
          </a>

          <a
            target="blank"
            href="#"
            className="flex flex-col justify-between items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/logo/dideban.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-2xl p-2">Dideban </h2>
            <h2 className="alib fontcolor text-lg p-1">دیده بان منشور عدالت</h2>
            <p className="alir fontcolor text-lg p-1"> موسسه حقوقی </p>
          </a>

          <a
            target="blank"
            href="https://diagroup.ir/"
            className="flex flex-col justify-between items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/logo/dia.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-2xl p-2">Daya Group International </h2>
            <h2 className="alib fontcolor text-lg p-1">دایا گروپ</h2>
            <p className="alir fontcolor text-lg p-1">  همکاری های بین المللی </p>
          </a>

          <a
            target="blank"
            href="#"
            className="flex flex-col justify-between items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/logo/bimehEmkan.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-2xl p-2">Emkan Bimeh </h2>
            <h2 className="alib fontcolor text-lg p-1"> بیمه امکان </h2>
            <p className="alir fontcolor text-lg p-1"> بیمه آنلاین امکان</p>
          </a>

          <a
            target="blank"
            href="#"
            className="flex flex-col justify-between items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/logo/emkan.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-2xl p-2">Emkan </h2>
            <h2 className="alib fontcolor text-lg p-1">امکان </h2>
            <p className="alir fontcolor text-lg p-1"> شبکه ارتباطی راهبردی </p>
          </a>

          <a
            target="blank"
            href="#"
            className="flex flex-col justify-between items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-5"
              src="/logo/karno.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-2xl p-2">Karno Kish </h2>
            <h2 className="alib fontcolor text-lg p-1">کارنو کیش </h2>
            <p className="alir fontcolor text-lg p-1">  تجارت بین المللی</p>
          </a>

          <a
            target="blank"
            href="https://alwasil.market/"
            className="flex flex-col justify-between items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="mx-auto my-5"
              src="/logo/alwasil.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-2xl p-2">Alwasil Market </h2>
            <h2 className="alib fontcolor text-lg p-1"> الوصیل مارکت</h2>
            <p className="alir fontcolor text-lg p-1"> فروشگاه اینترنتی</p>
          </a>

          <a
            target="blank"
            href="#"
            className="flex flex-col justify-between items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/logo/kalaran.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-2xl p-2">KALARAN </h2>
            <h2 className="alib fontcolor text-lg p-1"> کالاران </h2>
            <p className="alir fontcolor text-lg p-1"> خدمات حمل و نقل </p>
          </a>

          <a
            target="blank"
            href="https://royalnamad.com/"
            className="flex flex-col justify-between items-center w-68 h-64 rounded-lg bg-slate-900 "
          >
            <Image
              className="rounded-lg mx-auto my-2"
              src="/logo/royal.png"
              alt=""
              width={100}
              height={100}
            />
            <h2 className="ag fontcolor text-2xl p-2">Royal Namad Pars </h2>
            <h2 className="alib fontcolor text-lg p-1"> رویال نماد پارس </h2>
            <p className="alir fontcolor text-lg p-1">   صادرات و واردات</p>
          </a>
        </Slider>
      </div>
    </div>
  )
}

export default Slick
