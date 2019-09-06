import React, { Component } from "react";
import Colorbox from "./Colorbox";
import "./Pallete.css";
class Pallete extends Component {
  render() {
    const colorbox = this.props.pallete.colors[300].map(color => (
      <Colorbox background={color.hex} name={color.name} />
    ));
    return (
      <div className="pallete">
        <div className="pallete-colors">{colorbox}</div>
      </div>
    );
  }
}

export default Pallete;
