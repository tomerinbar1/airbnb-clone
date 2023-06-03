import { useRef, useState, useEffect } from 'react'

export function SearchBar() {
    const seachBarRef = useRef(null)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    useEffect(() => {
    }, [])


    function onSearchHandle(key) {
        setIsSearchOpen(prevState => !prevState)
        toggleOpenClass()
    }

    function toggleOpenClass() {
        seachBarRef.current.classList.toggle('search-bar-open')
    }

    return (
        <div ref={seachBarRef} className="search-bar">

            {isSearchOpen &&
                <div onClick={() => onSearchHandle('s')} className="main-screen-full"></div>}


            <button onClick={() => onSearchHandle("where")} className="anywhere-search-btn">Anywhere</button>
            <button onClick={() => onSearchHandle("week")} className="anyweek-search-btn">Any week</button>
            <button onClick={() => onSearchHandle("guests")} className="add-guests-search-btn">Add guests</button>
            <button onClick={() => onSearchHandle("search")} className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}