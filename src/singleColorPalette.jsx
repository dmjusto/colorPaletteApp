import React, { Component } from 'react';
import ColorBox from './colorBox';

export default class singleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }

    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;
        for(const key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1);
    }

    render() {
        const colorBoxes = this._shades.map(shade => (
            <ColorBox key={shade.name} name={shade.name} background={shade.hex} showLink={false}/>
        ))

        return (
            <div className='Palette'>
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
