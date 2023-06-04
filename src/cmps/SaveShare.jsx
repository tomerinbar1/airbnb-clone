import { Link } from 'react-router-dom'
import share from '../assets/img/common/share.svg'
import heart from '../assets/img/common/heart.svg'

export const SaveShare = ({ stayId }) => {
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
      <div>
        <Link to={`/stay/edit/${stayId}`}>Edit</Link>
      </div>
    </div>
  )
}
