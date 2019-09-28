import React, { Component } from "react";
import Colorbox from "./Colorbox";
import NavBar from "./NavBar";
import PaletteFooter from "./PaletteFooter";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShade(this.props.pallete, this.props.colorId);
    this.state = {
      format: "hex"
    };

    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(e) {
    this.setState({
      format: e
    });
  }
  gatherShade(palette, colorToFilterBy) {
    //todo : return all shades of a single color
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }
  render() {
    const { format } = this.state;
    const { palleteName, emoji } = this.props.pallete;
    console.log(this.props);
    const colorBoxs = this._shades.map(color => (
      <Colorbox
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className="pallete">
        <NavBar handleChange={this.changeFormat} showingAllColors={false} />
        <h1>single color palette</h1>
        <div className="pallete-colors">{colorBoxs}</div>
        <PaletteFooter paletteName={palleteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
