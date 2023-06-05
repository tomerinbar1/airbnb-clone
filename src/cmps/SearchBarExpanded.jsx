import { useEffect, useState } from "react"
import { stayServiceLocal } from "../services/stay.service.local"
import { loadStays } from "../store/stay.actions"
import { LocationSelect } from "./LocationSelect"
import { StayFilter } from "./StayFilter"
import { GuestSelect } from "./GuestSelect"


export function SearchBarExpanded({ selectedTab, setSelectedTab, isSearchOpen }) {
    const [filterBy, setFilterBy] = useState(stayServiceLocal.getDefaultFilter())

    useEffect(() => {
        loadStays(filterBy)
        // setSelectedTab("")
        console.log(filterBy)
    }, [filterBy])

    function onSetFilter(filterBy) {

        setFilterBy(filterBy)
        if (filterBy.txt.length > 0) setSelectedTab("")
        // setSelectedTab("")
    }

    function handleSearchType(type) {
    }

    const dynClass = isSearchOpen ? "expand" : "folded"
    return (
        <div className={`expanded-search-bar ${dynClass}`}>

            <div onClick={() => setSelectedTab("location")} className="location">
                <h3>Where</h3>
                <StayFilter onSetFilter={onSetFilter} />

            </div>
            {/* {selectedTab === 'location' && <div className={`locatin-pick  ${dynClass}`}></div>} */}
            {selectedTab === 'location' && <LocationSelect dynClass={dynClass} />}

            <div onClick={() => setSelectedTab("checkIn")} className="check-in">
                <h3>Check in</h3>
                <div>Add dates</div>

            </div>

            {selectedTab === "checkIn" && <div className={`check-in-pick  ${dynClass}`}></div>}

            <div onClick={() => setSelectedTab("checkIn")} className="check-out">
                <h3>Check out</h3>
                <div>Add dates</div>
            </div>

            <div onClick={() => setSelectedTab("guest")} className="guests">
                <div>
                    <h3 className="guests-txt">Who</h3>
                    <div>Add guests</div>
                </div>



                <button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>

            {selectedTab === "guest" && <div className={`guests-pick  ${dynClass}`}>
                <GuestSelect />
            </div>}
        </div>

    )
}
