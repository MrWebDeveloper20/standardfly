import React from 'react'
import Image from 'next/image'

const CardTrending = (props) => {
  return (
    <div className="Group126 lg:w-1/3 max-sm:w-full h-96 relative">
      <div className="Frame43 flex flex-row justify-center h-96 max-sm:w-full ">
        <div className="Frame90 w-80 h-96 left-7 top-0 absolute gap-2.5 inline-flex">
          <div className="Frame88 w-80 h-96 relative bg-blue-100">
            <Image
              alt=""
              width={500}
              height={100}
              className="Rectangle769 w-96 h-64 left-0 top-[0.50px] absolute"
              src={props.imgTrendCard}
            />
            <div className="Rectangle770 w-80 h-72 left-0 top-[264.50px] absolute bg-blue-100" />
            <div className="DateTimeClockFive w-6 h-6 left-[18px] top-[473.15px] absolute" />
            <div className="VisitingIstanbulAndCharmingMediterraneanCities w-80 h-20 left-[7px] top-[327px] absolute text-neutral-700 text-xl font-semibold font-['Montserrat'] capitalize leading-normal">
              {props.cardDesc}
              <div className="star mt-4 flex flex-row">
                <Image alt="" src={'/icon/star.svg'} width={20} height={20} />
                <Image alt="" src={'/icon/star.svg'} width={20} height={20} />
                <Image alt="" src={'/icon/star.svg'} width={20} height={20} />
                <Image alt="" src={'/icon/star.svg'} width={20} height={20} />
                <Image alt="" src={'/icon/star.svg'} width={20} height={20} />
              </div>
            
            </div>
            
            <div className="Reviews w-20 h-6 left-[17px] top-[446px] absolute opacity-50 text-red-500 text-base font-semibold font-['Lato'] capitalize">
              {props.cardViews} reviews{' '}
            </div>
            <div className="Group43 w-36 left-[32px] top-[495.45px] absolute">
              <div className="ClockFive w-5 h-5 left-0 top-[2.05px] absolute">
                <Image alt="" src={'/icon/clock.svg'} width={30} height={30} />
              </div>
              <div className="Days2Nights w-32 h-6 left-[26px] top-0 absolute text-black text-base font-normal font-['Lato'] leading-normal">
                {props.cardDay} days & {props.cardNight} nights{' '}
              </div>
            </div>
            <div className="Group34 w-38 h-6 left-[17px] top-[274px] absolute">
              <Image alt="" src={'/icon/location.svg'} width={20} height={20} />{' '}
              
              <div className="Turkey ml-3 w-24 h-2.5 left-[2px] -top-[1px] absolute text-black text-opacity-75 text-lg font-normal font-['Montserrat'] capitalize">
                {props.cardCountry}
              </div>
              <div className="Text left-[108px] top-0 absolute text-black text-xs font-normal font-['Montserrat'] capitalize">
                {' '}
              </div>
            </div>
            <div className="Group33 w-36 h-6 left-[17px] top-[412px] absolute"></div>
            <div className="MediterraneanFrom1200 w-48 h-14 left-[85px] top-[114px] absolute text-center">
              <span className="text-white text-opacity-80 text-2xl font-semibold font-['Inter'] leading-normal">
                Mediterranean <br />
                from{' '}
              </span>
              <span className="text-white text-3xl font-semibold font-['Inter'] leading-loose">
                ${props.cardPrice}
              </span>
            </div>
            
          </div>
        </div>
        <div className="Frame100 p-2.5 left-[205px] top-[474px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="Button px-5 w-28 py-4 bg-red-500 rounded-md justify-start items-start gap-2 inline-flex">
            <div className="Button text-white text-base font-semibold font-['Inter'] leading-none">
              View Tour
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTrending
