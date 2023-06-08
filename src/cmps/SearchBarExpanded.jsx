import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { stayService } from "../services/stay.service"
import { loadStays } from "../store/stay.actions"
import { LocationSelect } from "./LocationSelect"
import { StayFilterByTxt } from "./StayFilterByTxt"
import { GuestSelect } from "./GuestSelect"
import { DateSelect } from "./DateSelect"
import fi from "date-fns/locale/fi"


export function SearchBarExpanded({ selectedTab, setSelectedTab, isSearchOpen, staySearchParams }) {
    const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
    const navigate = useNavigate()
    const [guestsCount, setGuestsCount] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    })


    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
        if (filterBy.txt.length > 0) setSelectedTab("")
    }



    const onChangeTxt = (value) => {
        onSetFilter({ ...filterBy, txt: value })
    }

    const onChangeLocation = (value) => {
        if (value === "I'm flexible") value = ""
        onSetFilter({ ...filterBy, location: value })
    }

    const onChangeGuests = (value) => {
        const totalCount = Object.values(value).reduce((acc, curr) => acc + curr)
        onSetFilter({ ...filterBy, guests: totalCount })
    }




    const getGuestsSubTitleCount = (guestsCount) => {
        const { adults, children, infants, pets } = guestsCount
        const totalGuests = adults + children + infants + pets
        var guestSubTitle = ''
        if (!totalGuests) guestSubTitle = 'Add guests'

        if (adults) guestSubTitle += `${guestsCount.adults} adults`
        if (children) guestSubTitle += `, ${guestsCount.children} children`
        if (infants) guestSubTitle += `, ${guestsCount.infants} infants`
        if (pets) guestSubTitle += `, ${guestsCount.pets} pets`

        if (guestSubTitle.includes('1 adults' || '1 children' || '1 infants' || '1 pets')) {
            guestSubTitle = guestSubTitle.replace('1 adults', '1 adult')
            guestSubTitle = guestSubTitle.replace('1 children', '1 child')
            guestSubTitle = guestSubTitle.replace('1 infants', '1 infant')
            guestSubTitle = guestSubTitle.replace('1 pets', '1 pet')
        }
        return guestSubTitle
    }




    function checkForActiveClass(category) {
        return (selectedTab === category) ? ' active' : ''
    }

    const submitFilter = (ev) => {
        ev.preventDefault()
        navigate(`/?txt=${filterBy.txt}&location=${filterBy.location}&guests=${filterBy.guests || 1}`)
    }

    const dynClass = isSearchOpen ? "" : "folded"
    console.log(selectedTab);
    return (
        <form onSubmit={submitFilter} className={`expanded-search-bar ${dynClass}`}>

            <div onClick={() => setSelectedTab("location")} className={`location  ${checkForActiveClass("location")}`}>
                <h3>Where</h3>
                <StayFilterByTxt onChangeTxt={onChangeTxt} />
            </div>
            {(selectedTab === 'location' && isSearchOpen) && <LocationSelect onChangeLocation={onChangeLocation} />}


            <div onClick={() => setSelectedTab("checkIn")} className={`check-in  ${checkForActiveClass("checkIn")} `}>
                <h3>Check in</h3>
                <div>Add dates</div>
            </div>
            {(selectedTab === "checkIn" && isSearchOpen) && <DateSelect />}


            <div onClick={() => setSelectedTab("checkOut")} className={`check-out  ${checkForActiveClass("checkOut")} `}>
                <h3>Check out</h3>
                <div>Add dates</div>
            </div>
            {/* {(selectedTab === "checkOut" && isSearchOpen) && <div className={`check-in-pick  ${dynClass}`}></div>} */}
            {(selectedTab === "checkOut" && isSearchOpen) && <DateSelect />}



            <div onClick={() => setSelectedTab("guest")} className={`guests  ${checkForActiveClass("guest")} `}>
                <div>
                    <h3 className="guests-txt">Who</h3>
                    <div>{getGuestsSubTitleCount(guestsCount)}</div>
                </div>
            </div>

            <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {(selectedTab === "guest" && isSearchOpen) && <div className={`guests-pick  ${dynClass}`}>
                <GuestSelect
                    onChangeGuests={onChangeGuests}
                    guestsCount={guestsCount}
                    setGuestsCount={setGuestsCount}
                />
            </div>}


        </form>

    )
}
