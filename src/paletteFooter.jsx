import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles/paletteFooterStyles';


function paletteFooter(props) {
    const {paletteName, emoji, classes} = props;

    return (
        <footer className={classes.paletteFooter}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
        </footer>
    )
}

export default withStyles(styles)(paletteFooter);