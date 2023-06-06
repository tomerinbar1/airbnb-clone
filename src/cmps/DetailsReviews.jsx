import { render } from '@testing-library/react'
import { StayReviewsStat } from './StayReviewsStat'

export const DetailsReviews = ({ reviews }) => {
  // average rates

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
      avg: (sum / count).toFixed(2),
    }))

    return result
  }

  const avgRates = averageRates(reviews)

  const sliceAvgRates = (start, end) => {
    return avgRates.slice(start, end).map((rate, idx) => (
      <li key={idx}>
        <div className="avg-data-wrapper">
          <div className="avg-type">{rate.type}</div>
          <div className="avg-num">{rate.avg}</div>
        </div>
      </li>
    ))
  }

  // reviews

  function renderReview(review) {
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
  }

  function renderReviews(column) {
    if (column === 'left') {
      const leftReviews = reviews.slice(0, 3)
      return leftReviews.map(review => renderReview(review))
    }

    if (column === 'right') {
      const rightReviews = reviews.slice(3, 6)
      return rightReviews.map(review => renderReview(review))
    }

    return []
  }

  return (
    <div className="reviews-details-wrapper">
      <div className="rating-details">
        <StayReviewsStat reviews={reviews} />
      </div>
      <section className="reviews-avg-data">
        <div className="reviews-avg-data-left">
          <ul>{sliceAvgRates(0, 3)}</ul>
        </div>
        <div className="reviews-avg-data-right">
          <ul>{sliceAvgRates(3, 6)}</ul>
        </div>
      </section>
      <section className="reviews-wrapper">
        <div className="left-reviews"> {renderReviews('left')}</div>
        <div className="right-reviews">{renderReviews('right')}</div>
      </section>
        <div className="show-all-reviews-btn">
          <button>Show all {reviews.length} reviews</button>
        </div>
    </div>
  )
}
