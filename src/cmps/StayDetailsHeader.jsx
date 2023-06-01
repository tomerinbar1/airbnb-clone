export const StayDetailsHeader = ({stayTitle}) => {
  return (
    <header className="header-details">
      <h1>{stayTitle}</h1>
      <div className="sub-header-details">
        <div className="sub-header-details-left">
          <div className="rating-details">
            <span>⭐️4.95</span>
            <span className="space">.</span>
            <a href="">346 reviews</a>
            <span className="space">.</span>
          </div>
          <div className="super-host-details">
            <span>Super host</span>
            <span className="space">.</span>
            <a href="">Drimnin, Scotland, United Kingdom</a>
          </div>
        </div>
        <div className="sub-header-details-right">
          <div className="save-share-details">
            <a href="">Save</a>
            <a href="">Share</a>
          </div>
        </div>
      </div>
    </header>
  )
}
