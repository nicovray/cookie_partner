import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration-container">
      <h1 className="title-registration">REGISTRATION</h1>
      <form className="form-registration">
        <input
          className="inputregistrationmail"
          type="text"
          name="mail"
          id="mail"
          placeholder="martindupont@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="inputregistrationpassword"
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="inputconfirmpassword"
          type="password"
          name="password"
          id="password"
          placeholder="Confirmation du mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div className="validate-registration">
        <Link to="/home">
          <button className="button-validate-registration" type="button">
            Validate
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Registration;
