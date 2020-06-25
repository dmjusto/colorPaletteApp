import React, { Component } from 'react';
import './colorBox.css'

export default class colorBox extends Component {
    render() {
        return (
            <div className='colorBox' style={{backgroundColor: this.props.background}}>
                <span>{this.props.name}</span>
                <span>More...</span>
            </div>
        )
    }
}
