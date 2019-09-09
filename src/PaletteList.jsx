import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>Color app</h1>
        {palettes.map(pal => (
          <p>
            <Link to={`/palette/${pal.id}`}>{pal.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}
