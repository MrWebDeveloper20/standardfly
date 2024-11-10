export async function GET(req) {
  const url = req.nextUrl.searchParams
  const from = url.get('from')
  const to = url.get('to')
  const date = url.get('date')
  const flightNo = url.get('flightNo')

  const res = await fetch(
    `http://api.zagrosairlines.com/ws1/FareJS.jsp?AirLine=ZV&Route=${from}-${to}&RBD=NK&FlightClassRet=NK&DiscountCode&DepartureDate=${date}&${flightNo}&OfficeUser=THR639.WS&OfficePass=ASEMAN2024`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  )

  const data = await res.json()

  return Response.json(data)
}
