import Animation from "../components/Animation";
import "./Accueil.css";

export default function Accueil() {
  window.addEventListener("load", () => {
    document.body.classList.remove("loading-anim");
  });
  return (
    <div className="home-accueil">
      <div className="bloc-accueil">
        <h1>
          <span>LET</span>
        </h1>
        <Animation />
        <h1>
          <span>YOUR PROJECTS !</span>
        </h1>
      </div>
    </div>
  );
}
