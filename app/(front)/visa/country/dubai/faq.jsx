'use client'
import Image from 'next/image'
import { useState } from 'react'

const Faq = () => {
  const [faq1, setFaq1] = useState(false)
  const [faq2, setFaq2] = useState(false)
  const [faq3, setFaq3] = useState(false)
  const [faq4, setFaq4] = useState(false)
  const [faq5, setFaq5] = useState(false)
  const [faq6, setFaq6] = useState(false)
  const [faq7, setFaq7] = useState(false)
  const [faq8, setFaq8] = useState(false)
  return (
    <div className="faq flex flex-col ring-1 shadow-lg shadow-gray-400 mt-3 rounded-lg">
      <h2 className="alib py-3 text-blue-600">سوالات شما</h2>
      <div className="ask flex flex-col justify-start items-center ring-2 rounded-b-lg">
        <div
          onClick={() => setFaq1(!faq1)}
          className="faq1 ring-1 w-full flex flex-col justify-between items-center p-3"
        >
          <div className="title1 flex flex-row-reverse justify-between items-center w-full">
            <div className="titleR1 flex flex-row-reverse items-center w-5/6">
              <Image
                className="ml-2"
                src={'/icon/question.svg'}
                alt=""
                width={20}
                height={20}
              />
              <h2 className="alib">برای گرفتن ویزا چگونه اقدام کنم؟</h2>
            </div>
            <div className="titleL1 w-1/6">
              {!faq1 && (
                <Image src={'/icon/down.svg'} alt="" width={22} height={22} />
              )}
              {faq1 && (
                <Image src={'/icon/up.svg'} alt="" width={22} height={22} />
              )}
            </div>
          </div>
          {faq1 && (
            <div className="desc1">
              <p className="alib font-thin text-blue-400 text-right my-1">
                مدارک خودتان را برای کارشناسان ما ارسال کنید تا مراحل گرفتن
                ویزای دبی را برایتان پیگیری کنیم. برای ارسال یا دریافت ویزا نیاز
                به مراجعه حضوری نیست و تمام این فرایند به‌صورت تلفنی یا آنلاین
                انجام می‌شود
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setFaq2(!faq2)}
          className="faq2 ring-1 w-full flex flex-col justify-between items-center p-3"
        >
          <div className="title1 flex flex-row-reverse justify-between items-center w-full">
            <div className="titleR1 flex flex-row-reverse items-center w-5/6">
              <Image
                className="ml-2"
                src={'/icon/question.svg'}
                alt=""
                width={20}
                height={20}
              />
              <div className="flex flex-row-reverse">
                <h2 className="alib">شرایط تست</h2>
                <h2 className="alib mx-1">PCR</h2>
                <h2 className="alib">و واکسیناسیون به چه صورت است؟</h2>
              </div>
            </div>
            <div className="titleL1 w-1/6">
              {!faq2 && (
                <Image src={'/icon/down.svg'} alt="" width={22} height={22} />
              )}
              {faq2 && (
                <Image src={'/icon/up.svg'} alt="" width={22} height={22} />
              )}
            </div>
          </div>
          {faq2 && (
            <div className="desc1">
              <p className="alib font-thin text-blue-400 text-right my-1">
                مسافران برای ورود به دبی، نیازی به ارائه گواهی واکسیناسیون
                COVID19 یا انجام آزمایش PCR ندارند
              </p>
              <p className="alib font-thin text-blue-400 text-right my-1">
                تست PCR برای ورود به ایران الزامی می‌باشد، که در بازه ۷۲ ساعت
                قبل از پرواز در مکان‌های مورد تایید ایرلاین این تست باید انجام
                شود و به عهده‌ی مسافر می‌باشد
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setFaq3(!faq3)}
          className="faq3 ring-1 w-full flex flex-col justify-between items-center p-3"
        >
          <div className="title1 flex flex-row-reverse justify-between items-center w-full">
            <div className="titleR1 flex flex-row-reverse items-center w-5/6">
              <Image
                className="ml-2"
                src={'/icon/question.svg'}
                alt=""
                width={20}
                height={20}
              />
              <h2 className="alib">شرایط اخذ ویزای دبی چیست؟ </h2>
            </div>
            <div className="titleL1 w-1/6">
              {!faq3 && (
                <Image src={'/icon/down.svg'} alt="" width={22} height={22} />
              )}
              {faq3 && (
                <Image src={'/icon/up.svg'} alt="" width={22} height={22} />
              )}
            </div>
          </div>
          {faq3 && (
            <div className="desc1">
              <p className="alib font-thin text-blue-400 text-right my-1">
                طبق قوانین سفارت امارات، تمام افراد با مدارک گفته‌شده می‌توانند
                برای دریافت ویزای دبی اقدام کنند؛ البته پسران و دختران زیر ۱۸
                سال برای سفر به امارات باید یک همراه (بزرگسال) داشته باشند
              </p>
              <p className="alib font-thin text-blue-400 text-right my-1">
                برای خانم‌های متاهل و آقایان (بالای ۱۸ سال) که به تنهایی سفر
                می‌کنند، مدارک اضافی مورد نیاز است.
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setFaq4(!faq4)}
          className="faq4 ring-1 w-full flex flex-col justify-between items-center p-3"
        >
          <div className="title1 flex flex-row-reverse justify-between items-center w-full">
            <div className="titleR1 flex flex-row-reverse items-center w-5/6">
              <Image
                className="ml-2"
                src={'/icon/question.svg'}
                alt=""
                width={20}
                height={20}
              />
              <h2 className="alib">مدت زمان گرفتن ویزای دبی چقدر است؟</h2>
            </div>
            <div className="titleL1 w-1/6">
              {!faq4 && (
                <Image src={'/icon/down.svg'} alt="" width={22} height={22} />
              )}
              {faq4 && (
                <Image src={'/icon/up.svg'} alt="" width={22} height={22} />
              )}
            </div>
          </div>
          {faq4 && (
            <div className="desc1">
              <p className="alib font-thin text-blue-400 text-right my-1">
                پروسه اداری گرفتن ویزا 1 تا 3 روز کاری زمان می‌برد. امکان دارد
                در بعضی موارد برای بررسی بیشتر، این زمان تا ۱۰ روز کاری هم طول
                بکشد
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setFaq5(!faq5)}
          className="faq5 ring-1 w-full flex flex-col justify-between items-center p-3"
        >
          <div className="title1 flex flex-row-reverse justify-between items-center w-full">
            <div className="titleR1 flex flex-row-reverse items-center w-5/6">
              <Image
                className="ml-2"
                src={'/icon/question.svg'}
                alt=""
                width={20}
                height={20}
              />
              <h2 className="alib">
                مدارک موردنیاز برای گرفتن ویزای دبی چیست؟
              </h2>
            </div>
            <div className="titleL1 w-1/6">
              {!faq5 && (
                <Image src={'/icon/down.svg'} alt="" width={22} height={22} />
              )}
              {faq5 && (
                <Image src={'/icon/up.svg'} alt="" width={22} height={22} />
              )}
            </div>
          </div>
          {faq5 && (
            <div className="desc1">
              <p className="alib font-thin text-blue-400 text-right my-1">
                اسکن پاسپورت، اسکن کارت ملی، اسکن عکس پرسنلی، اسکن صفحه اول
                شناسنامه و اسکن صفحه دوم شناسنامه (اگر به‌صورت خانوادگی درخواست
                گرفتن ویزا داشته باشید)، مدارک اضافه‌تر در صورت نیاز از طریق
                کانتر به شما اعلام میشود
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setFaq6(!faq6)}
          className="faq6 ring-1 w-full flex flex-col justify-between items-center p-3"
        >
          <div className="title1 flex flex-row-reverse justify-between items-center w-full">
            <div className="titleR1 flex flex-row-reverse items-center w-5/6">
              <Image
                className="ml-2"
                src={'/icon/question.svg'}
                alt=""
                width={20}
                height={20}
              />
              <h2 className="alib">اعتبار ویزای دبی چقدر است؟</h2>
            </div>
            <div className="titleL1 w-1/6">
              {!faq6 && (
                <Image src={'/icon/down.svg'} alt="" width={22} height={22} />
              )}
              {faq6 && (
                <Image src={'/icon/up.svg'} alt="" width={22} height={22} />
              )}
            </div>
          </div>
          {faq6 && (
            <div className="desc1">
              <p className="alib font-thin text-blue-400 text-right my-1">
                اعتبار ویزای دبی از زمان اخذ تا ورود ۵۸ روز است. اگر در این بازه
                زمانی وارد دبی نشوید، ویزای شما منقضی می‌شود و باید مجددا وارد
                فرایند دریافت ویزا شوید. مدت زمان اقامت طبق درخواست متقاضی ۱۰
                روزه، یکماهه و یا دو ماهه می‌باشد
              </p>
              <p className="alib font-thin text-blue-400 text-right my-1">
                آژانس هیچگونه مسئولیتی در قبال ورود یا عدم ورود مسافر ندارد
              </p>
              <p className="alib font-thin text-blue-400 text-right my-1">
                در صورت صدور یک ویزا صادر نشده ویزای سایر افراد قرارداد موظف به
                انجام سفر می‌باشد
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setFaq7(!faq7)}
          className="faq7 ring-1 w-full flex flex-col justify-between items-center p-3"
        >
          <div className="title1 flex flex-row-reverse justify-between items-center w-full">
            <div className="titleR1 flex flex-row-reverse items-center w-5/6">
              <Image
                className="ml-2"
                src={'/icon/question.svg'}
                alt=""
                width={20}
                height={20}
              />
              <h2 className="alib">دلایل ریجکت شدن ویزا به چه صورت می‌باشد؟</h2>
            </div>
            <div className="titleL1 w-1/6">
              {!faq7 && (
                <Image src={'/icon/down.svg'} alt="" width={22} height={22} />
              )}
              {faq7 && (
                <Image src={'/icon/up.svg'} alt="" width={22} height={22} />
              )}
            </div>
          </div>
          {faq7 && (
            <div className="desc1">
              <p className="alib font-thin text-blue-400 text-right my-1">
                در صورت ریجکتی یا نگرفتن پرواز یا نرفتن سفر و یا دیپورت شدن یا
                بسته شدن مرز هزینه به هیچ عنوان استرداد نمی‌شود
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setFaq8(!faq8)}
          className="faq8 ring-1 w-full flex flex-col justify-between items-center p-3 rounded-b-lg"
        >
          <div className="title1 flex flex-row-reverse justify-between items-center w-full">
            <div className="titleR1 flex flex-row-reverse items-center w-5/6">
              <Image
                className="ml-2"
                src={'/icon/question.svg'}
                alt=""
                width={20}
                height={20}
              />
              <h2 className="alib">هزینه گرفتن ویزای دبی چقدر است؟</h2>
            </div>
            <div className="titleL1 w-1/6">
              {!faq8 && (
                <Image src={'/icon/down.svg'} alt="" width={22} height={22} />
              )}
              {faq8 && (
                <Image src={'/icon/up.svg'} alt="" width={22} height={22} />
              )}
            </div>
          </div>
          {faq7 && (
            <div className="desc1">
              <p className="alib font-thin text-blue-400 text-right my-1">
                با توجه به متغیر‌بودن نرخ ارز، برای اطلاع از هزینه اخذ هرکدام از
                انواع ویزاها می‌توانید با شماره 72317-021 تماس بگیرید تا همکاران
                ما، هزینه را به شما اعلام کنند
              </p>
              <p className="alib font-thin text-red-500 text-right my-1">
                هزینه به هیچ عنوان قابل استرداد نمی‌باشد
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Faq
