export const DetailsReviews = ({ reviews }) => {
    return(
        <div className="reviews-details">
        <div className="rating-details">
          <span>⭐️4.95</span>
          <span>346 reviews</span>
        </div>
        <div className="reviews-avg-data">
          <ul>
            <li>Cleanliness</li>
            <li>Accuracy</li>
            <li>Communication</li>
            <li>Location</li>
            <li>Check-in</li>
            <li>Value</li>
          </ul>
        </div>
        <div className="reviews-wrapper">
          <div className="reviews-left">review-cards render here</div>
          <div className="reviews-right">review-cards render here</div>
          <button>Show all 346 reviews</button>
        </div>
      </div>
    )
}
