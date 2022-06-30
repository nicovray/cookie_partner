import "./CardDetail.css";
import Navigation from "@components/Navigation";
// import babelckgroundIllu1 from "../assets/backgroundIllu.png";
// import avancement1 from "../assets/avancement.png";
// import avancement2 from "../assets/avancement2.png";
import avancement3 from "../assets/avancement3.png";
// import avancement4 from "../assets/avancement4.png";
import avancementGrey1 from "../assets/avancementGrey1.png";
import avancementGrey2 from "../assets/avancementGrey2.png";
// import avancementGrey3 from "../assets/avancementGrey3.png";
import avancementGrey4 from "../assets/avancementGrey4.png";
import javaLogo from "../assets/javaLogo.jpg";
import gcpLogo from "../assets/gcpLogo.png";
import angularLogo from "../assets/angularLogo.png";
import persona4 from "../assets/persona4.jpg";
import persona1 from "../assets/persona1.jpg";
import persona5 from "../assets/persona5.jpg";
import persona3 from "../assets/persona3.jpg";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div className="ContainerGlobalePage">
        <div className="projectCardContainer">
          <div className="whiteBackground">
            <div className="plantsContainer">
              <img alt="" className="avancementPlants" src={avancementGrey1} />
              <img alt="" className="avancementPlants" src={avancementGrey2} />
              <img alt="" className="avancementPlants" src={avancement3} />
              <img alt="" className="avancementPlants" src={avancementGrey4} />
            </div>
            <div className="detailContainer">
              <h1 className="projectName">NAME PROJECT</h1>
              <div className="memberPhotoContainer">
                <img src={persona4} alt="" className="memberPhoto" />
                <h2 className="projectCreator">Joao Costa</h2>
              </div>
              <p className="projectDescripion">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software li{" "}
              </p>
              <p className="projectTechno">
                <span className="memberSpan">Stack techno</span>
              </p>
              <div className="technoContainer">
                <img src={javaLogo} alt="" className="javaLogo" />
                <img src={angularLogo} alt="" className="angularLogo" />
                <img src={gcpLogo} alt="" className="gcpLogo" />
              </div>

              <p className="projectRessource">
                <span className="memberSpan">Ressources</span>
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets co{" "}
              </p>
              <p className="projectMembers">
                {" "}
                <span className="memberSpan1">Members</span>
              </p>

              <div className="membersProfils">
                <div className="memberProfil1">
                  <img src={persona1} alt="" className="photoProfil" />
                  <h5>Mary Lybon | Munich Agency</h5>
                </div>
                <div className="memberProfil1">
                  <img src={persona3} alt="" className="photoProfil" />
                  <h5>Jean-Claude Biron | Lyon Agency</h5>
                </div>
                <div className="memberProfil1">
                  <img src={persona5} alt="" className="photoProfil" />
                  <h5>Anne Lebrun | Montréal Agency</h5>
                </div>
              </div>

              <p className="projectComments">
                <span className="memberSpan">Comments</span>
                <br />
                bla bla bla bla bla aset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing{" "}
              </p>
              <p className="projectHashtags">
                #megaProject #coconstruction #newProject
              </p>
              <button type="button" className="joinProject">
                Join the project
              </button>
            </div>
          </div>
        </div>
        {/* <div className="illuContainerBackground">
          <img alt="" src={babelckgroundIllu1} className="backgroundIllu1" />
        </div> */}
      </div>
    </div>
  );
}
