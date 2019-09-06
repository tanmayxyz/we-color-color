import React from "react";
import SeedColor from "./SeedColor";
import "./App.css";
import Pallete from "./Pallete";

function App() {
  return (
    <div>
      <Pallete {...SeedColor[3]} />
    </div>
  );
}

export default App;
