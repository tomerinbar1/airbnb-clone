import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { StayPreviewStar } from './StayPreviewStar'
import { Carousel } from './Carousel';


export function StayPreview({ stay, onRemoveStay, onStayDetails }) {
  const navigate = useNavigate()

  const reviews = stay.reviews

  function onStayDetails(stayId) {
    navigate(`/${stayId}`)
  }

  return (
    <article onClick={() => onStayDetails(stay._id)} className="stay-preview ">
  
      <section className='stay-preview-image-container'>
        <Carousel stay={stay} />
        {/* <img className="stay-preview-image" src={stay.imgUrls[0]} alt="stay-image" /> */}
      </section>

      <section className="stay-preview-txt">
        <span className="stay-preview-location">{stay.loc.address}</span>
        <StayPreviewStar reviews={reviews} />
        <span className="stay-preview-distance"> X kilometers away </span>
        <span className="stay-preview-dates"> Aug 4 - 9 </span>
        <span className="stay-preview-price">${stay.price}<span className="night"> night </span></span>
      </section>

    </article>
  )
}
