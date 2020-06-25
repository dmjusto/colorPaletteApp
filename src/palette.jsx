import React, { Component } from 'react';
import ColorBox from './colorBox';
import './palette.css'

export default class palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name}/>
        ))
        return (
            <div className="Palette">
                {/* navBar goes here */}
                <div className="palette-colors">
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}
