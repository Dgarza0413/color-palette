import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./components/colorHelpers"

class App extends Component {
  findPalette(id) {
    console.log(id)
    return seedColors.find(function (palette) {
      console.log(palette.id)
      console.log(id)
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>palette</h1>} />
        <Route exact path="/palette/:id" render={(routeProps) => (
          <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
        )}
        />
      </Switch>

      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;

// this page is about generating the colors
