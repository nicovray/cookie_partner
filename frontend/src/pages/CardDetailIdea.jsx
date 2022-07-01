/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
import "./CardDetailIdea.css";
import Navigation from "@components/Navigation";
import React, { useEffect } from "react";
// import babelckgroundIllu1 from "../assets/backgroundIllu.png";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Widget, addResponseMessage } from "react-chat-widget";
import avancement1 from "../assets/avancement.png";
// import avancement2 from "../assets/avancement2.png";
// import avancement3 from "../assets/avancement3.png";
// import avancement4 from "../assets/avancement4.png";
// import avancementGrey1 from "../assets/avancementGrey1.png";
import avancementGrey2 from "../assets/avancementGrey2.png";
import avancementGrey3 from "../assets/avancementGrey3.png";
import avancementGrey4 from "../assets/avancementGrey4.png";
import javaLogo from "../assets/javaLogo.jpg";
import gcpLogo from "../assets/gcpLogo.png";
import angularLogo from "../assets/angularLogo.png";
import persona4 from "../assets/persona4.jpg";
import persona1 from "../assets/persona1.jpg";
import persona5 from "../assets/persona5.jpg";
import persona3 from "../assets/persona3.jpg";
import Comments from "../components/Comments";
import "../components/Progression.css";
import Progression from "../components/Progression";
import "react-chat-widget/lib/styles.css";

export default function CardDetail() {
  useEffect(() => {
    addResponseMessage(
      "Hi John, do you have any news on the project's budget?"
    );
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Congratulations, you have joined the project !",
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
    <div>
      <Navigation />
      <div className="ContainerGlobalePage">
        <div className="projectCardContainer1">
          <div className="whiteBackground">
            <div className="detailContainer">
              <h1 className="projectName">COUNTER CYBER ATTACKS</h1>
              <div className="plantsContainer">
                <img alt="" className="avancementPlants" src={avancement1} />
                <img
                  alt=""
                  className="avancementPlants"
                  src={avancementGrey2}
                />
                <img
                  alt=""
                  className="avancementPlants"
                  src={avancementGrey3}
                />
                <img
                  alt=""
                  className="avancementPlants"
                  src={avancementGrey4}
                />
              </div>
              <div className="leftContainer">
                <div className="memberPhotoContainer">
                  <img src={persona4} alt="" className="memberPhoto" />
                  <h2 className="projectCreator">Joao Costa</h2>
                </div>
                <p className="projectDescripion">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software li{" "}
                </p>
                <p className="projectTechno">
                  <span className="memberSpan">Stack</span>
                </p>
                <div className="technoContainer">
                  <img src={javaLogo} alt="" className="javaLogo" />
                  <img src={angularLogo} alt="" className="angularLogo" />
                  <img src={gcpLogo} alt="" className="gcpLogo" />
                </div>

                <p className="projectRessource">
                  <span className="memberSpan">Resources and deadlines</span>
                  <br />
                  It was popularised in the 1960s with the release of Letraset
                  sheets co{" "}
                </p>
                <p className="projectMembers">
                  {" "}
                  <span className="memberSpan1">Members</span>
                </p>
                <div className="membersProfils">
                  <Link to="/myaccount">
                    <div className="memberProfil1">
                      <img src={persona1} alt="" className="photoProfil" />

                      <h5>Jessica Parker | Nantes Agency</h5>
                    </div>
                  </Link>
                  <div className="memberProfil1">
                    <img src={persona3} alt="" className="photoProfil" />
                    <h5>Jean-Claude Biron | Lyon Agency</h5>
                  </div>
                  <div className="memberProfil1">
                    <img src={persona5} alt="" className="photoProfil" />
                    <h5>Anne Lebrun | Montréal Agency</h5>
                  </div>
                </div>
                <p className="projectMembers">
                  {" "}
                  <span className="memberSpan1">Progress</span>
                </p>
                <div className="progressionContainer">
                  <Progression />
                </div>

                <p className="projectHashtags">#newProject</p>
                <p className="projectHashtags">#coConstruction</p>
                <p className="projectHashtags">#newIdea</p>
                <button
                  type="button"
                  className="joinProject"
                  onClick={handleSubmit}
                >
                  Join the project
                </button>
              </div>
            </div>

            <div className="commentsContainer">
              <p className="projectComments">
                <span className="memberSpan">Comments</span>
              </p>
              <Comments />
            </div>
          </div>
        </div>
        {/* <div className="illuContainerBackground">
          <img alt="" src={babelckgroundIllu1} className="backgroundIllu1" />
        </div> */}
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
