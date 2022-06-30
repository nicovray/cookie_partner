// import LittleCard from "@components/LittleCard";
import LittleCard from "@components/LittleCard";
import Navigation from "@components/Navigation";
import "./Home.css";
import imagehome from "../assets/image_home.png";

export default function Home() {
  return (
    <div className="contain-home">
      <div>
        <Navigation />
        <LittleCard />
      </div>
      <div className="div-image-home">
        <img className="image-home" src={imagehome} alt="" />
      </div>
    </div>
  );
}
