/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-extraneous-dependencies */
// import LittleCard from "@components/LittleCard";
import React, { useEffect } from "react";
import LittleCard from "@components/LittleCard";
import Navigation from "@components/Navigation";
import { Widget, addResponseMessage } from "react-chat-widget";
import "./Home.css";
import imagehome from "../assets/image_home.png";
import persona1 from "../assets/persona1.jpg";
import "react-chat-widget/lib/styles.css";

export default function Home() {
  useEffect(() => {
    addResponseMessage(
      "Hi John, do you have any news on the project's budget?"
    );
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  return (
    <div className="contain-home">
      <div>
        <Navigation />
        <LittleCard />
      </div>
      <div className="div-image-home">
        <img className="image-home" src={imagehome} alt="" />
      </div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={persona1}
        title="My chat with Jessica"
        subtitle="What's up?"
      />
    </div>
  );
}
