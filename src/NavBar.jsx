import React, { Component } from "react";

import Slider from "rc-slider";

import "rc-slider/assets/index.css";
import "./NavBar.css";
export default class NavBar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="navbar">
        <div className="logo">
          <a href="#">ReactColorPicker</a>
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
      </header>
    );
  }
}
