import React, { useState } from "react";
import BtnSlider from "./btnSlider";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const arr = [1, 2, 3, 4, 5];
  const nextSlide = () => {
    if (arr.length !== slideIndex) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === arr.length) {
      setSlideIndex(1);
    }
    console.log(slideIndex);
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(arr.length);
    }
    console.log(slideIndex);
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="slider__container">
      {arr.map((_, index) => {
        console.log(slideIndex === index + 1);
        return (
          <div
            className={
              slideIndex === index + 1
                ? "slider__slide slider__slide--active"
                : "slider__slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt="slide-img"
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="slider__dots--container">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <div
              onClick={() => moveDot(index + 1)}
              className={
                slideIndex === index + 1
                  ? "slider__dot slider__dot--active"
                  : "slider__dot"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
