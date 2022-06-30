import React from "react";
import "./Profile.css";
import Navigation from "../components/Navigation";
import persona1 from "../assets/persona1.jpg";

function Profile2() {
  return (
    <div className="profile2-container">
      <Navigation />
      <div className="bloc-color-profile2">
        <div className="div-align-bloc-profile">
          <div className="div-image-profile">
            <img className="image-profile" src={persona1} alt="" />
          </div>
          <div className="texte-profile">
            <h2 className="name-profile2">PARKER</h2>
            <h2 className="firstname-profile2">Jessica</h2>
            <h2 className="job-profile2">Web Developer</h2>
            <h2 className="agency-profile2">Nantes Agency</h2>
          </div>
        </div>
        <div className="bloc-profile-white">
          <div className="taches-profile">
            <h2 className="taches-profile-title">Mes tâches</h2>
          </div>
          <div className="participe-projet-profile">
            <h2 className="participe-projet-title">Mes projets en cours</h2>
          </div>
          <div className="create-projet-profile">
            <h2 className="create-projet-title">Mes projets créés</h2>
          </div>
          <div className="favoris-projet-profile">
            <h2 className="favoris-projet-title">Mes favoris</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile2;
