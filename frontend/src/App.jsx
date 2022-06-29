import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Navigation from "@components/Navigation";
import Profile from "@pages/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/myaccount" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
