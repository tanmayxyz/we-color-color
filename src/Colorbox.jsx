import React, { Component } from "react";
import "./Colorbox.css";
export default class Colorbox extends Component {
  render() {
    return (
      <div style={{ background: this.props.background }} className="colorbox">
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}
