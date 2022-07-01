/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./Profile.css";
import Swal from "sweetalert2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Navigation from "../components/Navigation";
import persona1 from "../assets/persona1.jpg";
import progression from "../assets/progression.png";
import vignette1 from "../assets/vignette1.png";
import vignette2 from "../assets/vignette2.png";
import vignette3 from "../assets/vignette3.png";
import vignette4 from "../assets/vignette4.png";

ChartJS.register(ArcElement, Tooltip, Legend);

function Profile2() {
  const data = {
    labels: ["Java", "Python", "Javascript"],
    datasets: [
      {
        label: "My skills",
        data: [30, 40, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Jessica has received your invitation to collaborate",
      width: 600,
      padding: "3em",
      color: "#041678",
      background: "##C6EEB2 url(/images/trees.png)",
      backdrop: `
        rgba(0,0,0,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  };
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
          <button
            type="button"
            className="collaborateProject"
            onClick={handleSubmit}
          >
            COLLABORATE
          </button>
          <Doughnut
            data={data}
            height="250px"
            width="250px"
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="bloc-profile-white">
          <div className="taches-profile">
            <h2 className="taches-profile-title">My Tasks</h2>
            <img
              className="progression"
              src={progression}
              alt="task-progress"
            />
          </div>
          <div className="participe-projet-profile">
            <h2 className="participe-projet-title">Projects in Progress</h2>
            <img className="vignette1" src={vignette1} alt="vignette-projet" />
          </div>
          <div className="create-projet-profile">
            <h2 className="create-projet-title">Projects created</h2>
            <img className="vignette2" src={vignette2} alt="vignette-projet" />
          </div>
          <div className="favoris-projet-profile">
            <h2 className="favoris-projet-title">My Favorites</h2>
            <img className="vignette3" src={vignette3} alt="vignette-projet" />
            <img className="vignette4" src={vignette4} alt="vignette-projet" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile2;
