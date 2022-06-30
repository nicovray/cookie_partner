/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-syntax */
import Navigation from "@components/Navigation";
import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import persona1 from "@assets/persona1.jpg";
import persona5 from "@assets/persona5.jpg";
import persona2 from "@assets/persona2.jpg";
import persona3 from "@assets/persona3.jpg";
import persona4 from "@assets/persona4.jpg";
import projet1 from "@assets/visuelProjet1.jpg";
import projet2 from "@assets/visuelProjet2.jpg";
import projet3 from "@assets/visuelProjet3.jpg";
import projet4 from "@assets/visuelProjet4.jpg";

import "./profile.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Profile() {
  const data = {
    labels: ["Tasks to do", "Tasks done", "Current tasks"],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 40, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
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
  useEffect(() => {
    addResponseMessage("We can meet on the 15th maybe...");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  return (
    <div>
      <Navigation />
      <div className="profile">
        <img className="userprofile" src={persona1} alt="profile account" />
        <p>Jessica PARKER</p>
        <p>Nantes Agency</p>
        <p>Web developer</p>
        <h2>Projects in which I am involved</h2>
        <div className="supercard">
          <div className="cardproject">
            <a href="t" className="profilecard">
              <img src={projet1} className="card__image" alt="" />
              <div className="card__overlay1">
                <div className="card__header1">
                  <svg
                    className="card__arc1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path />
                  </svg>
                  <img className="card__thumb" src={persona1} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Name of the idea</h3>
                    <span className="card__status">Jessica Parker</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
            <div>
              <a href="t" className="profilecard">
                <img src={projet2} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img className="card__thumb" src={persona5} alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">Project name</h3>
                      <span className="card__status">Anaïs Leroux</span>
                    </div>
                  </div>
                  <p className="card__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, blanditii sipselit ...
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <h2>Projects i have completed</h2>
        <div className="projetdone">
          <div>
            <a href="t" className="profilecard">
              <img src={projet3} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={persona2} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Project name</h3>
                    <span className="card__status">Johanna Prier</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis ...
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="t" className="profilecard">
              <img src={projet4} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    className="card__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div className="card__header-text">
                    <h3 className="card__title">Name Project</h3>
                    <span className="card__status">Kim Sayer</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis ...
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="t" className="profilecard">
              <img src={projet1} className="card__image" alt="" />
              <div className="card__overlay1">
                <div className="card__header1">
                  <svg
                    className="card__arc1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path />
                  </svg>
                  <img className="card__thumb" src={persona3} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Name of the idea</h3>
                    <span className="card__status">Alain Renaud</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="t" className="profilecard">
              <img src={projet4} className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src={persona4} alt="" />
                  <div className="card__header-text">
                    <h3 className="card__title">Project Name</h3>
                    <span className="card__status">Joao Costa</span>
                  </div>
                </div>
                <p className="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis ...
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="taches">
          <h3>My tasks</h3>
          <div width="200px">
            <Doughnut
              data={data}
              height="250px"
              width="250px"
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={persona1}
          title="My chat with Jessica"
          subtitle="What's up?"
        />
      </div>
    </div>
  );
}
