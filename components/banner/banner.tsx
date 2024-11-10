'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const Banner = (props:any) => {
 
  return (
    <div className='w-full -mb-8 z-0'>
      <Image
        className='rounded-lg w-full'
        src={props.im}        
        alt='Banner image' 
        width={2000}
        height={640}
      />
    </div>
  )
}

export default Banner
