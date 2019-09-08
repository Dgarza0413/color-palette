import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props;
        console.log(level)
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="/">react color picker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={changeLevel}
                        />
                    </div>
                </div>

            </header>
        );
    }
}
export default Navbar;