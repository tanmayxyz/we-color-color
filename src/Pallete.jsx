import React, { Component } from "react";
import Colorbox from "./Colorbox";
import NavBar from "./NavBar";
import "./Pallete.css";
class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({
      level: newLevel
    });
  }
  changeFormat(e) {
    this.setState({
      format: e
    });
  }
  render() {
    const { level, format } = this.state;
    const colorbox = this.props.pallete.colors[this.state.level].map(color => (
      <Colorbox background={color[format]} name={color.name} />
    ));
    return (
      <div className="pallete">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="pallete-colors">{colorbox}</div>
      </div>
    );
  }
}

export default Pallete;
