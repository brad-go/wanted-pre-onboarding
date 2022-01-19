import React, { useState, useEffect, useRef }from 'react';
import { SliderData } from './SliderData.js';
import Slide from './Slide.js';
import SliderBtn from './SliderBtn.js';
import '../../styles/Slider.css';

function Slider() {
  // 랜덤으로 슬라이드가 지정돼서 새로고침 시마다 다른 슬라이드가 보이게
  const initialSlide = Math.floor(Math.random() * 9) + 10;
  const sliderDataList = [...SliderData, ...SliderData, ...SliderData];
  // 상수 값 변수로 지정
  const SLIDE_LENGTH = sliderDataList.length;
  const TOTAL_SLIDES = SLIDE_LENGTH;
  
  // 슬라이드 초기 상태 설정
  const [ current, setCurrent ] = useState(initialSlide);
  const [ hasMotion, setMotion] = useState(true);
  const [ screenSize, setScreenSize ] = useState(window.innerWidth);
  const [ slideWidth, setSlideWidth ] = useState(1060);
  const [ slidePadding, setSlidePadding ] = useState(24);
  const [ trackWidth, setTrackWidth ] = useState(slideWidth + slidePadding);

  const [ eventOn, setEventOn ] = useState(false);
  
  // 슬라이드 트랙을 가져오기
  const slickTrack = useRef();

  // 화면 사이즈가 바뀌면 screenSize 업데이트
  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  // 화면 사이즈 관찰
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setSlideWidth(window.innerWidth - 120);
      setSlidePadding(20);
    } else {
      setSlidePadding(24)
      setSlideWidth(1060);
    }
  }, [screenSize]);

  useEffect(() => {
    setTrackWidth(TOTAL_SLIDES * (slideWidth + slidePadding));
  }, [slideWidth, slidePadding, TOTAL_SLIDES]);

  // 슬라이드 위에 마우스가 올라가면 이벤트가 동작하게
  const handleTouchEvent = (isMouseOn) => {
    if (isMouseOn) {
      setEventOn(true);
    } else {
      setEventOn(false);
    }
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? SLIDE_LENGTH - 1 : current - 1);
  }

  const nextSlide = () => {
    setCurrent(current === SLIDE_LENGTH - 1 ? 0 : current + 1);
  };

  // 버튼들을 통해 슬라이드의 상태값이 바뀔 때마다 화면 이동
  useEffect(() => {
    if (current === 1) {
      setTimeout(() => {
        setMotion(false);
        setCurrent(19);
      }, 500);
      setTimeout(() => {
        setMotion(true);
      }, 600);
    }
    if (current === 26) {
      setTimeout(() => {
        setMotion(false);
        setCurrent(8);
      }, 500);
      setTimeout(() => {
        setMotion(true);
      }, 600);
    }
    console.log(current);
    slickTrack.current.style.transform = `translateX(${-(slideWidth + slidePadding) * (current)}px)`;
  }, [current, slideWidth, slidePadding]);

  return (
    <section className="slider-container">
      <div className="slick-slider">
        <div className="slick-list">
          <div className="slick-track" style={{width: trackWidth + 'px', transition: hasMotion ? '0.5s ease-in-out' : 'none'}} ref={slickTrack}>
            <Slide sliderData={sliderDataList} current={current} slideWidth={ slideWidth} motion={hasMotion} handleTouchEvent={handleTouchEvent}/>
          </div>
        </div>
      </div>
      <SliderBtn direction="left" prevSlide={prevSlide} />
      <SliderBtn direction="right" nextSlide={nextSlide} />
    </section>
  )
}

export default Slider;