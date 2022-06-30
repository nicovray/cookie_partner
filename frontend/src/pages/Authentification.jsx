import React from "react";
import logowhite from "../assets/logo_apseed_white.png";
import "./Authentification.css";

function Authentification() {
  return (
    <div className="authentification-container">
      <div>
        <img className="logowhite" src={logowhite} alt="logowhite" />
      </div>
      <div className="buttons-authentification">
        <button className="button-login" type="button">
          LOGIN
        </button>
        <button className="button-registration" type="button">
          REGISTRATION
        </button>
      </div>
    </div>
  );
}
export default Authentification;
