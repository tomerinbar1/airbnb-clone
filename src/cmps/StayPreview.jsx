import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { StayPreviewCarousel } from './StayPreviewCarousle'

export function StayPreview({ stay, onRemoveStay, onStayDetails }) {
  const navigate = useNavigate()

  function onStayDetails(stayId) {
    navigate(`/${stayId}`)
  }

  return (




    <article onClick={() => onStayDetails(stay._id)} className="stay-preview ">
      {/* <Link className="details-a-link" to={`/${stay._id}`}>
        Details
      </Link> */}

      <section className='stay-preview-image-container'>
      {/* {stay && <StayPreviewCarousel stay={stay}/>} */}

        <img className="stay-preview-image" src={stay.imgUrls[0]} alt="stay-image" />
      </section>

      <section className="stay-preview-txt">
        <span className="stay-preview-location">{stay.loc.address}</span>
        <span className="stay-preview-star">star</span>
        <span className="stay-preview-distance"> X kilometers away </span>
        <span className="stay-preview-dates"> Jan 9 - 14 </span>
        <span className="stay-preview-price">{stay.price}$ <span> night </span></span>
      </section>
    </article>
  )
}
