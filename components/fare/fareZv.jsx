import { useState, useEffect } from 'react'

const FareZv = (props) => {
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
      {props.adult *
        (Math.floor((fare?.AdultTotalPrice ) / 1000) * 1000) +
        props.child * (Math.floor(fare?.ChildFare / 1000) * 1000) +
        props.infant *
          (Math.floor((fare?.InfantTotalPrice * 1.18943) / 1000) * 1000)}
    </div>
  )
}

export default FareZv
