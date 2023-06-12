import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStays } from '../store/stay.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

import { StayList } from '../cmps/StayList.jsx'
import { LabelsFilter } from '../cmps/LabelsFilter.jsx'
import { useLocation } from 'react-router-dom'
import { setStayId } from '../store/stay.actions.js'


export function StayIndex() {
  // const [stay, setStay] = useState(null)
  const isLoading = useSelector(storeState => storeState.stayModule.isLoading)
  const stays = useSelector(storeState => storeState.stayModule.stays)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  // const i = Object.fromEntries(searchParams.entries())
  const { type, txt, location: locationFromParams, totalGuests: totalGuestsFromParams, checkIn: checkinFromParams, checkOut: checkOutFromParams } = Object.fromEntries(searchParams.entries())

  useEffect(() => {
    const filterBy = { type, txt, location: locationFromParams, guests: totalGuestsFromParams, checkIn: checkinFromParams, checkOut: checkOutFromParams }
    // console.log('filterBy', filterBy)
    loadStays(filterBy)
  }, [type, txt, locationFromParams, totalGuestsFromParams, checkinFromParams, checkOutFromParams])

  useEffect(() => {
    setStayId(null)
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <section className="index-container">
      <LabelsFilter />
      <StayList stays={stays} />
    </section>
  )
}
