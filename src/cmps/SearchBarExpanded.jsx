import { useEffect, useState } from "react"
import { stayServiceLocal } from "../services/stay.service.local"
import { loadStays } from "../store/stay.actions"
import { LocationSelect } from "./LocationSelect"
import { StayFilterByTxt } from "./StayFilterByTxt"
import { GuestSelect } from "./GuestSelect"


export function SearchBarExpanded({ selectedTab, setSelectedTab, isSearchOpen }) {
    const [filterBy, setFilterBy] = useState(stayServiceLocal.getDefaultFilter())

    useEffect(() => {
        loadStays(filterBy)
        console.log(filterBy)
    }, [filterBy])


    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
        if (filterBy.txt.length > 0) setSelectedTab("")
    }

    const onChangeTxt = (value) => {
        console.log(filterBy);
        onSetFilter({ ...filterBy, txt: value })
    }
    // Build function for each inputs
    // pass the value of the input / select to parent component
    // parent component will set the filter
    // the parent component will submit the filter.


    const submitFilter = (ev) => {
        ev.preventDefault()
    }

    const dynClass = isSearchOpen ? "" : "folded"
    return (
        <form onSubmit={submitFilter} className={`expanded-search-bar ${dynClass}`}>

            <div onClick={() => setSelectedTab("location")} className="location">
                <h3>Where</h3>
                <StayFilterByTxt onChangeTxt={onChangeTxt} onSetFilter={onSetFilter} />

            </div>
            {(selectedTab === 'location' && isSearchOpen) && <LocationSelect dynClass={dynClass} />}

            <div onClick={() => setSelectedTab("checkIn")} className="check-in">
                <h3>Check in</h3>
                <div>Add dates</div>
            </div>

            {(selectedTab === "checkIn" && isSearchOpen) && <div className={`check-in-pick  ${dynClass}`}></div>}

            <div onClick={() => setSelectedTab("checkIn")} className="check-out">
                <h3>Check out</h3>
                <div>Add dates</div>
            </div>

            <div onClick={() => setSelectedTab("guest")} className="guests">
                <div>
                    <h3 className="guests-txt">Who</h3>
                    <div>Add guests</div>
                </div>



                <button type="submit" className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>

            {(selectedTab === "guest" && isSearchOpen) && <div className={`guests-pick  ${dynClass}`}>
                <GuestSelect />
            </div>}
        </form>

    )
}
