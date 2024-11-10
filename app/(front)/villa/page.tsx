import Banner from '@/components/banner/banner'
import Footer from '@/components/footer/page'
import MainResult from '@/components/searchResult/mainResult'
import SideResult from '@/components/searchResult/sideResult'
import TopResult from '@/components/searchResult/topResult'
import React from 'react'

const Flight = (props:any) => {
  return (
    <div className='flex flex-col gap-5'>
        <div className="topResult flex justify-center items-center rounded-sm bg-slate-100 w-full h-fit py-4">
            <TopResult img='/icon/bus-svgrepo-com.svg' type="ویلا" from="تهران" to="مشهد"/>
        </div>

        <div className='mainResult flex flex-row-reverse bg-white w-full h-dvh'>
            <SideResult />
            <MainResult />            
        </div>
        <div className="flex w-full my-10">
          <Banner im="/images/villa.jpeg" />
        </div>
        
    </div>
  )
}

export default Flight
