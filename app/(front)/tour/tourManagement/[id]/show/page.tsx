import TourEditForm from '@/components/tour/tour-edit-form'
import dbClient from '@/db/mongodb'
import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface EditTourPageProps {
  params: {
    id: string
  }
}

export default async function TourCreatePage(props: any) {
  const tour = await dbClient
    .db('rojanoo')
    .collection<any>('tour')
    .findOne({ _id: new ObjectId(props.params.id) })

  console.log(tour)

  if (!tour) {
    return notFound()
  }

  return (
    <div className="alib flex flex-col justify-center items-center lg:w-full gap-3  mx-auto bg-slate-300 p-5 mb-10">
      <h1 className="alib text-2xl font-bold m-3"> : نگاه کلی </h1>
      <div className="hotelProperty lg:w-full flex lg:flex-row-reverse h-fit gap-4 justify-center text-green-600">
        <div className="hotelProperty1 w-full h-fit flex flex-col gap-4 justify-center ">
          <div className="img flex justify-center items-center w-full mx-auto gap-4">
            <Image
              className="object-cover h-auto w-full"
              src={'/images/card1.jpg'}
              width={400}
              height={100}
              alt=""
            />
          </div>

          <div className="sub flex flex-col justify-center items-center lg:w-full">
            <div className="services flex flex-col justify-center items-center ring-2 ring-black lg:w-1/2 max-sm:w-full">
              <h2 className="alib py-2 lg:text-2xl max-sm:text-xl text-yellow-600">
                {' '}
                : خدمات تور{' '}
              </h2>
              <div className="flex flex-row w-full ring-2 ring-black">
                <div className="left flex flex-col w-1/2">
                  <div className="visa flex flex-row justify-end items-center ring-1 ring-black w-full h-14">
                    <span className="alib px-5">بلیط</span>
                    <Image
                      className="mr-2"
                      src={'/icon/ticket.png'}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="visa flex flex-row justify-end items-center ring-1 ring-black w-full h-14">
                    <span className="alib px-5">خدمات</span>
                    <Image
                      className="mr-2"
                      src={'/icon/service.png'}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="visa flex flex-row justify-end items-center ring-1 ring-black w-full h-14">
                    <span className="alib px-5">گشت شهری</span>
                    <Image
                      className="mr-2"
                      src={'/icon/location.png'}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="right flex flex-col w-1/2">
                  <div className="visa flex flex-row justify-end items-center ring-1 ring-black w-full h-14">
                    <span className="alib px-5">اقامت</span>
                    <Image
                      className="mr-2"
                      src={'/icon/visa.svg'}
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="visa flex flex-row justify-end items-center ring-1 ring-black w-full h-14">
                    <span className="alib px-5">ترانسفر</span>
                    <Image
                      className="mr-2"
                      src={'/icon/transfer.png'}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="visa flex flex-row justify-end items-center ring-1 ring-black w-full h-14">
                    <span className="alib px-5">بیمه</span>
                    <Image
                      className="mr-2"
                      src={'/icon/insurance.png'}
                      alt=""
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="detail flex flex-col gap-3 my-3 w-full">
              <div className="flex justify-center items-center w-full mx-auto gap-4 lg:text-3xl max-sm:text-2xl text-red-600">
                تور : {tour.name}
              </div>

              <div className="flex flex-row-reverse justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                قیمت تور : {tour.price}
                <span className="alib">+ </span>
                <span className="alib"> نرخ ریالی پرواز</span>
              </div>

              <div className="flex justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                مدت تور : {tour.duration}
              </div>

              <div className="flex justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                شروع تور : {tour.startDate}
              </div>

              <div className="flex justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                پایان تور : {tour.endDate}
              </div>

              <div className="flex justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                روز : {tour.planName}
              </div>

              <div className="flex justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                توضیحات : {tour.planDescription}
              </div>

              <div className="flex justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                اقامت شب : {tour.nightPlan}
              </div>
            </div>

            <div className="select lg:w-full max-sm:w-full">
              <button className="alib py-3 px-20 rounded-xl text-white bg-orange-700">
                ثبت نام اولیه
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
