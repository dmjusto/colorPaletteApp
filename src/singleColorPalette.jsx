import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ColorBox from './colorBox';
import Navbar from './navBar';
import PaletteFooter from './paletteFooter';
import {withStyles} from '@material-ui/styles';
import styles from './styles/paletteStyles';


class singleColorPalette extends Component {
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
            <ColorBox key={shade.name} name={shade.name} background={shade[this.state.format]} showingFullPalette={false}/>
        ))
        const {paletteName, emoji, id} = this.props.palette;
        const {classes} = this.props;

        return (
            <div className={classes.palette}>
                <Navbar handleChange={this.changeFormat} showAllColors={false}/>
                <div className={classes.paletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(singleColorPalette);
