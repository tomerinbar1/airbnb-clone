import { Link } from 'react-router-dom'

export const StayDetails = ({ stayId }) => {
  // const { name, reviews, location, summary } = stayId
  return (
    <section className="stay-details">
      <header className="header-details">
        <h1>Unique and Secluded AirShip with Breathtaking Highland Views</h1>
        <div className="sub-header-details">
          <div className="sub-header-details-left">
            <div className="rating-details">
              <span>⭐️4.95</span>
              <span className='space'>.</span>
              <a href=''>346 reviews</a>
              <span className='space'>.</span>
            </div>
            <div className="super-host-details">
              <span>Super host</span>
              <span className='space'>.</span>
            </div>
            <a href=''>Drimnin, Scotland, United Kingdom</a>
          </div>
          <div className="sub-header-details-right">
            <div className="save-share-details">
              <a href="">Save</a>
              <a href="">Share</a>
            </div>
          </div>
        </div>
      </header>

      <div className="stay-details-img">
        <img src="" alt="main-img" />
        <img src="" alt="small-img1" />
        <img src="" alt="small-img2" />
        <img src="" alt="small-img3" />
        <img src="" alt="small-img4" />

        <div className="all-imgs-btn">
          <button>Show all photos</button>
        </div>
      </div>

      <div className="stay-details-info">
        <div className="stay-details-info-left">
          <div className="basic-info-details">
            <h2>Tiny home hosted by Amanda</h2>
            <div className="capacity-details">
              <span>2 guests</span>
              <span>1 bedrooms</span>
              <span>1 beds</span>
              <span>1 bath</span>
            </div>
            <img src="" alt="" />
          </div>

          <div className="important-info-details">
            <div className="important-1">
              <h2>Airbnb Plus</h2>
              <p>
                Every Plus home is reviewed for quality.
                <a href="">Learn more</a>
              </p>
            </div>
            <div className="important-2">
              <h2>Featured in</h2>
              <p>Designboom, January 2019 Coast, February 2022.</p>
            </div>
            <div className="important-3">
              <h2>Designed by</h2>
              <p>Roderick James Amanda Markham, Out of the Blue</p>
            </div>
          </div>

          <div className="description-details">
            <p>
              Retreat to the deck of this sustainable getaway and gaze at the
              twinkling constellations under a cosy tartan blanket. AirShip 2 is
              an iconic, insulated aluminum pod designed by Roderick James with
              views of the Sound of Mull from dragonfly windows. Airship002 is
              comfortable, quirky and cool. It does not pretend to be a five
              star hotel. The reviews tell the story. If booked for the dates
              you want check out our new listing The Pilot House, Drimnin which
              is on the...
            </p>
            <a href="">Show more</a>
          </div>

          <div className="sleep-details">
            <h1>Where you'll sleep</h1>
            <img src="" alt="bed-img" />
            <h2>Bedroom</h2>
            <p>1 queen bed</p>
          </div>

          <div className="amenities-details">
            <h1>What this place offers</h1>
            <div className="amenities-list">
              <ul>
                <li>Kitchen</li>
                <li>Free parking on premises</li>
                <li>Patio or balcony</li>
                <li>Indoor fireplace</li>
                <li>Refrigerator</li>
                <li>Wifi</li>
                <li>Pets allowed</li>
                <li>Backyard</li>
                <li>Hair dryer</li>
                <li>Microwave</li>
              </ul>
              <button>Show all 32 amenities</button>
            </div>
          </div>

          <div className="date-range-select">
            <h1>7 nights in Drimnin</h1>
            <p>Nov 16, 2023 - Nov 23, 2023</p>
            <div className="calender-wrapper">
              // calender library will render here
            </div>
          </div>

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
        </div>
        <div className="stay-details-info-right">
          <div>reserved-modal render here</div>
        </div>
      </div>
      <div className="map">map render here</div>
      <div className="host-info">
        <h2>Drimnin, Scotland, United Kingdom</h2>
        <p>
          The AirShip is situated in a beautiful, secluded position on a
          four-acre site. Stunning views reach across the Sound of Mull towards
          Tobermory on the Isle of Mull and out to sea toward Ardnamurchan
          Point.
        </p>
        <a href="">Show more</a>
      </div>
      <div className="host-details">
        <div className="hosted-by-txt">
          <h1>Hosted by Amanda</h1>
          <p>Joined in November 2015</p>
          <img src="" alt="host-img" />
        </div>
        <div className="host-info-details">
          <ul>
            <li>682 Reviews</li>
            <li>Identity verified</li>
            <li>Superhost</li>
          </ul>
        </div>
        <div className="host-description-details">
          <h2>Amanda is a Superhost</h2>
          <p>
            Superhosts are experienced, highly rated hosts who are committed to
            providing great stays for guests.
          </p>
          <p>Response rate: 100%</p>
          <p>Response time: within an hour</p>
          <button>Contact Host</button>
        </div>
        <div className="payment-protection">
          <p>
            To protect your payment, never transfer money or communicate outside
            of the Airbnb website or app.
          </p>
          <img src="" alt="" />
        </div>
        <div className="things-to-know">
          <h1>Things to know</h1>
          <div className="things-to-know-list">
            <ul>
              <li>House rules</li>
              <li>Check-in: 4:00 PM - 9:00 PM</li>
              <li>Checkout before 10:00 AM</li>
              <li>2 guests maximum</li>
              <a href="">Show more</a>
            </ul>
            <ul>
              <li>Safety & property</li>
              <li>Carbon monoxide alarm</li>
              <li>Smoke alarm</li>
              <li>Not suitable for children and infants</li>
              <a href="">Show more</a>
            </ul>
            <ul>
              <li>Cancellation policy</li>
              <li>Free cancellation before Nov 15.</li>
              <li>
                Review the Host's full cancellation policy which applies even if
                you cancel for illness or disruptions caused by COVID-19.
              </li>
              <a href="">Show more</a>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/">Home</Link>
    </section>
  )
}
