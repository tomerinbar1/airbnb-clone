import React, { useState } from "react"
import { CarouselItem } from "./CarouselItem"

export function Carousel({ stay }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex, ev) => {
    ev.preventDefault()
    if (newIndex < 0) {
      newIndex = stay.imgUrls.length - 1
    } else if (newIndex >= stay.imgUrls.length) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{
          transform: `translate(-${activeIndex * 100}%)`
        }}
      >
        {stay.imgUrls.map((imageUrl) => {
          return <CarouselItem key={imageUrl} imageUrl={imageUrl} width={"100%"} />
        })}
      </div>

      <div className="carousel-arrows">
        <button
          className="button-arrow"
          onClick={(ev) => {
            updateIndex(activeIndex - 1, ev)
          }}
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <button
          className="button-arrow"
          onClick={(ev) => {
            updateIndex(activeIndex + 1, ev)
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>

      <div className="indicators">
        {stay.imgUrls.map((image, index) => {
          return (
            <button
              key={index}
              className="indicator-button"
            >
              <span
                className={`fa-solid fa-circle ${index === activeIndex
                  ? "indicator-symbol-active"
                  : "indicator-symbol"
                  }`}
              >
              </span>
            </button>
          )
        })}
      </div>

    </div>
  )
}
