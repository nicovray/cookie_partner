/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useNavigate } from "react-router-dom";
import logowhite from "../assets/logo_apseed_white.png";
import "./Authentification.css";

function Authentification() {
  const navigate = useNavigate();
  return (
    <div className="authentification-container">
      <div>
        <img className="logowhite" src={logowhite} alt="logowhite" />
      </div>
      <div className="buttons-authentification">
        <button
          className="button-login"
          type="button"
          onClick={() => navigate("../login", { replace: true })}
        >
          LOGIN
        </button>
        <button
          className="button-registration"
          type="button"
          onClick={() => navigate("../registration", { replace: true })}
        >
          REGISTRATION
        </button>
      </div>
    </div>
  );
}
export default Authentification;
