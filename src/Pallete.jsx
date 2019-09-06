import React, { Component } from "react";
import Colorbox from "./Colorbox";
import "./Pallete.css";
class Pallete extends Component {
  render() {
    const colorbox = this.props.colors.map(color => (
      <Colorbox background={color.color} name={color.name} />
    ));
    return (
      <div className="pallete">
        <div className="pallete-colors">{colorbox}</div>
      </div>
    );
  }
}

export default Pallete;
