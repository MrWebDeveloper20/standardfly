'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import Tour from './tour/page'
import Visa from './visa/page'
import Users from './users/page'

const Manage = () => {
  const [show, setShow] = useState('')
  return (
    <div className='flex flex-row-reverse gap-5 justify-center items-start my-5 w-full h-fit'>
      <div className="side flex flex-col gap-3 justify-start items-end bg-slate-900 w-1/5 h-screen">
        <h1 
          onClick={()=>setShow('tour')}
          className='flex justify-center items-center mr-2 mt-3 text-xl alib fontcolor cursor-pointer'
          >مدیریت تور 
        </h1>
        <h1 
          onClick={()=>setShow('visa')}
          className='flex justify-center items-center mr-2 mt-3 text-xl alib fontcolor cursor-pointer'
          >مدیریت ویزا 
        </h1>
        <h1 
          onClick={()=>setShow('user')}
          className='flex justify-center items-center mr-2 mt-3 text-xl alib fontcolor cursor-pointer'
          >مدیریت کاربران 
        </h1>
        
      </div>

      <div className="main flex w-4/5 h-fit my-4">
        {show === 'tour' && <Tour user={'admin'}/>}
        {show === 'visa' && <Visa user={'admin'}/>}
        {show === 'user' && <Users />}
        
      </div>
      
    </div>
  )
}

export default Manage
