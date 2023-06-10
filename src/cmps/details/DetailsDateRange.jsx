import { useState, useEffect } from 'react'
import { DateSelect } from '../DateSelect'
import { stayService } from '../../services/stay.service'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'

export const DetailsDateRange = () => {
  const [selected, setSelected] = useState([])
  let [fromValue, setFromValue] = useState('')
  let [toValue, setToValue] = useState('')
  const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
  const [stay, setStay] = useState(null)
  const { stayId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [checkIn, setCheckIn] = useState(null)
  const [checkOut, setCheckOut] = useState(null)

  if (checkIn && checkOut) {
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    setCheckIn(checkIn)
    setCheckOut(checkOut)
  }

  useEffect(() => {
    getStay()
  }, [])


  async function getStay() {
    const stay = await stayService.getById(stayId)
    setStay(stay)
  }

  function onSetFilter(filterBy) {
    setFilterBy(filterBy)
  }

  const onChangeDates = value => {
    const fromValueTimeStmp = new Date(value.checkIn).getTime()
    const toValueTimeStmp = Date.parse(value.checkOut)
    onSetFilter({
      ...filterBy,
      checkIn: fromValueTimeStmp,
      checkOut: toValueTimeStmp,
    })
  }


  function nightCount(checkIn, checkOut) {
    const oneDay = 24 * 60 * 60 * 1000
    const checkInDate = new Date(parseInt(checkIn))
    const checkOutDate = new Date(parseInt(checkOut))
    const diffDays = Math.round(Math.abs((checkOutDate - checkInDate) / oneDay))
    return diffDays
  }

  const getFromYear = () => {
    const checkInDate = new Date(parseInt(checkIn))
    const fromYear = checkInDate.getFullYear()
    return fromYear
  }

  const getToYear = () => {
    const checkOutDate = new Date(parseInt(checkOut))
    const toYear = checkOutDate.getFullYear()
    return toYear
  }

  if (!stay) return <div>Loading...</div>
  return (
    <div className="date-range-wrapper">
      <div className="date-range-header">
        <h1>
          {checkIn && checkOut
            ? `${nightCount(checkIn, checkOut)} nights in ${stay.loc.city}`
            : 'Select check-in date'}
        </h1>
        <h5>
          {checkIn && checkOut
            ? `${fromValue}, ${getFromYear()} - ${toValue}, ${getToYear()}`
            : 'Add your travel dates for exact pricing'}
        </h5>
      </div>

      <DateSelect
        fromValue={fromValue}
        setFromValue={setFromValue}
        toValue={toValue}
        setToValue={setToValue}
        setSelected={setSelected}
        selected={selected}
        onChangeDates={onChangeDates}
      />
   <a onClick={() => { setFromValue(''); setToValue(''); }}>Clear dates</a>
    </div>
  )
}
