import React from "react";
import SeedColor from "./SeedColor";
import "./App.css";
import Pallete from "./Pallete";
import { generatePalette } from "./Colorhelpers";
function App() {
  return (
    <div>
      <Pallete pallete={generatePalette(SeedColor[4])} />
    </div>
  );
}

export default App;
