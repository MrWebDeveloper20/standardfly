import Link from 'next/link'
import { Tour } from '@/types'
import { deleteTour, editTourAction } from '@/actions/index'

interface TourItemProps {
  tour: Tour
}

export default function TourItem(props: TourItemProps) {
  const { tour } = props

  return (
    <div className=" max-h-96 flex flex-col items-center px-1">
      <div className=" hotelsList  alib flex flex-col justify-center items-center w-[220px] h-52 rounded-xl gap-2 bg-white">
        <div className="name pt-4 px-5 w-full text-center flex flex-row-reverse justify-center gap-3">
          : عنوان
          <h2 className="text-sm"> {tour.name}</h2>
        </div>

        <div className="operation w-full pb-4 gap-5 flex flex-row justify-center">
          <form action={deleteTour.bind(null, tour._id)}>
            <button className="bg-red-400 mx-3 py-1 px-2 rounded">حذف</button>
          </form>
          <Link href={`/tour/${tour._id}/edit`}>
            <h2 className="bg-yellow-300 mx-3 py-1 px-2 rounded">ویرایش</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}
