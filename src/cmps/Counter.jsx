export function Counter({ field, value = 0, onChange }) {

    function incrementCount() {
        onChange(field, value + 1)
    }

    function decrementCount() {
        onChange(field, value - 1)
    }

    return (
        <div className="counter-container flex">
            <button disabled={!value>0} className="counter-decrease-btn" onClick={decrementCount}>
              ➖
            </button>
            <p className="counter-value">{value}</p>
            <button className="counter-increase-btn" onClick={incrementCount}>
            ➕
            </button>
        </div>
    )
}

