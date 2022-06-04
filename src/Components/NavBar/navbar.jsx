import React from "react";
import "./navbar.scss";
import Images from "../../Constants";
function NavBar() {
  return (
    <nav id="navbar" className="app__nav">
      <div className="app__nav--logo">
        <img src={Images.logo} alt="main-logo" />
      </div>
    </nav>
  );
}

export default NavBar;
