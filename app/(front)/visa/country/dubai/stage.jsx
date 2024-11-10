import Image from 'next/image'

export default function Stage() {
  return (
    <div className="document flex flex-col ring-1 shadow-lg shadow-gray-400 mt-3 rounded-lg">
      <h2 className="alib my-3">مراحل دریافت ویزای توریستی دبی</h2>
      <div className="doc flex flex-col justify-center items-right w-full">
        <div className="doc1 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/passport.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">
              درخواست اولیه
            </h2>
            <span className="alib">وارد کردن اطلاعات اولیه و ثبت درخواست</span>
          </div>
        </div>

        <div className="doc2 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/photo.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">دریافت تماس </h2>
            <span className="alib">
              {' '}
              دقایقی پس از ثبت درخواست، از طرف پشتیبانی روژانـو برای هماهنگی با
              شما تماس گرفته می‌شود
            </span>
          </div>
        </div>

        <div className="doc3 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/melliCard.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">ارسال مدارک </h2>
            <span className="alib">
              {' '}
              ارسال اسناد و مدارک از طریق ایمیل برای روژانـو
            </span>
          </div>
        </div>

        <div className="doc4 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/shenas.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">
              {' '}
              پرداخت هزینه{' '}
            </h2>
            <span className="alib">
              {' '}
              هزینه را می‌توانید از طریق پرداخت آنلاین انجام دهید
            </span>
          </div>
        </div>

        <div className="doc5 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/detail.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">
              پردازش ویزا (1 تا 3 روز کاری)
            </h2>
            <span className="alib"> ارسال مدارک برای سفارت امارات</span>
          </div>
        </div>

        <div className="doc6 flex flex-row-reverse justify-start items-center shadow-lg shadow-gray-700 ring-1 rounded-lg my-2 w-full p-2">
          <Image src={'/icon/document2.svg'} alt="" width={30} height={30} />
          <div className="flex flex-col justify-center items-end w-8/10 mr-2">
            <h2 className="alib text-orange-700 animate-pulse">
              {' '}
              دریافت ویزا{' '}
            </h2>
            <span className="alib">
              {' '}
              ویزا بصورت ایمیل برای شما ارسال می‌شود
            </span>
          </div>
        </div>
      </div>
      <h2 className="alib bg-slate-800 text-yellow-400 my-2 py-1">
        اگر قصد تمدید ویزای قبلی را دارید، فقط کافیست عکس ویزای خود را از طریق
        واتساپ برای روژانـو ارسال کنید
      </h2>
      <div className="alert flex flex-col bg-blue-300 w-full rounded-lg mt-4">
        <h2 className="alib text-xl mt-2">زمان پردازش ویزا </h2>
        <span className="alib m-2">
          پروسه صدور ویزا بصورت عادی 1 تا 3 روز کاری زمان میبرد. ولی چنانچه برای
          بررسی بیشتر رود ممکن است ۷ تا ۱۰ روز کاری زمان می‌برد
        </span>
        <span className="alib m-2">
          مبنای محاسبه، یک روز پس از ارائه و ارسال مدارک است (بدون احتساب
          تعطیلات رسمی کشور و تعطیلات سفارت)
        </span>
      </div>
    </div>
  )
}
