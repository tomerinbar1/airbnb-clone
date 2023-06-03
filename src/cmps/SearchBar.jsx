import { useRef, useState, useEffect } from 'react'

export function SearchBar() {
    const seachBarRef = useRef(null)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    useEffect(() => {

    }, [isSearchOpen])


    function onSearchHandle(key) {
        setIsSearchOpen(prevState => !prevState)
        console.log("cscscsc",isSearchOpen)
        toggleOpenClass()
    }

    function toggleOpenClass() {
        seachBarRef.current.classList.toggle('search-bar-open')
    }
    console.log("dddddd",isSearchOpen)

    return (
        <div ref={seachBarRef} className="search-bar">

            {isSearchOpen &&
                <div onClick={toggleOpenClass} className="main-screen-full"></div>}


            <button onClick={() => onSearchHandle("where")} className="anywhere-search-btn">Anywhere</button>
            <button onClick={() => onSearchHandle("week")} className="anyweek-search-btn">Any week</button>
            <button onClick={() => onSearchHandle("guests")} className="add-guests-search-btn">Add guests</button>
            <button onClick={() => onSearchHandle("search")} className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}