import Modal from 'react-modal'
import { StayReviewsStat } from './StayReviewsStat'

export const ReviewsModal = ({ onCloseModal, reviewsModalIsOpen, reviews }) => {
  const averageRates = reviews => {
    const ratings = reviews.reduce((acc, review) => {
      const { rate } = review
      Object.entries(rate).forEach(([type, avg]) => {
        if (acc.hasOwnProperty(type)) {
          acc[type].sum += avg
          acc[type].count += 1
        } else {
          acc[type] = { sum: avg, count: 1 }
        }
      })
      return acc
    }, {})

    const result = Object.entries(ratings).map(([type, { sum, count }]) => ({
      type,
      avg: (sum / count).toFixed(1),
    }))

    return result
  }

  const avgRates = averageRates(reviews)

  const avgRatesList = avgRates.map((rate, idx) => {
    return (
      <li key={idx}>
        <div className="avg-data-wrapper">
          <div className="avg-type">{rate.type}</div>
          <div className="avg-num">{rate.avg}</div>
        </div>
      </li>
    )
  })

  function renderReview(reviews) {
    return reviews.map(review => {
      return (
        <div className="user-review" key={review.id}>
          <div className="user-review-header">
            <img src={review.by.imgUrl} alt="" />
            <div className="review-head-txt">
              <h2>{review.by.fullname}</h2>
              <p>Sep 2023</p>
            </div>
          </div>
          <div className="user-review-body">
            <p>{review.txt}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <Modal
      isOpen={reviewsModalIsOpen}
      onRequestClose={onCloseModal}
      className="Modal-reviews"
      overlayClassName="Overlay-reviews"
    >
        {/* <button onClick={() => onCloseModal()}>X</button> */}
      <div className="reviews-modal-wrapper flex space-between">
        <section className="rating-details flex column">
          <div className="rateStat">
            <StayReviewsStat reviews={reviews} />
          </div>
          <ul>{avgRatesList}</ul>
        </section>
        <section className="reviews-list">{renderReview(reviews)}</section>
      </div>
    </Modal>
  )
}