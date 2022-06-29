// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Animation from "./components/Animation";
import Home from "@pages/Home";
import Intro from "@pages/Intro";
import Profile from "@pages/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/myaccount" element={<Profile />} />
        </Routes>
      </Router>
      <Animation />
    </div>
  );
}

export default App;
