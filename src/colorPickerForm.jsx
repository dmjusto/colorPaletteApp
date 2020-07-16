import React, { Component } from "react";
import {ChromePicker} from 'react-color';
import { Button } from "@material-ui/core";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default class colorPickerForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentColor: 'green',
            newColorName: ''
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
            this.props.colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            )
        );

        ValidatorForm.addValidationRule('isColorUnique', () => 
            this.props.colors.every(
                ({color}) => color  !== this.state.currentColor
            )
        );
    }

    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex});
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(){
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor);
        this.setState({newColorName: ''})
    }

    render() {
        const {paletteFull} = this.props;
        const {currentColor, newColorName} = this.state;
        return (
            <div>
                <ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor}/>
                <ValidatorForm onSubmit={this.handleSubmit}>
                        <TextValidator 
                            value={newColorName}
                            name='newColorName'
                            onChange={this.handleChange}
                            validators={['required', 'isColorNameUnique', 'isColorUnique']}
                            errorMessages={['this field is required', 'name must be unique', 'color must be unique']}
                        />

                        <Button 
                            variant='contained' 
                            color='primary' 
                            style={{backgroundColor: paletteFull ? 'grey' : currentColor}}
                            type='submit'
                            disabled={paletteFull}
                        >
                            {paletteFull ? 'palette full' : 'Add Color'}
                        </Button>
                </ValidatorForm>
            </div>
        )
    }
}
