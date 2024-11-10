import React from 'react'
import CardTrending from '@/components/ourTrending/trendingCard'

const OurTrending = () => {
  return (
    <div className="flex flex-col justify-start items-center lg:w-10/12 max-sm:w-full mx-auto mt-5 lg:h-[1500px] max-sm:h-[3600px] mb-[600px]">
           
      <div className="card flex flex-col w-full lg:h-[1500px] max-sm:h-[3600px]">
        <div className="cardTop  flex lg:flex-row max-sm:flex-col w-full h-auto ">
          <div className="card1 lg:w-1/3 max-sm:w-full lg:h-auto max-sm:h-[600px] ">
            <CardTrending imgTrendCard='/images/card1.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>

          <div className="card2 w-1/3 max-sm:w-full lg:h-auto max-sm:h-[600px]">
            <CardTrending imgTrendCard='/images/card2.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>

          <div className="card3 w-1/3 max-sm:w-full lg:h-auto max-sm:h-[600px]">
            <CardTrending imgTrendCard='/images/card3.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>
        </div>

        <div className="cardBut lg:mt-48 flex lg:flex-row max-sm:flex-col w-full h-auto ">
          <div className="card4 w-1/3 max-sm:w-full lg:h-auto max-sm:h-[600px]">
            <CardTrending imgTrendCard='/images/card4.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>

          <div className="card5 w-1/3 max-sm:w-full lg:h-auto max-sm:h-[600px]">
            <CardTrending imgTrendCard='/images/card5.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>

          <div className="card6 w-1/3 max-sm:w-full lg:h-auto max-sm:h-[600px]">
            <CardTrending imgTrendCard='/images/card6.jpg' cardCountry='Turkey' cardDesc='visiting istanbul and charming mediterranean cities' cardPrice='1200' cardViews='48' cardDay='2' cardNight='3'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTrending



