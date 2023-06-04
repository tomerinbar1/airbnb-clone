

export function SearchBarExpanded({ setSelectedTab, isSearchOpen }) {




    function handleSearchType(type) {
        // stateChangeHandle(type)
    }

    const dynClass = isSearchOpen ? "expand" : "folded"
    return (
        <div className={`expanded-search-bar ${dynClass}`}>

            <div onClick={()=>setSelectedTab("location")} className="location">
                <h3>Where</h3>
                <input type="text" placeholder="Where are you going?" />
            </div>

            {/* <div className={`locatin-pick  ${dynClass}`}></div> */}

            <div onClick={handleSearchType("check-in")} className="check-in">
                <h3>Check in</h3>
                <div>Add dates</div>

            </div>

            <div className={`check-in-pick  ${dynClass}`}></div>


            <div onClick={handleSearchType("check-out")} className="check-out">
                <h3>Check out</h3>
                <div>Add dates</div>
            </div>

            <div onClick={handleSearchType("guests")} className="guests">
                <div>
                    <h3 className="guests-txt">Who</h3>
                    <div>Add guests</div>
                </div>

                <button className="search-btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>

    )
}
