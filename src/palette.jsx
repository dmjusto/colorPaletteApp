import React, { Component } from 'react';
import ColorBox from './colorBox';
import Navbar from './navBar';
import './palette.css'

export default class palette extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500};
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(newLevel){
        this.setState({level: newLevel})
    }
    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name}/>
        ))
        return (
            <div className="Palette">
                {/* navBar goes here */}
                <Navbar level={level} changeLevel={this.changeLevel}/>

                <div className="palette-colors">
                    {colorBoxes}
                </div>
                {/* footer goes here */}
            </div>
        )
    }
}
