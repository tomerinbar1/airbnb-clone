import { StayDetailsHeaderReviews } from './StayDetailsHeaderReviews'
import { StayDetailsSaveShare } from './StayDetailsSaveShare'

export const StayDetailsHeader = ({ stayTitle, reviews, loc }) => {
  return (
    <header className="header-details">
      <h1>{stayTitle}</h1>
      <div className="sub-header-details">
        <div className="sub-header-details-left">
          <StayDetailsHeaderReviews reviews={reviews} />
          <div className="super-host-details">
            <span>Super host</span>
            <span className="space">·</span>
            <a href="">{loc}</a>
          </div>
        </div>
          <div className="sub-header-details-right">
            <StayDetailsSaveShare />
          </div>
      </div>
    </header>
  )
}