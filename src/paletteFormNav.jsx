import React, { Component } from 'react';
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button } from "@material-ui/core";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Link} from 'react-router-dom';

export default class paletteFormNav extends Component {
    constructor(props){
        super(props);
        this.state ={
            newPaletteName: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        ValidatorForm.addValidationRule('isPaletteNameUnique', () => 
            this.props.palettes.every(
                ({paletteName}) => paletteName.toLowerCase() !== this.state.newPaletteName.toLowerCase()
                )
        );
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
      }

    render() {
        const {classes, open, handleSubmit, handleDrawerOpen} = this.props;
        const {newPaletteName} = this.state;
        return (
            <div>
                <CssBaseline />
                <AppBar
                position='fixed'
                color='default'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                        Persistent drawer
                        </Typography>

                        <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                            <TextValidator
                                label='palette name' 
                                value={this.state.newPaletteName} 
                                name='newPaletteName' 
                                onChange={this.handleChange}
                                validators={["required", 'isPaletteNameUnique']}
                                errorMessages={["palette name required", 'name must be unique']}
                            />

                            <Button 
                                type='submit'
                                variant='contained' 
                                color='primary'
                            >
                                Save Palette
                            </Button>

                            <Link to='/'>
                            <Button variant='contained' color='secondary'>Go Back</Button>
                            </Link>
                        </ValidatorForm>

                        

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
