'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import { useEffect, useState } from 'react'

const Footer = () => {
  const [domain, setdomain] = useState('')

  useEffect(() => {
    if (window) {
      const currentURL = new URL(window.location.href)

      // host (domain)
      const host = currentURL.host
      // console.log('Host:', host);
      if (host === 'rojanoo.ir' || host === 'www.rojanoo.ir') {
        setdomain('ir')
      }
      if (host === 'rojanoo.com' || host === 'www.rojanoo.com') {
        setdomain('com')
      }
    }
  }, [])

  return (
    <div className="flex alib w-full fontcolor max-sm:flex-col lg:flex-row shadow-sm bg-slate-900 h-fit mt-8 mb-3 mx-5 rounded-lg">
      <div className="leftfooter flex flex-col h-fit max-sm:w-full lg:w-1/2">
        <div className="leftTopFooter justify-center items-center flex flex-col h-fit w-full">
          {/* <Image
            className="my-3 rounded-lg"
            alt="logo"
            src={'/logo/32.png'}
            width={200}
            height={200}
          /> */}
          <h2 className="text-xl mt-10">تلفن پشتیبانی </h2>

         <h3 className="alir text-xl mt-3 w-3/4">
            دفتر مرکزی : دبی     
          </h3>
        </div>

        {/* <div className="leftBottomFooter flex flex-row gap-2 justify-around mt-5 items-center h-fit w-full">
          <a target="blank" className="" href="https://caa.gov.ir/">
            <Image
              className="my-3 rounded-lg"
              alt="CAO logo"
              src={'/images/cao.png'}
              width={65}
              height={85}
            />
          </a>

          <a target="blank" className="" href="https://www.aira.ir/">
            <Image
              className="my-3 rounded-lg"
              alt="ENamad"
              src={'/images/logo_aira.png'}
              width={70}
              height={100}
            />
          </a>

          <a
            target="blank"
            className=""
            href="https://farasa.cao.ir/sysworkflow/fa/modern/3810212626028ab03488017019616799/6464336316028ab04e3c618028352200.php"
          >
            <Image
              style={{ width: '70px', height: '70px' }}
              className="my-3 rounded-lg"
              alt="Passenger logo"
              src={'/images/Passenger.jpg'}
              width={70}
              height={100}
            />
          </a>

          {domain == 'ir' && (
            <a href="https://logo.samandehi.ir/Verify.aspx?id=62474&p=gvkauiwkaodsjyoeaods">
              <img
                style={{ width: '70px', height: '70px' }}
                referrerPolicy="origin"
                id="fukznbqewlaojzpewlao"
                // onClick='window.open("", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                alt="logo-samandehi"
                src="https://logo.samandehi.ir/logo.aspx?id=62474&p=wlbqodrfshwlyndtshwl"
              />
            </a>
          )}

          {domain == 'com' && (
            <a href="https://logo.samandehi.ir/Verify.aspx?id=58061&p=dshwmcsiobpdgvkarfth">
              <img
                style={{ width: '70px', height: '70px' }}
                referrerPolicy="origin"
                id="fukznbqewlaojzpewlao"
                // onClick='window.open("", "Popup","toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")'
                alt="logo-samandehi"
                src="https://logo.samandehi.ir/logo.aspx?id=58061&p=ujynaqgwlymawlbqnbpd"
              />
            </a>
          )}

          {domain == 'ir' && (
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=51689&Code=mdbYnN9jBlbvirlhe0bK"
            >
              <img
                style={{ width: '65px', height: '65px', borderRadius: '5px' }}
                referrerPolicy="origin"
                src="/images/namad.png"
                alt=""
                code="mdbYnN9jBlbvirlhe0bK"
              />
            </a>
          )}

          {domain == 'com' && (
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=9357&Code=vP76yT9jma12vNCpSp7K"
            >
              <img
                style={{ width: '65px', height: '65px', borderRadius: '5px' }}
                referrerPolicy="origin"
                src="/images/namad.png"
                alt=""
                code="vP76yT9jma12vNCpSp7K"
              />
            </a>
          )}

          
        </div> */}
      </div>

      <div className="rightFooter flex max-sm:flex-col lg:flex-row-reverse h-fit mt-10 max-sm:w-full lg:w-1/2">
        <div className="rightFooter1 flex flex-col justify-start items-center  h-fit max-sm:w-full lg:w-1/3">
          <h1 className="text-3xl py-5">استاندارد فلای</h1>
          <Link href="/aboutUs">
            <h2 className="alir my-1">درباره ما</h2>
          </Link>
          <Link href="/contact">
            <h2 className="alir my-1">تماس با ما</h2>
          </Link>
          <h2 className="alir my-1">بیمه مسافرتی </h2>
          <h2 className="alir my-1">چرا استاندارد فلای؟</h2>
          <h2 className="alir my-1">مجله استاندارد فلای </h2>
          <h2 className="alir">استاندارد فلای پلاس</h2>
        </div>

        <div className="rightFooter2 flex flex-col justify-start items-center h-fit  max-sm:w-full lg:w-1/3 ">
          <h1 className="text-2xl py-5">خدمات مشتریان</h1>
          <h2 className="alir my-1">پرسش و پاسخ </h2>
          <h2 className="alir my-1">راهنمای خرید </h2>
          <h2 className="alir my-1">راهنمای استرداد </h2>
          <h2 className="alir my-1">قوانین و مقررات </h2>
          <h2 className="alir my-1">مرکز پشتیبانی آنلاین </h2>
        </div>

        <div className="rightFooter3 flex flex-col justify-start items-center h-fit  max-sm:w-full lg:w-1/3 ">
          <h1 className="text-2xl py-5">اطلاعات تکمیلی</h1>
          <h2 className="alir my-1">فروش سازمانی </h2>
          <h2 className="alir my-1">فرصت های شغلی </h2>
          <h2 className="alir my-1">میزان رضایت مندی </h2>
          <h2 className="alir my-1">همکاری با آژانس ها </h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
