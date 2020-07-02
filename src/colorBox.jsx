import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import chroma from 'chroma-js';
import {withStyles} from '@material-ui/styles';
import './colorBox.css';

const styles ={
    colorBox: {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover button' : {
            opacity: '1'
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance() > 0.1 ? 'black' : 'white'
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.1 ? 'white' : 'black'
    },
    SeeMore: {
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        border: 'none',
        right: '0',
        bottom: '0', 
        color: props => chroma(props.background).luminance() > 0.1 ? 'rgba(0, 0, 0, 0.8)' : 'white',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase',
        margin: '0',
    },
    copyButton: {
        color: props => chroma(props.background).luminance() > 0.1 ? 'rgba(0, 0, 0, 0.8)' : 'white',
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
        texTtransform: 'uppercase',
        border: 'none',
        transition: '0.4s',
        cursor: 'pointer',
        textDecoration: 'none',
        opacity: '0'
    }
}

class colorBox extends Component {
    static defaultProps = {showingFullPalette: true};
    constructor(props){
        super(props);
        this.state = {copied: false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true}, () => {
            setTimeout( () => this.setState({copied: false}), 1500)
        })
    }

    render() {
        const {name, background, paletteId, id, showingFullPalette, classes} = this.props;
        const {copied} = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className={classes.colorBox} style={{background}}>
                    <div className={`copy-overlay ${copied ? "show" : ""}`} style={{background}}/>
                    <div className={`copy-msg ${copied ? "show" : ""}`}>
                        <h1>copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>

                    <div className="copy-container">
                        <div className="box-content">
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>

                    {showingFullPalette && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className={classes.SeeMore}>More</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(colorBox);
