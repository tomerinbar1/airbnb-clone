
import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service.js"
import { stayServiceLocal } from "../services/stay.service.local.js"


export function StayFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(stayServiceLocal.getDefaultFilter())

    onSetFilter = useRef(utilService.debounce(onSetFilter))

    const elInputRef = useRef(null)

    useEffect(() => {
        elInputRef.current.focus()
    }, [])

    useEffect(() => {
        // update father cmp that filters change very type
        onSetFilter.current(filterByToEdit)
        // eslint-disable-next-line
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitFilter(ev) {
        // update father cmp that filters change on submit
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }


    return <section className="stay-filter">
        {/* <h2>Stays Filter</h2> */}
        <form onSubmit={onSubmitFilter}>
            <input type="text"
                id="txt"
                name="txt"
                placeholder="Where are you going?"
                onChange={handleChange}
                ref={elInputRef}
            />

            {/* <label htmlFor="maxPrice">Max price:</label>
            <input type="number"
                id="maxPrice"
                name="maxPrice"
                placeholder="By max price"
                value={filterByToEdit.maxPrice}
                onChange={handleChange}
            />


            <label htmlFor="maxPrice">Sort Stays:</label>
            <select className="filter-by-inStock" onChange={handleChange} name="inStock" id="inStock"  >
                <option value="all">All</option>
                <option value="inStock">Available</option>
                <option value="notInStock">Not Available</option>
            </select>


            <button hidden>Filter</button> */}
        </form>

    </section>
}