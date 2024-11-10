export async function GET(req) {
  // console.log('req', req)
  const url = req.nextUrl.searchParams
  // console.log('url', url)
  const from = url.get('from')
  // console.log('aaaaaaa', from)
  const to = url.get('to')
  // console.log('bbbbbbb', to)
  const day = url.get('day')
  // console.log('gggggg', day)
  const monthNum = url.get('monthNum')
  // console.log('oooooo', monthNum)
  // const adult = url.get('adult')
  // console.log('ssssss', adult)
  // const child = url.get('child')
  // console.log('zzzzzz', child)
  // const infant = url.get('infant')
  // console.log('xxxxxxxx', infant)

  const res = await fetch(
    `http://api.zagrosairlines.com/ws1/AvailabilityJS.jsp?AirLine=ZV&cbSource=${from}&cbTarget=${to}&cbDay1=${day}&cbMonth1=${monthNum}&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR639.WS&OfficePass=ASEMAN2024`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  )
  // const data = await res.json()
  const data = await res.json()
  // console.log('dtaaaaa:', data)
  //  console.log('yyyyyyyyy',`http://api.zagrosairlines.com/ws1/AvailabilityJS.jsp?AirLine=ZV&cbSource=${from}&cbTarget=${to}&cbDay1=25&cbMonth1=05&cbAdultQty=1&cbChildQty=0&cbInfantQty=0&OfficeUser=THR639.WS&OfficePass=ASEMAN2024`)
  return Response.json(data)
}
