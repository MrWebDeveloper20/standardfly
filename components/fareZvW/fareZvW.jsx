import { useState, useEffect } from 'react'

const FareZvW = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [fare, setFare] = useState('')

  useEffect(() => {
    const fare = fetch(
      '/api/fare?from=' +
        props.from +
        '&to=' +
        props.to +
        '&date=' +
        props.date +
        '&flightNo=' +
        props.flightNo
    )
      .then((res) => res.json())
      .then((data) => {
        setFare(data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      {fare.BaggageAllowanceWeight}
    </div>
  )
}

export default FareZvW
