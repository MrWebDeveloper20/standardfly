import Image from 'next/image'

export default function Document() {
  return (
    <div className="document flex flex-col ring-1 shadow-lg shadow-gray-400 mt-3 rounded-lg">
      <h2 className="alib my-3">مدارک مورد نیاز برای ویزای توریستی دبی</h2>
      <div className="doc flex flex-col justify-center items-right w-full">
        <div className="doc1 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/passport.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">
              پاسپورت معتبر
            </h2>
            <span className="alib">
              اسکن رنگی از صفحه اول گذرنامه با حداقل ۶ ماه اعتبار از تاریخ سفر
            </span>
          </div>
        </div>

        <div className="doc2 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/photo.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">عکس پرسنلی </h2>
            <span className="alib"> عکس پاسپورت یا سلفی با پس‌زمینه سفید </span>
          </div>
        </div>

        <div className="doc3 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/melliCard.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">کارت ملی </h2>
            <span className="alib"> اسکن رنگی از دو طرف کارت ملی </span>
          </div>
        </div>

        <div className="doc4 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/shenas.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse"> شناسنامه </h2>
            <span className="alib">
              {' '}
              اسکن رنگی یا تصویر صفحه اول و دوم شناسنامه{' '}
            </span>
          </div>
        </div>

        <div className="doc5 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/detail.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">جزییات شخصی </h2>
            <span className="alib"> نام و مشخصات تماس برای تسهیل درخواست </span>
          </div>
        </div>

        <div className="doc6 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/document2.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">
              {' '}
              مدارک اضافی{' '}
            </h2>
            <span className="alib">
              {' '}
              در صورت نیاز از طریق کانتر به شما اعلام می‌شود{' '}
            </span>
          </div>
        </div>
      </div>
      <div className="alert bg-red-300 w-full rounded-lg mt-4">
        <h2 className="alib text-xl">شرط صدور</h2>
        <span className="alib">
          تنها در صورتی ویزا تقدیم مسافر می‌گردد که حتما بلیط پرواز رفت‌وبرگشت
          از روژانـو صادر شده باشد و یا چک ضمانت در وجه روژانـو صادر شود
        </span>
      </div>
    </div>
  )
}
