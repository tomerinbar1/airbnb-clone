import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { loadStays } from '../store/stay.actions.js'
import { setStayId } from '../store/stay.actions.js'
import { StayDetailsHeader } from '../cmps/details/StayDetailsHeader.jsx'
import { StayDetailsGallery } from '../cmps/details/StayDetailsGallery.jsx'
import { DetailsBasicInfo } from '../cmps/details/DetailsBasicInfo.jsx'
import { DetailsFeaturesInfo } from '../cmps/details/DetailsFeaturesInfo.jsx'
import { DetailsSleepInfo } from '../cmps/details/DetailsSleepInfo.jsx'
import { DetailsDescription } from '../cmps/details/DetailsDescription.jsx'
import { DetailsDateRange } from '../cmps/details/DetailsDateRange.jsx'
import { DetailsAmenities } from '../cmps/details/DetailsAmenities.jsx'
import { DetailsReviews } from '../cmps/details/DetailsReviews.jsx'
import { DetailsMap } from '../cmps/details/DetailsMap.jsx'
import { GalleryModal } from '../cmps/details/GalleryModal.jsx'
import { LearnMoreModal } from '../cmps/details/LearnMoreModal.jsx'
import { ReviewsModal } from '../cmps/details/ReviewsModal.jsx'
import { AmenitiesModal } from '../cmps/details/AmenitiesModal.jsx'
import { StayDetailsOrder } from '../cmps/user/orders/StayDetailsOrder.jsx'
import { DisplayList } from '../cmps/details/DisplayList.jsx'

const CHECKOUT_INFO = ['House rules', 'Check-in: 4:00 PM - 9:00 PM','Checkout before 10:00 AM','2 guests maximum']

export const StayDetails = () => {
  const [stay, setStay] = useState(null)
  const [searchParams] = useSearchParams()
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false)
  const [learnMoreModalIsOpen, setLearnMoreModalIsOpen] = useState(false)
  const [reviewsModalIsOpen, setReviewsModalIsOpen] = useState(false)
  const [amenitiesModalIsOpen, setAmenitiesModalIsOpen] = useState(false)
  const [openTab, setOpenTab] = useState(null)
  const params = useParams()
  const { stayId } = params

  const checkIn = searchParams.get('checkIn')
  const checkOut = searchParams.get('checkOut')

  useEffect(() => {
    const loadStaysOnDetails = async () => {
      const stays = await loadStays()
      const stayFromParams = stays.find(stay => stay._id === stayId)
      setStay(stayFromParams)
    }
    loadStaysOnDetails()
    setStayId(stayId)
  }, [])

  const onOpenModal = (event, modal) => {
    event.preventDefault()
    if (modal === 'gallery-modal') {
      setGalleryModalIsOpen(true)
    } else if (modal === 'learn-more-modal') {
      setLearnMoreModalIsOpen(true)
    } else if (modal === 'reviews-modal') {
      setReviewsModalIsOpen(true)
    } else if (modal === 'amenities-modal') {
      setAmenitiesModalIsOpen(true)
    }
  }

  const onCloseModal = () => {
    setGalleryModalIsOpen(false)
    setLearnMoreModalIsOpen(false)
    setReviewsModalIsOpen(false)
    setAmenitiesModalIsOpen(false)
  }

  if (!stay) return <div>Loading...</div>
  return (
    <section className="stay-details">
      <StayDetailsHeader
        stayTitle={stay.name}
        reviews={stay.reviews}
        loc={stay.loc.address}
        stayId={stay._id}
        onOpenModal={onOpenModal}
      />
      <StayDetailsGallery imgUrls={stay.imgUrls} onOpenModal={onOpenModal} />
      <div className="stay-details-info">
        <div className="stay-details-info-left">
          <DetailsBasicInfo
            capacity={stay.capacity}
            host={stay.host.fullname}
            imgUrl={stay.host.imgUrl}
            bathrooms={stay.bathrooms}
            bedrooms={stay.bedrooms}
          />
          <hr className="custom-hr" />

          <DetailsFeaturesInfo onOpenModal={onOpenModal} />
          <hr className="custom-hr" />
          <DetailsDescription summary={stay.summary} />

          <hr className="custom-hr" />

          <DetailsSleepInfo
            imgUrl={stay.imgUrls[3]}
            onOpenModal={onOpenModal}
          />

          <hr className="custom-hr" />
          <DetailsAmenities amenities={stay.amenities} onOpenModal={onOpenModal} />

          <hr className="custom-hr" />

          <DetailsDateRange checkIn={checkIn} checkOut={checkOut} />
        </div>

        <div className="stay-details-order-container">
        <StayDetailsOrder stay={stay} openTab={openTab} setOpenTab={setOpenTab} />
            </div>

      </div>

      <hr className="custom-hr" />

      <DetailsReviews reviews={stay.reviews} onOpenModal={onOpenModal} />

      <hr className="custom-hr" />

      <DetailsMap loc={stay.loc} summary={stay.summary} name={stay.name} />

      <hr className="custom-hr" />

      <div className="host-details">
        <div className="hosted-by-txt">
          <h1>Hosted by Amanda</h1>
          <p>Joined in November 2015</p>
          <img src="" alt="host-img" />
        </div>
        <div className="host-info-details">
          <ul>
            <li>682 Reviews</li>
            <li>Identity verified</li>
            <li>Superhost</li>
          </ul>
        </div>
        <div className="host-description-details">
          <h2>Amanda is a Superhost</h2>
          <p>
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </p>
          <p>Response rate: 100%</p>
          <p>Response time: within an hour</p>
          <button>Contact Host</button>
        </div>
        <div className="payment-protection">
          <p>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </p>
          <img src="" alt="" />
        </div>
        <div className="things-to-know">
          <h1>Things to know</h1>
          <div className="things-to-know-list">
            <DisplayList list={CHECKOUT_INFO}>
              <a href="">Show more</a>
            </DisplayList>
            <ul>
              <li>Safety & property</li>
              <li>Carbon monoxide alarm</li>
              <li>Smoke alarm</li>
              <li>Not suitable for children and infants</li>
              <a href="">Show more</a>
            </ul>
            <ul>
              <li>Cancellation policy</li>
              <li>Free cancellation before Nov 15.</li>
              <li>
                Review the Host's full cancellation policy which applies even if
                you cancel for illness or disruptions caused by COVID-19.
              </li>
              <a href="">Show more</a>
            </ul>
          </div>
        </div>
      </div>
      <div className="modals">
        <GalleryModal
          imgUrls={stay.imgUrls}
          galleryModalIsOpen={galleryModalIsOpen}
          onCloseModal={onCloseModal}
        />

        <LearnMoreModal
          learnMoreModalIsOpen={learnMoreModalIsOpen}
          onCloseModal={onCloseModal}
        />
        <ReviewsModal
          reviews={stay.reviews}
          reviewsModalIsOpen={reviewsModalIsOpen}
          onCloseModal={onCloseModal}
        />
        <AmenitiesModal
          amenities={stay.amenities}
          amenitiesModalIsOpen={amenitiesModalIsOpen}
          onCloseModal={onCloseModal}
        />
      </div>
    </section>
  )
}
