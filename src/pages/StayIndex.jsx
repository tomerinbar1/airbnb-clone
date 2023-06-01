import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadStays, saveStay, removeStay } from '../store/stay.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { stayServiceLocal } from '../services/stay.service.local.js'

import { StayList } from '../cmps/StayList.jsx'

export function StayIndex() {

    const isLoading = useSelector((storeState) => storeState.stayModule.isLoading)
    const stays = useSelector(storeState => storeState.stayModule.stays)
    useEffect(() => {
        loadStays()
    }, [])

    async function onRemoveStay(stayId) {
        try {
            await removeStay(stayId)
            showSuccessMsg('Stay removed')
        } catch (err) {
            showErrorMsg('Cannot remove stay')
        }
    }

    async function onAddStay() {
        const stay = stayServiceLocal.getEmptystay()
        stay.vendor = prompt('Vendor?')
        try {
            const savedStay = await saveStay(stay)
            showSuccessMsg(`Stay added (id: ${savedStay._id})`)
        } catch (err) {
            showErrorMsg('Cannot add stay')
        }
    }



    console.log(stays)

    return (
        <section className='index-container'>
        <section className='stays-filter-container'>

            {/* <button className='add-stay-btn'>
                <Link to={`/stay/edit`}>Add Stay</Link>
            </button> */}
        </section>

        {isLoading && <h4>Loading...</h4>}

        <StayList
            stays={stays}
            onRemoveStay={onRemoveStay}
        />
    </section>
    )
}