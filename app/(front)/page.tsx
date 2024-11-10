'use client'
import Banner from '@/components/banner/banner'
import Reserve from '@/components/reserve/reserve'
import TravelType from '@/components/reserve/travelType'
import Faq from '@/components/faq/faq'

export default function Home(props: any) {
  return (
    <main className="flex flex-col items-center justify-between w-full bg-base-300 rounded-lg">
      <TravelType />
      <Reserve />
      <Faq />
    </main>
  )
}

// export const getServerSideProps = (async ()=>{

// })
