export function Counter({guestCountChange,guestsCount,field}) {
    return (
        <section className="guest-select-counter">

            <button type="button" className="counter-btn" onClick={() => guestCountChange(field, -1)} disabled={guestsCount[field] === 0}>-</button>
            <span>{guestsCount[field]}</span>
            <button type="button" className="counter-btn" onClick={() => guestCountChange(field, 1)} disabled={guestsCount[field] === 5}>+</button>

        </section>
    )
}