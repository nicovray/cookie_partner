/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-syntax */
import Navigation from "@components/Navigation";
import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import persona1 from "../assets/persona1.jpg";
import "./Profile.css";

export default function Profile() {
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
      <div id="myprofile">
        <h1 className="project_title">Follow your projects</h1>
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
