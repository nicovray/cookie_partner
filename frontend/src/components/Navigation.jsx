/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  VscLightbulb,
  VscBellDot,
  VscCommentDiscussion,
  VscAccount,
} from "react-icons/vsc";
import SearchBar from "./Searchbar";
import logo from "../assets/logo_apseed.png";
import "./Navigation.css";

export default function Navigation() {
  const notify = () => toast("You have a new notification on your project.");

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
      <button type="button" className="buttonnotif" onClick={notify}>
        <VscBellDot className="svg-icons" />{" "}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 3000,
            style: {
              background: "#3e69d1",
              color: "#fff",
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </button>
      <button
        type="button"
        className="buttonnotif"
        onClick={() => toast("You have a new message from Monica")}
      >
        <VscCommentDiscussion className="svg-icons" />
      </button>
      <Link to="/myaccount">
        <VscAccount className="svg-icons" />
      </Link>
    </div>
  );
}
