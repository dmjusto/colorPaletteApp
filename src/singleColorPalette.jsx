import React, { Component } from 'react';
import ColorBox from './colorBox';
import Navbar from './navBar';
import PaletteFooter from './paletteFooter';

export default class singleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = {format: 'hex'};
        this.changeFormat = this.changeFormat.bind(this);
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

    changeFormat(val) {
        this.setState({ format: val });
    }

    render() {
        const colorBoxes = this._shades.map(shade => (
            <ColorBox key={shade.name} name={shade.name} background={shade[this.state.format]} showLink={false}/>
        ))
        const {paletteName, emoji} = this.props.palette;

        return (
            <div className='Palette'>
                <Navbar handleChange={this.changeFormat} showAllColors={false}/>
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}
