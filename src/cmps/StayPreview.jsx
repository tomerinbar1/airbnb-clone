import { Link} from 'react-router-dom'
import { StayPreviewStar } from './StayPreviewStar'
import { Carousel } from './Carousel'
import { HeartIcon } from './PreviewHeart'
import { useLocation } from 'react-router-dom'

export function StayPreview({stay}) {
  const location = useLocation()
  const reviews = stay.reviews

  return (
    <section className='stay-preview'>
      <Link className="details-a-link" to={`/${stay._id}/${location.search}`}>

        <section className='stay-preview-image-container'>
          <Carousel stay={stay} />
        </section>

        <section className='stay-preview-hurt'>
          <HeartIcon />
        </section>

        <section className="stay-preview-txt">
          <span className="stay-preview-location">{stay.loc.address}</span>
          <StayPreviewStar reviews={reviews} />
          <span className="stay-preview-distance"> X kilometers away </span>
          <span className="stay-preview-dates"> Aug 4 - 9 </span>
          <span className="stay-preview-price">${stay.price}<span className="stay-preview-night"> night </span></span>
        </section>
        
      </Link>
    </section>
  
 
  )
}
