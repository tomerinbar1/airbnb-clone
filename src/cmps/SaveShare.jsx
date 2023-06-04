import { Link } from 'react-router-dom'
import share from '../assets/img/common/share.svg'
import heart from '../assets/img/common/heart.svg'

export const SaveShare = ({ stayId }) => {
  console.log('stayId', stayId)
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
      <a>
        <Link to={`/stay/edit/${stayId}`}>Edit</Link>
      </a>
    </div>
  )
}
