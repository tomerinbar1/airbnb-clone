export const DetailsBasicInfo = ({ host, capacity }) => {
  return (
    <div className="basic-info-details">
      <h2>Home hosted by {host}</h2>
      <div className="capacity-details">
        <span>{capacity} guests</span>
        <span className="space">·</span>
        <span>1 bedrooms</span>
        <span className="space">·</span>
        <span>1 beds</span>
        <span className="space">·</span>
        <span>1 bath</span>
      </div>
      <img src="" alt="" />
    </div>
  )
}
