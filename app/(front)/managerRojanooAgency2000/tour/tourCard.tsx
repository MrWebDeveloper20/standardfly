import Image from "next/image"
import Link from "next/link"
import {Tour} from '@/types'
import dbClient from '@/db/mongodb';
import {ObjectId} from 'mongodb';
import TourItem from '@/components/tour/tour-item'

// interface TourItemProps {
//   tour: Tour;
// }

const TourCard = async({query}: {query: string}) => {
  const tours = await fetch("/api/tour")
  .then((res) => res.json())
  .then((data) => {
    const sortedPosts = data?.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const filteredTours = Array.isArray(tours)
    ? tours.filter((tour) => {
        return tour.name.toLowerCase().includes(query.toLowerCase());
      })
    : [];

  console.log(tours)

  return (
    <div className="h-fit shadow-sm shadow-black rounded-xl">
                
      <div className="img h-fit">
        <Image 
        className=" rounded-t-xl"
        alt="" 
        width={600} 
        height={100} 
        src={'/images/card1.jpg'}/>
      </div>
      <div className="description">
        <h1 className="alib text-blue-700 font-bold text-xl">     تور سوئیس </h1>
        <div className="flex flex-row justify-end mr-7 text-black">
          <span className="alib mx-2 text-xl">روز</span><h2 className="text-xl">  4 </h2>
        </div>
        <div className="flex flex-row-reverse justify-start mr-5 text-black">
          <span className="alib mx-2 text-xl"> : شروع </span><h2 className="text-xl mx-2"> 10 </h2><h2 className="text-xl"> تیر </h2>
        </div>
        <div className="flex flex-row-reverse justify-start mr-5 text-black">
          <span className="alib mx-2 text-xl"> : پایان </span><h2 className="text-xl mx-2"> 14 </h2><h2 className="text-xl"> تیر </h2>
        </div>
        <div className="flex flex-row-reverse justify-start mr-5 text-black">
          <span className="alib mx-2 text-xl"> : قیمت </span><h2 className="text-xl mx-2"> 1200 </h2><h2 className="text-xl"> یورو</h2>
        </div>
        <div className="flex flex-row-reverse justify-start mr-7 text-black">
          <h2 className="text-xl">  نرخ ریالی پرواز +  </h2>
        </div>
        <div className="detail my-3">
          {/* <Link className="alib bg-red-400 rounded-lg py-1 px-5" href={`./tourManagement/$${new ObjectId(tour._id)}/show`}>مشاهده جزییات</Link> */}
        </div>
      </div>
    </div>
  )
}

export default TourCard