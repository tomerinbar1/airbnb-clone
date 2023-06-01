import { Link } from 'react-router-dom'

export const StayDetails = ({ stayId }) => {
  // const { name, reviews, location, summary } = stayId
  return (
    <section className="stay-details">
      <header>
        <h1>Unique and Secluded AirShip with Breathtaking Highland Views</h1>
        <div className="sub-header">
          <div className="rating">
            <span>⭐️</span>
            <span>346 reviews</span>
          </div>
          <div className="super-host">
            <span>Super host</span>
          </div>
          <span>Drimnin, Scotland, United Kingdom</span>
        </div>
        <div className="save-share">
          <a href="">Save</a>
          <a href="">Share</a>
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
          <div className="basic-info">
            <h2>Tiny home hosted by Amanda</h2>
            <div className="capacity">
              <span>2 guests</span>
              <span>1 bedrooms</span>
              <span>1 beds</span>
              <span>1 bath</span>
            </div>
            <img src="" alt="" />
          </div>

          <div className="important-info">
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

          <div className="description">
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

          <div className="sleep">
            <h1>Where you'll sleep</h1>
            <img src="" alt="bed-img" />
            <h2>Bedroom</h2>
            <p>1 queen bed</p>
          </div>

          <div className="amenities">
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

          <div className="reviews">
            <div className="rating">
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
        <p>The AirShip is situated in a beautiful, secluded position on a four-acre site. Stunning views reach across the Sound of Mull towards Tobermory on the Isle of Mull and out to sea toward Ardnamurchan Point.</p>
        <a href="">Show more</a>
      </div>
      <Link to="/">Home</Link>
    </section>
  )
}
