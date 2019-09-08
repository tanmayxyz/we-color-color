import React, { Component } from "react";

import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "rc-slider/assets/index.css";
import "./NavBar.css";
export default class NavBar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="navbar">
        <div className="logo">
          <a href="google.com">ReactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>level : {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              step={100}
            />
          </div>
        </div>
        <div className="select-container">
          <Select>
            <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
            <MenuItem value="rgb">HEX - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">HEX - rgb(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}
