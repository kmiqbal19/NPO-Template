import React from "react";
import "./slider.scss";
import LeftArrow from "./icons/left-arrow.svg";
import RightArrow from "./icons/right-arrow.svg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
function BtnSlider({ moveSlide, direction }) {
  return (
    <button
      className={
        direction === "next"
          ? "slider__btn slider__btn--next"
          : "slider__btn slider__btn--prev"
      }
      onClick={moveSlide}
    >
      {/* <img
        src={direction === "next" ? RightArrow : LeftArrow}
        alt="slider-arrow"
      /> */}
      {direction === "next" ? <AiOutlineRight /> : <AiOutlineLeft />}
    </button>
  );
}

export default BtnSlider;
