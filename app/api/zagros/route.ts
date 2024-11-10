import axios from 'axios'

const Availability ='http://api.zagrosairlines.com/ws1/AvailabilityJS.jsp?AirLine=ZV&cbSource=THR&cbTarget=MHD&cbDay1=25&cbMonth1=04&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'
const AvailabilityFare = 'http://api.zagrosairlines.com/ws1/AvailabilityFareJS.jsp?AirLine=ZV&cbSource=THR&cbTarget=MHD&cbDay1=25&cbMonth1=04&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'
const Fare = 'http://api.zagrosairlines.com/ws1/FareJS.jsp?AirLine=ZV&Route=THR-MHD&RBD=NK&FlightClassRet=NK&DiscountCode&DepartureDate=2024-07-15&4091&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'
const Reserve = 'http://api.zagrosairlines.com/ws1/ReserveJS.jsp?AirLine=ZV&cbSource=THR&cbTarget=MHDFlightNo=4091&Day=25&Month=04&No=1&edtName1=TEST&edtLast1=TEST&edtAge1=29&I_IRN_3255425263_IRN_25DEY61_M_25DEY61_TEST_TEST&edtContact=09181301683&OfficeUser=THR639.WS&OfficePass=ASEMAN2024&DepartureDate=2024-07-15&FlightClass=NK'
const CancelPNR = 'http://api.zagrosairlines.com/ws1/CancelPNRJS?Airline=ZV&PNR=QHGTA&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'
const ETIssue = 'http://api.zagrosairlines.com/ws1/ETIssueJS?AirLine=ZV&PNR=QJHGY&EMail=TEST@NIRASOFT.IR&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'
const TicketPrint = 'http://api.zagrosairlines.com/ws1/TicketPrint.aspx?TicketNo=0002445149767&lang=FA&OC=THR639.WS&PNR=SFK3K'
const ETR = 'http://api.zagrosairlines.com/ws1/NRSETR.jsp?AirLine=ZV&TicketNo=2373403457187&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'
const CancelSeat = 'http://api.zagrosairlines.com/ws1/CancelSeatJS?Airline=ZV&PNR=QRKH6&PassengerName=TEST&PassengerLastName=TEST&DepartureDate=2024-07-15&FlightNo=4091&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'
const NRSPenaltyNow = 'http://api.zagrosairlines.com/ws1/NRSPenaltyNow.jsp?AirLine=ZV&TicketNo=2373403457187&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'
const ETRefund = 'http://api.zagrosairlines.com/ws1/ETRefundJS?AirLine=ZV&TicketNo=2325803457187&Fare=10563000&KU=1,057,000&LP=70000&Penalty=4225200&OfficeUser=THR639.WS&OfficePass=ASEMAN2024'

export async function GET() {
  const res = await fetch(Availability, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  })
  const data = await res.json()
 
  return Response.json(data)
}


// export async function GET() {
//   await axios
//     .get(api)
//     .then((response) => {
//       console.log('Data received:', response.data)
//     })
//     .catch((error) => {
//       if (error.response) {
//         console.error(`HTTP error: ${error.response.status}`)
//       } else if (error.request) {
//         console.error('Request error: No response received')
//       } else {
//         console.error('Error:', error.message)
//       }
//     })
// }

// export async function getStaticProps() {
//   const response = await axios.get('Zv.nirasoftware.com:882/AvailabilityJS.jsp? AirLine=ZV& cbSource=THR&cbTarget=MHD&cbDay1=1&cbMonth1=11&cbAdultQty=1&cbChil dQty=0&cbInfantQty=0&OfficeUser= THR639.WS &OfficePass= ASEMAN2024');
//   const posts = response.data;

//   console.log(posts)

//   // return {
//   //   props: {
//   //     posts,
//   //   },
//   // };
// }
