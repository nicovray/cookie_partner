/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "react-router-dom";
import {
  VscLightbulb,
  VscBell,
  VscCommentDiscussion,
  VscAccount,
} from "react-icons/vsc";
import SearchBar from "./Searchbar";
import logo from "../assets/logo_apseed_white.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navbar">
      <Link to="/home">
        <div className="logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </Link>
      <SearchBar />
      <Link to="/publish">
        <VscLightbulb className="svg-icons" />
      </Link>
      <Link to="/">
        <VscBell className="svg-icons" />
      </Link>
      <Link to="/">
        <VscCommentDiscussion className="svg-icons" />
      </Link>
      <Link to="/myaccount">
        <VscAccount className="svg-icons" />
      </Link>
    </div>
  );
}
