import React, { useState } from "react";
import BtnSlider from "./btnSlider";
import { motion } from "framer-motion";
function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const arr = [1, 2, 3, 4, 5];
  const nextSlide = () => {
    if (arr.length !== slideIndex) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === arr.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(arr.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     let number = Math.round(Math.random() * (arr.length - 1));
  //     number = number + 1;
  //     setSlideIndex(number);
  //   }, 20000);
  // }, [arr.length]);
  return (
    <div className="slider__container">
      {arr.map((item, index) => {
        return (
          <div
            className={
              slideIndex === index + 1
                ? "slider__slide slider__slide--active"
                : "slider__slide"
            }
            key={`slide-${index}`}
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt="slide-img"
            />
            <motion.div
              className="slider__slide--description"
              animate={{ opacity: [0, 1], x: [600, 0] }}
              transition={{ delay: 0.5 }}
            >
              <p>
                WE ARE ALWAYS WITH <span>HUMANITY {item}</span>
              </p>
              <p>We are helping those are in needs</p>
            </motion.div>
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
              key={`slider-dot-${index}`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
