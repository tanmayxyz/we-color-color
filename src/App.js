import React, { Component } from "react";
import SeedColor from "./SeedColor";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Pallete from "./Pallete";
import { generatePalette } from "./Colorhelpers";
class App extends Component {
  findPalette(id) {
    return SeedColor.find(palette => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>pallete goes here</h1>} />
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
      </Switch>
      // <div>
      //   <Pallete pallete={generatePalette(SeedColor[4])} />
      // </div>
    );
  }
}

export default App;
