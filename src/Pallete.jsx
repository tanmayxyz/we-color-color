import React, { Component } from "react";
import Colorbox from "./Colorbox";
import NavBar from "./NavBar";
import "./Pallete.css";
class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({
      level: newLevel
    });
  }
  render() {
    const { level } = this.state;
    const colorbox = this.props.pallete.colors[this.state.level].map(color => (
      <Colorbox background={color.hex} name={color.name} />
    ));
    return (
      <div className="pallete">
        <NavBar level={level} changeLevel={this.changeLevel} />
        <div className="pallete-colors">{colorbox}</div>
      </div>
    );
  }
}

export default Pallete;
