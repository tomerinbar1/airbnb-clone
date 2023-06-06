import { StayDetailsHeader } from '../cmps/StayDetailsHeader.jsx'
import { StayDetailsGallery } from '../cmps/StayDetailsGallery.jsx'
import { DetailsBasicInfo } from '../cmps/DetailsBasicInfo.jsx'
import { DetailsFeaturesInfo } from '../cmps/DetailsFeaturesInfo.jsx'
import { DetailsSleepInfo } from '../cmps/DetailsSleepInfo.jsx'
import { DetailsDescription } from '../cmps/DetailsDescription.jsx'
import { DetailsDateRange } from '../cmps/DetailsDateRange.jsx'
import { DetailsAmenities } from '../cmps/DetailsAmenities.jsx'
import { DetailsReviews } from '../cmps/DetailsReviews.jsx'
import { GalleryModal } from '../cmps/GalleryModal.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { loadStays } from '../store/stay.actions.js'
import { LearnMoreModal } from '../cmps/LearnMoreModal.jsx'

export const StayDetails = () => {
  const [stay, setStay] = useState(null)
  const { stayId } = useParams()
  const [galleryModalIsOpen, setGalleryModalIsOpen] = useState(false)
  const [learnMoreModalIsOpen, setLearnMoreModalIsOpen] = useState(false)
  
  useEffect(() => {
    const loadStaysOnDetails = async () => {
      const stays = await loadStays()
      const stayFromParams = stays.find(stay => stay._id === stayId)
      setStay(stayFromParams)
    }
    loadStaysOnDetails()
  }, [])

  const onOpenModal = (event, modal) => {
    event.preventDefault()
    if (modal === 'gallery-modal') {
      setGalleryModalIsOpen(true)
    } else if (modal === 'learn-more-modal') {
      setLearnMoreModalIsOpen(true)
    }
  }

  const onCloseModal = () => {
    setGalleryModalIsOpen(false)
    setLearnMoreModalIsOpen(false)
  }

  if (!stay) return <div>Loading...</div>
  return (
    <section className="stay-details">
      <StayDetailsHeader
        stayTitle={stay.name}
        reviews={stay.reviews}
        loc={stay.loc.address}
        stayId={stay._id}
      />
      <StayDetailsGallery imgUrls={stay.imgUrls} onOpenModal={onOpenModal} />
      <div className="stay-details-info">
        <div className="stay-details-info-left">
          <DetailsBasicInfo
            capacity={stay.capacity}
            host={stay.host.fullname}
            imgUrl={stay.host.imgUrl}
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
          <DetailsAmenities amenities={stay.amenities} />

          <hr className="custom-hr" />

          <DetailsDateRange />
        </div>

        <div className="stay-details-info-right"> // Order Modal // </div>
      </div>
      
      <hr className="custom-hr" />

      <DetailsReviews reviews={stay.reviews} />
      <div className="map">map render here</div>
      <div className="host-info">
        <h2>Drimnin, Scotland, United Kingdom</h2>
        <p>
          The AirShip is situated in a beautiful, secluded position on a
          four-acre site. Stunning views reach across the Sound of Mull towards
          Tobermory on the Isle of Mull and out to sea toward Ardnamurchan
          Point.
        </p>
        <a href="">Show more</a>
      </div>
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
            <ul>
              <li>House rules</li>
              <li>Check-in: 4:00 PM - 9:00 PM</li>
              <li>Checkout before 10:00 AM</li>
              <li>2 guests maximum</li>
              <a href="">Show more</a>
            </ul>
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
      </div>
    </section>
  )
}
