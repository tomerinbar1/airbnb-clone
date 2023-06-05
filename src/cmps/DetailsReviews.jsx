import { StayReviewsStat } from './StayReviewsStat'

export const DetailsReviews = ({ reviews }) => {
  //   console.log('reviews', reviews)

  const averageRates = reviews => {
    reviews.map(review => {
      const { rate } = review
      const rateTypes = Object.keys(rate)
      // console.log('rateTypes', rateTypes)
      const rateValues = Object.values(rate)
      // console.log('rateValues', rateValues)
    })
  }

  averageRates(reviews)

  return (
    <div className="reviews-details-wrapper">
      <div className="rating-details">
        <StayReviewsStat reviews={reviews} />
      </div>
      <div className="reviews-avg-data">
        <div className="reviews-avg-data-left">
          <ul></ul>
        </div>
        <div className="reviews-avg-data-right">
          <ul></ul>
        </div>
      </div>
      <div className="reviews-wrapper">
        <div className="reviews-left">review-cards render here</div>
        <div className="reviews-right">review-cards render here</div>
        <button>Show all 346 reviews</button>
      </div>
    </div>
  )
}