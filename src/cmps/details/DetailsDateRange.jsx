import { useState, useEffect } from 'react'
import { stayService } from '../../services/stay.service'
import { useParams } from 'react-router-dom'
import { DayPicker } from 'react-day-picker'

export const DetailsDateRange = ({ checkIn, checkOut }) => {
  const [fromValue, setFromValue] = useState(
    checkIn ? new Date(parseInt(checkIn)) : undefined
  )
  const [toValue, setToValue] = useState(
    checkOut ? new Date(parseInt(checkOut)) : undefined
  )
  const [stay, setStay] = useState(null)
  const { stayId } = useParams()

  useEffect(() => {
    getStay()
  }, [])

  async function getStay() {
    const stay = await stayService.getById(stayId)
    setStay(stay)
  }

  const onChangeDates = date => {
    if (fromValue && toValue) {
      setToValue(undefined)
      setFromValue(date)
      return
    }
    if (!fromValue) {
      setFromValue(date)
    }

    if (!toValue && fromValue) {
      setToValue(date)
    }

    // const fromValueTimeStmp = new Date(value.from).getTime()
    // const toValueTimeStmp = Date.parse(value.to)
    // onSetFilter({
    //   ...filterBy,
    //   checkIn: fromValueTimeStmp,
    //   checkOut: toValueTimeStmp,
    // })
  }

  function nightCount(checkIn, checkOut) {
    const oneDay = 24 * 60 * 60 * 1000
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    const diffDays = Math.round(Math.abs((checkOutDate - checkInDate) / oneDay))
    return diffDays
  }

  const getDateToDisplay = timestamp => {
    const date = new Date(timestamp)

    const options = { month: 'short', day: 'numeric', year: 'numeric' }
    return date.toLocaleDateString('en-US', options)
  }

  if (!stay) return <div>Loading...</div>
  return (
    <div className="date-range-wrapper">
      <div className="date-range-header">
        <h1>
          {fromValue && toValue
            ? `${nightCount(fromValue, toValue)} nights in ${stay.loc.city}`
            : 'Select check-in date'}
        </h1>
        <h5>
          {fromValue && toValue
            ? `${getDateToDisplay(fromValue)} - ${getDateToDisplay(toValue)}`
            : 'Add your travel dates for exact pricing'}
        </h5>
      </div>
      <DayPicker
        mode="range"
        onDayClick={onChangeDates}
        selected={{ from: fromValue, to: toValue }}
        numberOfMonths={2}
      />
      <a
        onClick={() => {
          setFromValue(undefined)
          setToValue(undefined)
        }}
      >
        Clear dates
      </a>
    </div>
  )
}
