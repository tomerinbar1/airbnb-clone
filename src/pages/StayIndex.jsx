import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadStays, saveStay, removeStay } from '../store/stay.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stayServiceLocal } from '../services/stay.service.local.js'

import { StayList } from '../cmps/StayList.jsx'
import { LabelsFilter } from '../cmps/LabelsFilter.jsx'


export function StayIndex() {
  const [stay, setStay] = useState(null)
  const isLoading = useSelector(storeState => storeState.stayModule.isLoading)
  const stays = useSelector(storeState => storeState.stayModule.stays)

  useEffect(() => {
    loadStays()
  }, [])

 

  if (isLoading) return <div>Loading...</div>

  return (
    <section className="index-container">
      <LabelsFilter/>
      <StayList stays={stays} />
    </section>
  )
}
