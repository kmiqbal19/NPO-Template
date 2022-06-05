import React from "react";
import "./showcase.scss";
function Showcase() {
  return (
    <div className="showcase__container">
      <div className="showcase__text">
        <p>
          <span>Lorem ipsum dolor sit ame</span> consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>
      </div>
      <div className="showcase__img--container">
        <img
          src="https://i.ibb.co/2PFBxZD/Pngtree-human-nature-dna-and-genetic-3628254.png"
          alt="showcaseImg"
        />
      </div>
    </div>
  );
}

export default Showcase;
