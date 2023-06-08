
// import { useEffect, useRef, useState } from "react"
import { utilService } from "../services/util.service.js"
// import { stayServiceLocal } from "../services/stay.service.local.js"


export function StayFilterByTxt({onChangeTxt}) {
    // const [filterByToEdit, setFilterByToEdit] = useState(stayServiceLocal.getDefaultFilter())

    // onSetFilter = useRef(utilService.debounce(onSetFilter))

    // const elInputRef = useRef(null)

    // useEffect(() => {
    //     elInputRef.current.focus()
    // }, [])

    // useEffect(() => {
    //     onSetFilter.current(filterByToEdit)
    // }, [filterByToEdit])

    // function handleChange({ target }) {
    //     const field = target.name
    //     const value = target.type === 'number' ? (+target.value || '') : target.value
    //     setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    // }

    // const onSubmitFilter = (ev) => {
    //     ev.preventDefault()
    //     onSetFilter(filterByToEdit)
    // }


    return <section className="stay-filter">
        {/* <form onSubmit={onSubmitFilter}> */}
            <input type="text"
                id="txt"
                name="txt"
                placeholder="Where are you going?"
                // onChange={handleChange}
                onChange={({target}) => utilService.debounce(onChangeTxt(target.value))}
                // ref={elInputRef}
            />
        {/* </form> */}

    </section>
}