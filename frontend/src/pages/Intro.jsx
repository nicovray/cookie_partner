import React from "react";
import imageintro from "../assets/image-intro-desktop.png";
import logointro from "../assets/logo_apseed.png";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro-container">
      <div>
        <img className="logointro" src={logointro} alt="logo" />
      </div>
      <div className="div-image-intro">
        <img className="image-intro" src={imageintro} alt="intro desktop" />
      </div>
      <h1 className="title-intro"> TITLE</h1>
      <p className="explications-intro"> blablabla</p>
      <button type="button" className="button-getstarted">
        Get Started
      </button>
    </div>
  );
}
export default Intro;
