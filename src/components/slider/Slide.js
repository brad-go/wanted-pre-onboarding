import React from 'react';
import DirectBtn from './DirectBtn.js';

function Slide(props) {
  const { sliderData, current, slideWidth, motion } = props;

  const slides = sliderData.map((slide, index) => {
    return (
      <div key={index} className="slick-slide" style={{width: slideWidth + 'px'}} >
        <div>
          <div className="banner" > 
            <div className="banner-image__box">
              <a href="/">
                <img className={index === current ? "banner-image banner-image__active" : "banner-image" } src={slide.image} alt="slides" />
              </a>
            </div>
            <div className={index === current ? "banner-info banner-info__active" : "banner-info"} style={{transition: motion ? 'opacity 0.2s ease-in-out' : 'none'}}>
              <h2>{slide.title}</h2>
              <h3>{slide.info}</h3>
              <hr></hr>
              <a href="/" className="directBtn">
                <span className="directBtn-label">바로 가기</span>
                <DirectBtn />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  })

  return slides;
}

export default Slide;