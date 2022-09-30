import React, { useState } from "react";
import "./App.css";
import { Icon } from "@iconify/react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="switch-checkbox">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
          ></input>
          <span className="slider round"></span>
        </label>
      </div>

      <div className="container">
        <h1 id="title">Sswop</h1>
        <div className="small-container">
          <p>Coming Soon</p>
          <div className="icons">
            <Icon icon="logos:google-play-icon" style={{ fontSize: "50px" }} />
            <Icon icon="logos:apple-app-store" style={{ fontSize: "50px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
