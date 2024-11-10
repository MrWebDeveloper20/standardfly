import React from 'react'
import Menu from './menu'
import HeaderLeft from './headerLeft'
import Link from 'next/link'
import Image from 'next/image'
import Title from '@/components/title/title'

const Header = () => {
  return (
    <div className="bg-slate-800 flex flex-row-reverse justify-between items-center w-full h-32 rounded-xl mt-3">
     <Title />

      {/* <Image
        className="alib rounded-lg"
        title="صفحه اصلی"
        src={'/logo/32.png'}
        alt="logo"
        width={140}
        height={140}
      /> */}

      {/* <Link href={'/'}>
          <Image
            className="alib rounded-lg"
            title="صفحه اصلی"
            src={'/logo/roj.png'}
            alt="logo"
            width={100}
            height={100}
          />
      </Link> */}

      <div className="menu mr-8">
        <Menu />
      </div>

      <HeaderLeft />
    </div>
  )
}

export default Header
