import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import {} from "../assets/img/stays/stay2/1.jpg"

export function StayPreview({ stay }) {
  const navigate = useNavigate()

  const onStayDetails = stayId => {
    navigate(`/${stayId}`)
  }

  return (
    <article onClick={() => onStayDetails(stay._id)} className="stay-preview">
      <Link className="details-a-link" to={`/${stay._id}`}>
        {' '}
        Details{' '}
      </Link>
      <img
        className="stay-preview-image"
        src={stay.imgUrls[0]}
        alt="stay-image"
      />
      <span className="stay-preview-location"> Haifa, Israel</span>
      <span className="stay-preview-distance"> X kilometers away </span>
      <span className="stay-preview-dates"> Jan 9 - 14 </span>
      <span className="price-stay-preview">
        {stay.price}$ <span> night </span>
      </span>
    </article>
  )
}
