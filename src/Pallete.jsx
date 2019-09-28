import React, { Component } from "react";
import Colorbox from "./Colorbox";
import NavBar from "./NavBar";
import "./Pallete.css";
import PaletteFooter from "./PaletteFooter";
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
    const { paletteName, emoji, id } = this.props.pallete;
    const { level, format } = this.state;
    const colorbox = this.props.pallete.colors[this.state.level].map(color => (
      <Colorbox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    ));
    return (
      <div className="pallete">
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors={true}
        />
        <div className="pallete-colors">{colorbox}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Pallete;
