import React from "react";
import "./footer.scss";
import { BsFacebook, BsMessenger, BsWhatsapp } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__socials">
        <a href="/">
          <BsFacebook />
        </a>
        <a href="/">
          <BsMessenger />
        </a>
        <a href="/">
          <BsWhatsapp />
        </a>
      </div>
      <div className="footer__text">
        <p> &copy; 2022 All rights reserved</p>
        <p>
          Developed by{" "}
          <a href="https://www.kmiqbal.com" target="_blank" rel="noreferrer">
            {">_ "}iqbal
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
