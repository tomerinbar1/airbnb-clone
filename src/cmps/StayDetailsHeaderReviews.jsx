export const StayDetailsHeaderReviews = ({ reviews }) => {
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
      <span>⭐️{getAvg()}</span>
      <span className="space">.</span>
      <a href="">{numOfReviews()} reviews</a>
      <span className="space">.</span>
    </div>
  )
}
