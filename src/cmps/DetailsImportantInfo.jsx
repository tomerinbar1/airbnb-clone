import airbnb from '../assets/img/common/airbnb.svg'
import features from '../assets/img/common/features.svg'
import design from '../assets/img/common/design.svg'

export const DetailsImportantInfo = () => {
  return (
    <div className="important-info-details">

      <div className="important-wrapper">
        <img src={airbnb} alt="" />
        <div className="important">
          <h2>Airbnb Plus</h2>
          <p>
            Every Plus home is reviewed for quality.
            <a href="#">Learn more</a>
          </p>
        </div>
      </div>

      <div className="important-wrapper">
        <img src={features} alt="features" />
        <div className="important">
          <h2>Featured in</h2>
          <p>Designboom, January 2019 Coast, February 2022.</p>
        </div>
      </div>

      <div className="important-wrapper">
        <img src={design} alt="design" />
        <div className="important">
          <h2>Designed by</h2>
          <p>Roderick James Amanda Markham, Out of the Blue</p>
        </div>
      </div>

    </div>
  )
}
