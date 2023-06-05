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

  const userReview = reviews.map(review => {
    return (
      <div className="review-wrapper" key={review.id}>
        <div className="user-review">
          <div className="userName">
            <h2>{review.by.fullname}</h2>
          </div>
          <div className="createdAt">May 2023</div>
        </div>
        <div className="user-img">
          <img src={review.by.imgUrl} alt="" />
        </div>
        <div className="review">
          <p>{review.txt}</p>
        </div>
      </div>
    )
  })

  const sliceReviews = (start, end) => {
    return userReview.slice(start, end)
  }

  return (
    <div className="reviews-details-wrapper">
      <div className="rating-details">
        <StayReviewsStat reviews={reviews} />
      </div>
      <div className="reviews-avg-data">
        <div className="reviews-avg-data-left">
          <ul>{sliceAvgRates(0, 3)}</ul>
        </div>
        <div className="reviews-avg-data-right">
          <ul>{sliceAvgRates(3, 6)}</ul>
        </div>
      </div>
      <div className="reviews-wrapper">
        <div className="reviews-left">{sliceReviews(0, 3)}</div>
        <div className="reviews-right">{sliceAvgRates(3, 6)}</div>
        <button>Show all {reviews.length} reviews</button>
      </div>
    </div>
  )
}
