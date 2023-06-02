import share from '../assets/img/icons/common/share.svg'
import heart from '../assets/img/icons/common/heart.svg'

export const StayDetailsSaveShare = () => {
  return (
    <div className="save-share-details">
      <a href="#">
        <img src={heart} alt="save" />
        Save
      </a>
      <a href="#">
        <img src={share} alt="share" />
        Share
      </a>
    </div>
  )
}
