import React, { Component } from 'react';
import MiniPalette from './miniPalette';
// import {Link} from 'react-router-dom';

export default class paletteList extends Component {
    render() {
        const {palettes} = this.props;
        return (
            <div>
                <MiniPalette/>
                <h1>React Colors</h1>
                {palettes.map(p => (
                    <MiniPalette {...p}/>
                ))}
            </div>
        )
    }
}
