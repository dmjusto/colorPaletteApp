import React from 'react';
import {withStyles} from '@material-ui/styles';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
    }
}

function draggableBox(props) {
    return (
        <div className={props.classes.root} style={{backgroundColor: props.color}}>
            {props.name}
        </div>
    )
}

export default withStyles(styles)(draggableBox);