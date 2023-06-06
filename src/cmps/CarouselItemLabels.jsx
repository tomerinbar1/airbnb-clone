import React from "react";

export const CarouselItemLabels = ({ page, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {page.map((icon) => {
        return (
          <span className="category-carousel-item">
            <img
              style={{ width: '25px', height: '25px' }}
              src={require(`../assets/img/categories/${icon.url}.png`)}
              alt={icon.url}
            />
            <p className='category-name'>{icon.name}</p>
          </span>
        )
      })}

    </div>







    // <div className="carousel-item" style={{ width: width }}>
    //   <img
    //     style={{ width: '25px', height: '25px' }}
    //     src={require(`../assets/img/categories/${categoryUrl}.png`)}
    //     alt={categoryUrl}
    //   />
    // </div>
  )
}


