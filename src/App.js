import React, { Component } from 'react';
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./components/colorHelpers"

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />
      </div>
    );
  }
}

export default App;

// this page is about generating the colors
