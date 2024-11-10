'use client'
import MainResult from '@/components/searchResult/mainResultGone'
import SideResult from '@/components/searchResult/sideResult'
import TopResult from '@/components/searchResult/topResult'
import Banner from '@/components/banner/banner'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { GET } from '@/app/api/zagros/route'
import Modal from '@/components/modal/page'

const Flight = () => {
  const [isLoading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const fromUrl = searchParams.get('from')
  const toUrl = searchParams.get('to')
  const adultUrl = searchParams.get('adult')
  const childUrl = searchParams.get('child')
  const infantUrl = searchParams.get('infant')
  const dayUrl = searchParams.get('day')
  const MNameUrl = searchParams.get('MName')
  const MNumUrl = searchParams.get('MNum')
  const yearUrl = searchParams.get('year')
  const dayUrl2 = searchParams.get('day2')
  const MNameUrl2 = searchParams.get('MName2')
  const MNumUrl2 = searchParams.get('MNum2')
  const yearUrl2 = searchParams.get('year2')
  const azzUrl = searchParams.get('azz')
  const beeUrl = searchParams.get('bee')

  const [from, setfrom] = useState('')
  const [to, setTo] = useState('')
  const [az, setaz] = useState(azzUrl)
  const [be, setbe] = useState(beeUrl)
  const [adult, setAdult] = useState(adultUrl)
  const [child, setChild] = useState(childUrl)
  const [infant, setInfant] = useState(infantUrl)
  const [day, setDay] = useState(dayUrl)
  const [MName, setMName] = useState(MNameUrl)
  const [MNum, setMNum] = useState(MNumUrl)
  const [year, setYear] = useState(yearUrl)
  const [day2, setDay2] = useState(dayUrl2)
  const [MName2, setMName2] = useState(MNameUrl2)
  const [MNum2, setMNum2] = useState(MNumUrl2)
  const [year2, setYear2] = useState(yearUrl2)

  const [data, setData] = useState({})

  const [fromname, setfromname] = useState(fromUrl)
  const [toname, setToname] = useState(toUrl)

  const [air, setAir] = useState('')

  useEffect(() => {
    setLoading(true)
    fetch('/api/airport')
      .then((res) => res.json())
      .then((airport) => {
        setAir(airport)
        airport.map((a) => {
          if (a.name === fromname) {
            setfrom(a.latin)
          }
          if (a.name === toname) {
            setTo(a.latin)
          }
        })
        setLoading(false)
        // console.log('air',air)
      })
  }, [])

  // console.log('from', az)
  // console.log('to', be)

  console.log('from2', fromname)
  console.log('to2', toname)

  const [length, setLength] = useState(1)
  useEffect(() => {
    setLoading(true)
    const res = fetch(
      `/api/avail?from=${az}&to=${be}&day=${day}&monthNum=${MNum}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log('daaaaabbbb',data.AvailableFlights)
        // console.log('daaaaa',data)
        setLength(data.AvailableFlights.length)

        setLoading(false)
      })
  }, [])

  const [length2, setLength2] = useState(1)
  useEffect(() => {
    setLoading(true)
    const res = fetch(
      `/api/avail?from=${be}&to=${az}&day=${day2}&monthNum=${MNum2}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log('daaaaabbbb',data.AvailableFlights)
        // console.log('daaaaa',data)
        setLength2(data.AvailableFlights.length)

        setLoading(false)
      })
  }, [])

  if (isLoading) return <Modal />
  // if (!data) return <p>No profile data</p>

  return (
    <div className="w-full flex flex-col z-0">
      <div className="flex flex-col gap-5 h-fit z-10">
        <div className="topResult flex justify-center items-center rounded-sm bg-slate-100 w-full h-fit py-4">
          <TopResult
            img="/icon/airplane.svg"
            type="هواپیما"
            from={fromname}
            to={toname}
            passNum={Number(adult) + Number(child) + Number(infant)}
            day={day}
            month={MName}
            year={year}
          />
        </div>

        <div className="mainResult flex flex-row-reverse gap-3 w-full h-fit">
          {/* {console.log('gthhhhh', length )} */}
          <SideResult length={length} />

          <MainResult
            length={length}
            day={day}
            monthNum={MNum}
            monthName={MName}
            year={year}
            day2={day2}
            monthNum2={MNum2}
            monthName2={MName2}
            year2={year2}
            fromname={fromname}
            from={az}
            toname={toname}
            to={be}
            adult={adult}
            child={child}
            infant={infant}
          />
        </div>
      </div>
      <div className="flex w-full mb-10">
        <Banner im="/images/airplaneForien.png" />
      </div>
    </div>
  )
}

// Flight.getInitialProps = async () => {
// 	const res = await fetch('http://api.zagrosairlines.com/ws1/AvailabilityJS.jsp?AirLine=ZV&cbSource=THR&cbTarget=MHD&cbDay1=25&cbMonth1=04&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR639.WS&OfficePass=ASEMAN2024');
// 	const availability = await res.json();
//   console.log('availa',availability)
// 	return { availability };
// };

export default Flight
