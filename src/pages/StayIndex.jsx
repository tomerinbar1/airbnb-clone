import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStays, saveStay, removeStay } from '../store/stay.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

import { StayList } from '../cmps/StayList.jsx'
import { LabelsFilter } from '../cmps/LabelsFilter.jsx'
import { useLocation, useParams } from 'react-router-dom'


export function StayIndex() {
  const [stay, setStay] = useState(null)
  const isLoading = useSelector(storeState => storeState.stayModule.isLoading)
  const stays = useSelector(storeState => storeState.stayModule.stays)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const { txt, location: locationFromParams } = Object.fromEntries(searchParams.entries())

  useEffect(() => {
    const filterBy = { txt, location: locationFromParams }
    loadStays(filterBy)
  }, [txt, locationFromParams])

  if (isLoading) return <div>Loading...</div>

  return (
    <section className="index-container">
      <LabelsFilter />
      <StayList stays={stays} />
    </section>
  )
}
