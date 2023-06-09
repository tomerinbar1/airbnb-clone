export const Book = () => {
  return (
    <div className="book-wrapper">
      <button className="book-return-btn">{'\u003C'}</button>
      <div className="book-details-header">
        <h1>Request to book</h1>
      </div>
      <section className="book-details">
        <h2>Your trip</h2>
        <div className="book-details-trip-info">
          <div className="book-details-trip-date">
            <h3>Dates</h3>
            <p>Jun 10 - 15</p> // TODO: Replace with actual dates
            <div className="book-details-edit">
              <a href="#">Edit</a>
            </div>
          </div>
          <div className="book-details-trip-guests">
            <h3>Guests</h3>
            <h3>1 guest</h3> // TODO: Replace with actual guests
            <div className="book-details-edit">
              <a href="#">Edit</a>
            </div>
          </div>
        </div>
        <div className="book-payments-form">
          <form action=""></form>
        </div>
        <div className="book-required">
          <div className="message">
            <h3>Message the Host</h3>
            <p>
              Let the host know why you’re travelling and when you’ll check in.
            </p>
            <div className="book-add-message">
              <button className="book-add-btn">Add</button>
            </div>
          </div>
          <div className="phone-number">
            <h3>Phone number</h3>
            <p>Add and confirm your phone number to get trip updates.</p>
            <div className="book-add-message">
            <button className="book-add-btn">Add</button>
            </div>
          </div>
        </div>
        <div className="book-terms"></div>
      </section>

      <section className="price-details">
        // TODO: Replace with price details modal
      </section>
    </div>
  )
}
