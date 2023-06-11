// import { Link } from 'react-router-dom'
import share from '../assets/img/common/share.svg'
import heart from '../assets/img/common/heart.svg'
import { useLocation } from 'react-router-dom'

export const SaveShare = ({ stayId }) => {

  const location = useLocation()

  return (
    <div className="save-share-details">
      <a href="#">
        <img src={share} alt="share" />
        Share
      </a>
      <a href="#">
        <img src={heart} alt="save" />
        Save
      </a>
      {/* <div>
        <Link to={`/edit/${stayId}/${location.search}`}>Edit</Link>
      </div> */}
    </div>
  )
}
