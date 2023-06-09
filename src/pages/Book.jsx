export const Book = () => {
  return (
    <div className="book-page-wrapper">
      <section className="book-details-wrapper">
        <div className="book-details-header">
          <h1>Request to book</h1>
          <button className="book-return-btn">{'\u003C'}</button>
        </div>
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
            <form action=""></form>
          </div>

          <hr className="custom-hr" />

        
          <div className="book-required">
            <div className="required-info">
              <div className="message">
                <h3>Message the Host</h3>
                <p>
                  Let the host know why you’re travelling and when you’ll check
                  in.
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
          </div>
          <div className="book-terms"></div>
        </div>
      </section>
      <section className="book-summary-details">
        <div className="price-details">
          // TODO: Replace with price details modal
        </div>
      </section>
    </div>
  )
}
