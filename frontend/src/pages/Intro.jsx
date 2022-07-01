/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useNavigate } from "react-router-dom";
import imageintro from "../assets/image-intro-desktop.png";
import logointro from "../assets/logo_apseed.png";
import plant from "../assets/plant.gif";
import "./Intro.css";

function Intro() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="intro-container">
        <div>
          <img className="logointro" src={logointro} alt="logo" />
        </div>
        <div className="div-image-intro">
          <img className="image-intro" src={imageintro} alt="intro desktop" />
        </div>
        <h1 className="title-intro">Welcome to our Collaborative Tool</h1>
        <p className="explications-intro">
          <p>
            Pin <strong>your idea</strong> on <strong>our dashboard</strong>,
          </p>
          <p>
            involve People to <strong>participate</strong>,
          </p>
          <p>
            benefit from <strong>our Collective Intelligence</strong> and
          </p>
          <p>
            let it grow as a <strong>real Project</strong> !
          </p>
        </p>
        <button
          type="button"
          className="button-getstarted"
          onClick={() => navigate("../authentification", { replace: true })}
        >
          GET STARTED
        </button>
      </div>
      <div>
        <img className="plant-icon" src={plant} alt="plant" />
      </div>
    </div>
  );
}
export default Intro;
