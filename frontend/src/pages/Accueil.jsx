// import ReactPlayer from "react-player";
import bloom from "../assets/bloom.mp4";
import "./Accueil.css";

export default function Accueil() {
  window.addEventListener("load", () => {
    document.body.classList.remove("loading-anim");
  });
  return (
    <div className="home-accueil">
      <div className="bloc-accueil">
        <h1 className="let">
          <span>Let</span>
        </h1>
        <div>
          <video height="650" title="" autoPlay loop muted src={bloom} />
        </div>
        <h1 className="your-projects">
          <span>Your Projects !</span>
        </h1>
      </div>
    </div>
  );
}
