import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { stayService } from "../services/stay.service"
import { LocationSelect } from "./LocationSelect"
import { StayFilterByTxt } from "./StayFilterByTxt"
import { GuestSelect } from "./GuestSelect"
import { DateSelect } from "./DateSelect"


export function SearchBarExpanded({ selectedTab, setSelectedTab, isSearchOpen }) {
    const navigate = useNavigate()

    const [selected, setSelected] = useState([])
    const [fromValue, setFromValue] = useState('')
    const [toValue, setToValue] = useState('')
    const [filterBy, setFilterBy] = useState(stayService.getDefaultFilter())
    const [guestsCount, setGuestsCount] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    })

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
        // if (filterBy.txt.length > 0) setSelectedTab("")
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

    const onChangeDates = (value) => {
        const fromValueTimeStmp = new Date(value.checkIn).getTime()
        const toValueTimeStmp = Date.parse(value.checkOut)
        onSetFilter({ ...filterBy, checkIn: fromValueTimeStmp, checkOut: toValueTimeStmp })
    }


    const getGuestsSubTitleCount = (guestsCount) => {
        const { adults, children, infants, pets } = guestsCount
        var guestSubTitle = ''
        const totalGuests = adults + children
        if (!totalGuests) {
            guestSubTitle = 'Add guests'
            return guestSubTitle
        }
        guestSubTitle += `${totalGuests} ${totalGuests > 1 ? 'guests' : 'guest'}`
        if (infants) {
            guestSubTitle += ` ,${infants} ${infants > 1 ? 'infants' : 'infant'}`
        }
        if (pets) {
            guestSubTitle += ` ,${pets} ${pets > 1 ? 'pets' : 'pet'}`
        }
        return guestSubTitle
    }

    const checkInSubtitle = (fromValue) => {
        if (!fromValue) return 'Add dates'
        return fromValue
    }

    const checkOutSubtitle = (toValue) => {
        if (!toValue) return 'Add dates'
        return toValue
    }

    const guestsParams = JSON.stringify(guestsCount)

    function checkForActiveClass(category) {
        return (selectedTab === category) ? ' active' : ''
    }

    const submitFilter = (ev) => {
        ev.preventDefault()
        navigate(`/?txt=${filterBy.txt}&location=${filterBy.location}&guests=${guestsParams || 1}&checkIn=${filterBy.checkIn}&checkOut=${filterBy.checkOut}`)
    }

    const dynClass = isSearchOpen ? "" : "folded"
    return (
        <form onSubmit={submitFilter} className={`expanded-search-bar ${dynClass}`}>

            <div onClick={() => setSelectedTab("location")} className={`location  ${checkForActiveClass("location")}`}>
                <h3>Where</h3>
                <StayFilterByTxt onChangeTxt={onChangeTxt} />
            </div>
            {(selectedTab === 'location' && isSearchOpen) && <LocationSelect onChangeLocation={onChangeLocation} />}


            <div onClick={() => setSelectedTab("checkIn")} className={`check-in  ${checkForActiveClass("checkIn")} `}>
                <h3>Check in</h3>
                <div>{checkInSubtitle(fromValue)}</div>
            </div>
            {(selectedTab === "checkIn" && isSearchOpen) &&
                <DateSelect
                    fromValue={fromValue}
                    setFromValue={setFromValue}
                    toValue={toValue}
                    setToValue={setToValue}
                    setSelected={setSelected}
                    selected={selected}
                    onChangeDates={onChangeDates}
                />

            }


            <div onClick={() => setSelectedTab("checkOut")} className={`check-out  ${checkForActiveClass("checkOut")} `}>
                <h3>Check out</h3>
                <div>{checkOutSubtitle(toValue)}</div>
            </div>
            {/* {(selectedTab === "checkOut" && isSearchOpen) && <div className={`check-in-pick  ${dynClass}`}></div>} */}
            {(selectedTab === "checkOut" && isSearchOpen) &&
                <DateSelect
                    fromValue={fromValue}
                    setFromValue={setFromValue}
                    toValue={toValue}
                    setToValue={setToValue}
                    setSelected={setSelected}
                    selected={selected}
                    onChangeDates={onChangeDates}
                />}



            <div onClick={() => setSelectedTab("guest")} className={`guests  ${checkForActiveClass("guest")} `}>
                <div>
                    <h3 className="guests-txt">Who</h3>
                    <div>{getGuestsSubTitleCount(guestsCount)}</div>
                </div>
            </div>

            <button  className="search-btn">
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
