import React, { Component } from 'react';
import './colorBox.css'

export default class colorBox extends Component {
    render() {
        const {name, background} = this.props;
        return (
            <div className='colorBox' style={{background}}>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>

                <span className='see-more'>More</span>
            </div>
        )
    }
}
