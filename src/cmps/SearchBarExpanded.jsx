export function SearchBarExpanded() {
  return (
    <div className="expanded-search-bar">
      <div className="location">
        <p>Location</p>
        <input type="text" placeholder="Where are you going?" />
      </div>

      <div className="check-in">
        <p>Check in</p>
        <input type="text" placeholder="Add dates" />
      </div>

      <div className="check-out">
        <p>Check out</p>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="guests">
        <p>Guests</p>
        <input type="text" placeholder="Add guests" />
        <span>
          <i class="lni lni-search-alt"></i>
        </span>
      </div>
    </div>
  )
}
