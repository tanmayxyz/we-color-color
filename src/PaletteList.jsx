import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "blue",
    height: "120vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
  },
  pallets: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%"
  }
};

class PaletteList extends Component {
  goToPlatte(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Color app</h1>
          </nav>
          <div className={classes.pallets}>
            {palettes.map(pal => (
              <MiniPalette
                {...pal}
                handleClick={() => this.goToPlatte(pal.id)}
                key={pal.id}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
