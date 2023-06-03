import star from '../assets/img/common/reviews-star.svg'

export const StayReviewsStat = ({ reviews }) => {
  const getAvg = () => {
    let sum = 0
    reviews.forEach(review => {
      Object.values(review.rate).forEach(value => {
        sum += value
      })
    })
    return (sum / reviews.length / 6).toFixed(2)
  }

  const numOfReviews = () => {
    return reviews.length
  }

  if (!reviews) return <div>Loading...</div>
  return (
    <div className="rating-details">
      <span> <img src={star} alt="" />{getAvg()}</span>
      <span className="space">·</span>
      <a href="">{numOfReviews()} reviews</a>
      <span className="space">·</span>
    </div>
  )
}
