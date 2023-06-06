import { useState } from "react"
import { Counter } from "./Counter"

export function GuestSelect() {
    const [guestsCount, setGuestsCount] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    })

    const guestSelectOptions = [
        {
            label: 'Adults',
            subLabel: 'Ages 13 or above',
            field: 'adults'
        },
        {
            label: 'Children',
            subLabel: 'Ages 2-12',
            field: 'children'
        },
        {
            label: 'Infants',
            subLabel: 'Under 2',
            field: 'infants'
        },
        {
            label: 'Pets',
            subLabel: <a href="">Bringing a Service Animal?</a>,
            field: 'pets'
        }
    ]


    function guestCountChange(type, value) {
        setGuestsCount((prevGuestCounts) => ({ ...prevGuestCounts, [type]: prevGuestCounts[type] + value }))
        const capacityTotal = guestsCount.adults + guestsCount.children
        // setFilterBy((prevFilter) => ({ ...prevFilter, capacity: capacityTotal, guests: guestsCount }))
    }

    return (
        <div className='guest-select-container'>
            {guestSelectOptions.map((option, idx) => {
                return (
                    <div className="guest-select-row" key={idx}>
                        <div className="guest-select-label">
                            <div className="guest-select-title">{option.label}</div>
                            <div className="guest-select-sub-title">{option.subLabel}</div>
                        </div>
                        <Counter guestCountChange={guestCountChange} guestsCount={guestsCount} field={option.field}/>
                    </div>
                )
            })}
        </div>)
}