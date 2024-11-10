import React from 'react'
import Link from 'next/link'
import Dropdown from './dropdown'

const Menu = (props: any) => {
  return (
    <ul className="flex flex-row-reverse gap-4 justify-start items-center max-sm:hidden">
      {/* <Dropdown title="بلیط" sub1="پرواز " sub2=" قطار" sub3="اتوبوس " link1='/flight' link2='/train' link3='/bus'/> */}
      {/* <Dropdown title="اقامت" sub1="هتل "  sub2="ویلا و اقامت گاه" link1='/hotel' link2='/villa'/>       */}
      <Link href={'/'}>
        <li className="alir text-2xl fontcolor">خانه </li>
      </Link>
      <Link href={'/tour'}>
        <li className="alir text-2xl fontcolor mx-1">تور </li>
      </Link>
      <Link href={'/visa'}>
        <li className="alir text-2xl fontcolor">ویزا</li>
      </Link>
      <Link href={'/insurance'}>
        <li className="alir text-2xl fontcolor mr-1">بیمه مسافرتی</li>
      </Link>
      <Dropdown
        title="بیشتر"
        sub1="درباره ما"
        sub2="تماس با ما"
        sub3="کرایه خودرو"
        sub4="خدمات فردگاهی"
        link1="/aboutUs"
        link2="/contact"
        link3="/carRental"
        link4="/cip"
      />
    </ul>
  )
}

export default Menu
