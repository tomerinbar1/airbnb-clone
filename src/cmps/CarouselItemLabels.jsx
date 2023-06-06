import React from "react";

export const CarouselItemLabels = ({ categoryUrl, width }) => {
  {console.log(categoryUrl)}
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img
        style={{ width: '25px', height: '25px' }}
        src={require(`../assets/img/categories/${categoryUrl}.png`)}
        alt={categoryUrl}
      />
    </div>
  )
}


