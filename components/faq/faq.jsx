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
  return (
    <div className="bg-slate-900 flex flex-col lg:w-4/5 my-3 ring-2 rounded-lg">
      <h2 className="alib fontcolor py-3 text-blue-600">سوالات شما</h2>
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
              <h2 className="alib fontcolor">
                چند روز قبل از پرواز، بلیط هواپیما را بخریم؟
              </h2>
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
              <p className="alir fontcolor font-thin text-blue-400 text-right my-1">
                امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات
                قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود.
                بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط
                هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر
                در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط
                هواپیما را انجام دهید
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
              <h2 className="alib fontcolor">در هر پرواز، میزان بار مجاز چقدر است؟</h2>
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
              <p className="alir fontcolor font-thin text-blue-400 text-right my-1">
                میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام
                خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات
                بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد،
                باید جریمه پرداخت کنید
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
              <h2 className="alib fontcolor">
                نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟
              </h2>
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
              <p className="alir fontcolor font-thin text-blue-400 text-right my-1">
                نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد.
                به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی
                100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10
                درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه
                داشته باشید
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
              <h2 className="alib fontcolor">
                رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟
              </h2>
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
              <p className="alir fontcolor font-thin text-blue-400 text-right my-1">
                خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید
                می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است
                تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی
                نیز برخودار هستید
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
              <h2 className="alib fontcolor">
                آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟
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
              <p className="alir fontcolor font-thin text-blue-400 text-right my-1">
                وقتی از روژانو یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را
                رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت
                کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین
                بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع
                بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد
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
              <h2 className="alib fontcolor">
                آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی
                وجود دارد؟
              </h2>
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
              <p className="alir fontcolor font-thin text-blue-400 text-right my-1">
                در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط
                سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این
                تغییر را می‌پذیرند
              </p>
            </div>
          )}
        </div>

        <div
          onClick={() => setFaq7(!faq7)}
          className="faq7 ring-1 w-full flex flex-col justify-between items-center p-3 rounded-b-lg"
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
              <h2 className="alib fontcolor">
                هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم،
                امکان انتخاب صندلی مورد نظرمان وجود دارد؟
              </h2>
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
              <p className="alir fontcolor font-thin text-blue-400 text-right my-1">
                خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی
                وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر
                است
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Faq
