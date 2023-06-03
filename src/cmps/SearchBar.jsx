

export function SearchBar() {




function onSearchHandle(key){

}


    return (
        <div className="search-bar">
            <button onClick={onSearchHandle("where")} className="anywhere-search-btn">Anywhere</button> 
            <button onClick={onSearchHandle("week")} className="anyweek-search-btn">Any week</button>
            <button onClick={onSearchHandle("guests")} className="add-guests-search-btn">Add guests</button>
            <button onClick={onSearchHandle("search")} className="search-btn"></button>
        </div>
    )
}