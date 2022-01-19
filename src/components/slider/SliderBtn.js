import React from 'react'

function SliderBtn(props) {
  const { direction, prevSlide, nextSlide } = props;
  return (
    <button type="button" className={direction === "left" ? "slider-btn  prev-btn" : "slider-btn  next-btn"} onClick={direction === "left" ? prevSlide : nextSlide}>
      <span className="arrow-container">
        <svg className="arrow">
          <path d={direction === "left"
          ? "m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z" 
          : "m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"}>
          </path>
        </svg>
      </span>
    </button>
  )
}

export default SliderBtn;
