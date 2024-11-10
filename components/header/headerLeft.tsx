import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLeft = () => {
  return (
    <div className="flex flex-row-reverse">
      <Link href={''} className="flex flex-row mx-2 text-xl alir">
        <h2 className="fontcolor alir max-sm:hidden">پشتیبانی آنلاین</h2>
        <Image
          className="mx-1 max-sm:w-68 max-sm:h-68 lg:w-30 lg:h-30 hover:animate-ping"
          src="/icon/support.svg"
          alt="Online support icon"
          width={0}
          height={0}
          style={{ width: '30px', height: 'auto' }}
          title="پشتیبانی آنلاین"
        />
      </Link>
      <Link href={''} className="flex flex-row mx-2 text-xl alir">
        <h2 className="fontcolor alir max-sm:hidden"> سفرهای من </h2>
        <Image
          className="mx-1"
          src="/icon/travel.svg"
          alt="My travel history icon"
          width={0}
          height={0}
          style={{ width: '30px', height: 'auto' }}
          title="سفرهای من"
        />
      </Link>
      <Link href={'/login'} className="flex flex-row mx-2 text-xl alir">
        <h2 className="fontcolor alir max-sm:hidden"> ورود </h2>
        <Image
          className="mx-1"
          src="/icon/login.svg"
          alt="Login and signin icon"
          width={0}
          height={0}
          style={{ width: '30px', height: 'auto' }}
          title="ورود"
        />
      </Link>
    </div>
  )
}

export default HeaderLeft
