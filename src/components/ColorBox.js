import React, { Component } from 'react';
import "./ColorBox.css";

class ColorBox extends Component {
    render() {
        return (
            <div style={{ background: this.props.background }} className="ColorBox">
                <div className="copy-container"></div>
                <div className="box-content">
                    <span>{this.props.name}</span>
                </div>
            </div>
        );
    }
}
export default ColorBox;