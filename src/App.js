import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css"; 

import NavBar from "./NavBar";
import Doritos from "./Doritos";
import LittleDebbie from "./LittleDebbie";
import NatureValley from "./NatureValley";

function HomePage() {
  return (
    <div>
      <h1 className="welcomeText">
        Welcome to our virtual snack stop! What can we get for you?
      </h1>
      <div className="linkButtons">
        <ul className="pyramid">
          <li>
            <Link to="/spicy" className="button spicy">
              Spicy Snacks
            </Link>
          </li>
          <li>
            <Link to="/cosmic" className="button cosmic">
              Cosmic Treats
            </Link>
          </li>
          <li>
            <Link to="/healthy" className="button healthy">
              Healthy Options
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="backgroundOverlay"></div>
        <NavBar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/spicy" element={<Doritos />} />
            <Route path="/cosmic" element={<LittleDebbie />} />
            <Route path="/healthy" element={<NatureValley />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
