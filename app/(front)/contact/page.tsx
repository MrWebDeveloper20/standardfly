import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <address className="flex flex-col justify-center items-center my-2">
        <h2 className="alib text-xl text-blue-500"> : آدرس دفتر مرکزی </h2>
        <h3 className="alib mr-2">دبی خیابان</h3>
      </address>
      <div className="phone flex flex-col justify-center items-center my-2">
        <h2 className="alib text-xl text-blue-500"> : تلفن </h2>
        <h3 className="alib mr-2"> 0971 - 000000 </h3>
        <h3 className="alib mr-2"> 0971 - 00000000 </h3>
      </div>
      <div className="email flex flex-col justify-center items-center my-2">
        <h2 className="alib text-xl text-blue-500"> : ایمیل </h2>
        <h3 className="alib mr-2"> standardfly@gmail.com </h3>
      </div>
    </div>
  )
}

export default Contact
