/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Intro from "@pages/Intro";
import Profile from "@pages/Profile";
import Publish from "@pages/Publish";
import "./App.css";
import Authentification from "@pages/Authentification";
import Login from "@pages/Login";
import Registration from "@pages/Registration";
import CardDetail from "@pages/CardDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/authentification" element={<Authentification />} />
          <Route path="/login" element={<Login />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/registration" element={<Registration />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/myaccount" element={<Profile />} />
          <Route path="/projectDetail" element={<CardDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
