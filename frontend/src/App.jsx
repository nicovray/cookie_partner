// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Profile from "./pages/Profile";
import Accueil from "./pages/Accueil";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/accueil" element={<Accueil />} />
          <Route exact path="/" element={<Intro />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/myaccount" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
