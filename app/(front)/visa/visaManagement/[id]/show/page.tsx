// import visaEditForm from '@/components/tour/tour-edit-form'
import dbClient from '@/db/mongodb'
import { ObjectId } from 'mongodb'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface EditVisaPageProps {
  params: {
    id: string
  }
}

export default async function VisaCreatePage(props: any) {
  const visa = await dbClient
    .db('rojanoo')
    .collection<any>('visa')
    .findOne({ _id: new ObjectId(props.params.id) })

  console.log(visa)

  if (!visa) {
    return notFound()
  }

  return (
    <div className="alib flex flex-col justify-center items-center lg:w-full gap-3  mx-auto bg-slate-300 p-5 mb-10">
      <h1 className="alib text-2xl font-bold m-3"> : نگاه کلی </h1>
      <div className="visaProperty lg:w-full flex lg:flex-row-reverse h-fit gap-4 justify-center text-green-600">
        <div className="visaProperty1 w-full h-fit flex flex-col gap-4 justify-center ">
          <div className="img flex justify-center items-center w-full mx-auto gap-4">
            <Image
              className="object-cover h-auto w-full"
              src={`/images/visa/${visa.latin}.jpg`}
              width={400}
              height={100}
              alt=""
            />
          </div>

          <div className="sub flex flex-col justify-center items-center lg:w-full">
            <div className="detail flex flex-col gap-3 my-3 w-full">
              <div className="flex justify-center items-center w-full mx-auto gap-4 lg:text-3xl max-sm:text-2xl text-red-600">
                تور : {visa.name}
              </div>

              <div className="flex flex-row-reverse justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                قیمت تور : {visa.price}
                <span className="alib">{visa.unit} </span>
              </div>

              <div className="flex flex-row-reverse justify-center items-center w-full mx-auto gap-4 lg:text-2xl max-sm:text-xl">
                <h2 className="">زمان پردازش : از</h2>
                <h2 className="text-red-500">{visa.startDate}</h2>
                <h3 className="">روز کاری الی</h3>
                <h2 className="text-red-500">{visa.endDate}</h2>
                <h3 className="">روز کاری</h3>
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
