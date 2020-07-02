import React, { Component } from 'react';
import ColorBox from './colorBox';
import Navbar from './navBar';
import PaletteFooter from './paletteFooter';
import {withStyles} from '@material-ui/styles';
import styles from './styles/paletteStyles';


class palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({ level: newLevel })
    }

    changeFormat(val) {
        this.setState({ format: val });
    }
    render() {
        const { colors, paletteName, emoji, id} = this.props.palette;
        const {classes} = this.props;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id} 
                id={color.id}
                paletteId={id}
            />
        ))
        return (
            <div className={classes.palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />

                <div className={classes.paletteColors}>
                    {colorBoxes}
                </div>

                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(palette);
