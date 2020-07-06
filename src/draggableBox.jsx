import React from 'react';
import {withStyles} from '@material-ui/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const styles = {
    root: {
        width: '20%',
        height: '25%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover svg' : {
            color: 'white',
            transform: 'scale(1.5)'
        }
    },
    boxContent: {
        position: 'absolute',
        padding: '10px',
        width: '100%',
        left: '0',
        bottom: '0',
        color: 'rbga(0, 0, 0, 0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        color: 'rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s ease-in-out'
    }
}

function draggableBox(props) {
    const {classes} = props;
    return (
        <div className={classes.root} style={{backgroundColor: props.color}}>
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <DeleteForeverIcon className={classes.deleteIcon}/>
            </div>
        </div>
    )
}

export default withStyles(styles)(draggableBox);