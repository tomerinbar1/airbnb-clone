import {Counter} from "./Counter"
export function GuestSelect({dynClass}) {

    function handleChange(field, value) {
        if (value <= 0) value = 0
        if (field === 'adults') {
        }
        if (field === 'children') {
        }
        if (field === 'infants') {
        }
        if (field === 'pets') {
        }
    }

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

    return (
        <div className='guest-select-container'>
        {guestSelectOptions.map((option, idx) => {
            return (
                <div className="guest-select-row" key={idx}>
                    <div className="guest-select-label">
                        <div className="guest-select-title">{option.label}</div>
                        <div className="guest-select-sub-title">{option.subLabel}</div>
                    </div>
                        <Counter field={option.field} onChange={handleChange} />
                </div>
            )
        })}
        </div>)
}