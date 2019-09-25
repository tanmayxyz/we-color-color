import React, { Component } from "react";
import SeedColor from "./SeedColor";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Pallete from "./Pallete";
import { generatePalette } from "./Colorhelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
class App extends Component {
  findPalette(id) {
    return SeedColor.find(palette => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={SeedColor} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Pallete
              pallete={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={() => <SingleColorPalette />}
        />
      </Switch>
    );
  }
}
export default App;
