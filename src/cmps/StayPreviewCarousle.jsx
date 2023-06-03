import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export function StayPreviewCarousel({stay}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = stay.imgUrls
    // console.log(stay.imgUrls)

  const handlePrevClick = (e) => {
    e.preventDefault();
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };


//   const images = [
//     "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg",
//     "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg",
//     "http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436952/aef9ajipinpjhkley1e3.jpg",
// ];

  return (
    // <section className="carousel-container">
      <div id="carouselExampleControls" className="carousel-slide" data-ride="carousel">
        <div className="carousel-inner">
          {images.map((imageUrl, index) => (
            <div className={`carousel-item  ${index === activeIndex ? 'active' : ''}`} key={index}>
            {/* <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`} key={index}> */}
              <img className=" stay-preview-image" src={imageUrl} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={handlePrevClick}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={handleNextClick}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          {/* <span className="sr-only">Next</span> */}
        </button>
        
      </div>
    // </section>
  );
}