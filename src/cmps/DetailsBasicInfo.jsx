export const DetailsBasicInfo = ({ host, capacity, imgUrl }) => {
  return (
    <div className="basic-info-details">
      <div className="capacity-details">
        <h2>Home hosted by {host}</h2>
        <span>{capacity} guests</span>
        <span className="space-dot">·</span>
        <span>1 bedrooms</span>
        <span className="space-dot">·</span>
        <span>1 beds</span>
        <span className="space-dot">·</span>
        <span>1 bath</span>
      </div>
      <img src={imgUrl} alt="host image" />
    </div>
  )
}
