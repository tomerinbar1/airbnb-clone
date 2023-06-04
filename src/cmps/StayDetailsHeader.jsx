import { StayReviewsStat } from './StayReviewsStat'
import { SaveShare } from './SaveShare'

export const StayDetailsHeader = ({ stayTitle, reviews, loc, stayId }) => {
  return (
    <header className="header-details">
      <h1>{stayTitle}</h1>
      <div className="sub-header-details">
        <div className="sub-header-details-left">
          <StayReviewsStat reviews={reviews} />
          <div className="super-host-details">
            <span>Super host</span>
            <span className="space">·</span>
            <a href="">{loc}</a>
          </div>
        </div>
          <div className="sub-header-details-right">
            <SaveShare stayId={stayId} />
          </div>
      </div>
    </header>
  )
}