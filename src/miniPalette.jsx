import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles/miniPaletteStyles';


function MiniPalette(props){
    const {classes, paletteName, emoji, colors, handleClick} = props;
    const miniColorBoxes = colors.map(c => (
        <div 
            className={classes.miniColor} 
            style={{backgroundColor: c.color}}
            key={c.name}
        />
    ));

    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>

            <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);