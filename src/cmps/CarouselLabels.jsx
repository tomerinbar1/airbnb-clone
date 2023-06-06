import React, { useState } from "react"
import { CarouselItemLabels } from "./CarouselItemLabels"

export function CarouselLabels({ categories }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const updateIndex = (newIndex, ev) => {
    ev.preventDefault()
    if (newIndex < 0) {
      newIndex = categories.length - 1
      // newIndex = stay.imgUrls.length - 1
    } else if (newIndex >= categories.length) {
      // newIndex = 0
      newIndex = 0

    }
    setActiveIndex(newIndex)
  }


  // const dynClassBack = (activeIndex>=1) ? 'show-arrow' : 'hide-arrow'
  // const dynClassForward = (activeIndex >= (stay.imgUrls.length - 1)) ? 'hide-arrow':'show-arrow' 


  return (
    <div className="carousel-labels">
      <div
        className="inner-labels"
        style={{
          transform: `translate(-${activeIndex * 100}%)`
        }}
      >
        {categories.map((category) => {
            // console.log(category.url)

          return (
            <span className="category-carousel-item">
              <CarouselItemLabels key={category.url} categoryUrl={category.url} width={"100%"} />
              <p className='category-name'>{category.name}</p>
            </span>
          )
        })}
      </div>

      <div className="carousel-labels-arrows">

        {/* <section className={dynClassBack}> */}
        <button
          className="button-arrow-back-labels"
          onClick={(ev) => {
            updateIndex(activeIndex - 1, ev)
          }}
        >
          <span className="material-symbols-outlined arrow-back">arrow_back_ios</span>
        </button>
        {/* </section> */}

        {/* <section className={dynClassForward}> */}
        <button
          className="button-arrow-forward-labels"
          onClick={(ev) => {
            updateIndex(activeIndex + 1, ev)
          }}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        {/* </section> */}
      </div>


    </div>
  )
}
