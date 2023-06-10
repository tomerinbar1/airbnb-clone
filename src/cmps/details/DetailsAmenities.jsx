export const DetailsAmenities = ({ amenities, onOpenModal }) => {
  const sliceAmenities = (start, end) => {
    return amenities.slice(start, end).map((amenity, idx) => (
      <li key={idx}>
        <img
          src={require(`../../assets/img/amenities/${amenity}.svg`)}
          alt={amenity}
        />
        {amenity}
      </li>
    ))
  }

  const leftAmenities = sliceAmenities(0, 5)
  const rightAmenities = sliceAmenities(5, 10)

  return (
    <div className="amenities-details">
      <h1>What this place offers</h1>
      <div className="amenities-list">
        <div className="left-amenities-list">
          <ul>{leftAmenities}</ul>
        </div>
        <div className="right-amenities-list">
          <ul>{rightAmenities}</ul>
        </div>
      </div>
      <button
        onClick={e => onOpenModal(e, 'amenities-modal')}
        data-modal="amenities-modal"
        className="show-all-amenities-btn"
      >
        Show all {amenities.length} amenities
      </button>
    </div>
  )
}
