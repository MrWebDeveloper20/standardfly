import React from 'react'
import Link from 'next/link'
const Title = () => {
  return (
    <Link href={'/'} className="title p-2 m-2 flex flex-col text-center justify-center items-center   z-50">
      <h1 className="titleH1 fontcolor alib font-extrabold max-sm:text-xl lg:text-3xl  lg:hover:text-4xl animate-pulse">
        استاندارد فلای
      </h1>
      <h2 className="fontcolor alib text-blue-600 mt-2 max-sm:hidden">
        آژانس خدمات مسافرتی و گردشگری
      </h2>
      <h4 className="alib text-blue-600 mt-2 text-xs lg:hidden">
        {' '}
        خدمات مسافرتی و گردشگری
      </h4>
    </Link>
  )
}

export default Title
