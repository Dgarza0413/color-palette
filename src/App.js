import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from "./components/Palette";
import PaletteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import seedColors from "./seedColors";
import { generatePalette } from "./components/ColorHelpers"

class App extends Component {
    findPalette(id) {
        console.log(id)
        return seedColors.find(function (palette) {
            console.log(palette.id)
            return palette.id === id;
        });
    }
    render() {
        return (
            <Switch>
                <Route exact path="/palette/:paletteId/:colorId"
                    render={routeProps =>
                        <SingleColorPalette
                            colorId={routeProps.match.params.colorId}
                            palette={generatePalette(
                                this.findPalette(routeProps.match.params.paletteId)
                            )}
                        />}
                />
                <Route exact path="/"
                    render={routeProps =>
                        <PaletteList
                            palettes={seedColors}
                            {...routeProps} />} />
                <Route exact path="/palette/:id"
                    render={(routeProps) => (
                        <Palette
                            palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
                    )}
                />
                {/* <Route exact path="/palette/:paletteId/:colorId" render={() => <SingleColorPalette />} /> */}
            </Switch>
        );
    }
}

export default App;

// this page is about generating the colors
