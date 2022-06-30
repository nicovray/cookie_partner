import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import "./Login.css";
import imageconnexionblue from "../assets/image_connexion_blue.png";

function Login() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <h1 className="title-login">LOGIN</h1>
      <form className="form-login">
        <input
          className="inputlogmail"
          type="text"
          name="mail"
          id="mail"
          placeholder="martindupont@gmail.com"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
        />
        <input
          className="inputlogpassword"
          type="password"
          name="password"
          id="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <div className="validate-login">
        <Link to="/home">
          <button className="button-validate-login" type="button">
            Validate
          </button>
        </Link>
      </div>
      <div className="div-image-connexion-blue">
        <img className="image-connexion-blue" src={imageconnexionblue} alt="" />
      </div>
    </div>
  );
}
export default Login;
