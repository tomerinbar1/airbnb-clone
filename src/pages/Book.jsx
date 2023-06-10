import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { StayReviewsStat } from '../cmps/details/StayReviewsStat'

export const Book = () => {
  const [stay, setStay] = useState(null)

  const { stayId } = useParams()

  useEffect(() => {
    getStay()
  }, [])

  async function getStay() {
    const stay = await stayService.getById(stayId)
    setStay(stay)
  }

  if (!stay) return <div>Loading...</div>

  const { name, type, imgUrls, reviews } = stay

  return (
    <div className="book-page-wrapper">
      <div className="book-details-header">
        <h1>Request to book</h1>
        <button className="book-return-btn">{'\u003C'}</button>
      </div>
      <main className="book-page-main">
        <section className="book-details-wrapper">
          <div className="book-details">
            <h2>Your trip</h2>
            <div className="book-details-trip-info">
              <div className="book-details-trip-date">
                <div className="date-info">
                  <h3>Dates</h3>
                  <p>Jun 10 - 15</p>
                </div>
                <div className="book-details-edit">
                  <a href="#">Edit</a>
                </div>
              </div>
              <div className="book-details-trip-guests">
                <div className="guest-info">
                  <h3>Guests</h3>
                  <p>1 guest</p>
                </div>
                <div className="book-details-edit">
                  <a href="#">Edit</a>
                </div>
              </div>
            </div>

            <hr className="custom-hr" />

            <div className="book-payments-form">
              <h2>Choose how to pay</h2>
            </div>

            <hr className="custom-hr" />

            <div className="book-required">
              <h2>Required for your trip</h2>
              <div className="required-info">
                <div className="message">
                  <div className="host-contact-details">
                    <h3>Message the Host</h3>
                    <p>
                      Let the host know why you’re travelling and when you’ll
                      check in.
                    </p>
                  </div>

                  <button className="book-add-btn">Add</button>
                </div>

                <div className="phone-number">
                  <div className="host-contact-details">
                    <h3>Phone number</h3>
                    <p>
                      Add and confirm your phone number to get trip updates.
                    </p>
                  </div>
                  <button className="book-add-btn">Add</button>
                </div>
              </div>
            </div>

            <hr className="custom-hr" />

            <div className="book-terms"></div>
          </div>
        </section>
        <section className="book-summary-details">
          <div className="order-details">
            <div className="order-details-header">
              <img src={imgUrls[1]} alt="" />
              <div className="book-stay-basic-wrapper">
                <div className="order-details-header-text">
                  <div className="book-stay-basic">
                    <h5>{type}</h5>
                    <h3>{name}</h3>
                  </div>
                </div>
                <div className="book-stay-reviews">
                  <StayReviewsStat reviews={reviews} />
                  <span className="space-dot">·</span>
                  <p>Superhost</p>
                </div>
              </div>
            </div>
            <hr className="custom-hr" />
            <div className="order-details-price-summary">
              <h1>Price details</h1>
              <div className="per-night-price-wrapper">
                <div className="per-night-price">
                  <h3>776.92</h3>
                  <span>x</span>
                  <h3>5 nights</h3>
                </div>
                <div className="sub-total-price">
                  <h3>Subtotal</h3>
                </div>
              </div>
              <div className="service-fee-wrapper">
                <div className="service-fee">
                  <h3>Airist service fee</h3>
                </div>
                <div className="fee-price">
                  <h3>fee price</h3>
                </div>
              </div>
            </div>
            <hr className="custom-hr" />
            <div className="total-price">
              <div className="total-price-wrapper">
                <h3>Total (ils)</h3>
                <h3>total price</h3>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
