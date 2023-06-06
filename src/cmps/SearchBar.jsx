import { useRef, useState } from 'react'

export function SearchBar({ onExpandSearch, isSearchOpen }) {


    function onSearchHandle(key) {
        onExpandSearch()
    }


    const dynClass = isSearchOpen? "hide":""
    return (
        <div className={`search-bar  ${dynClass}`}>
            <button onClick={() => onSearchHandle("where")} className="anywhere-search-btn">Anywhere</button>
            <button onClick={() => onSearchHandle("week")} className="anyweek-search-btn">Any week</button>
            <button onClick={() => onSearchHandle("guests")} className="add-guests-search-btn">Add guests</button>
            <button onClick={() => onSearchHandle("search")} className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}