import React, { useEffect, useRef } from 'react';




import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export function StayPreviewCarousel() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      // Add your options here
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

