import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ColorBox from './colorBox';
import Navbar from './navBar';
import PaletteFooter from './paletteFooter';
import {withStyles} from '@material-ui/styles';

const styles ={
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    paletteColors: {
        height: '90%',
    },
    goBack: {
        width: '20%',
        height: '50%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        opacity: '1',
        backgroundColor: 'black',
        '& a':{
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginTop: '-15px',
            marginLeft: '-50px',
            textAlign: 'center',
            outline: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            color: 'white',
            textTransform: 'uppercase',
            border: 'none',
            transition: '0.4s',
            cursor: 'pointer',
            textDecoration: 'none',
        }
    }
}

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
