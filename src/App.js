import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './palette';
import PaletteList from './paletteList';
import SingleColorPalette from './singleColorPalette';
import NewPaletteForm from './newPaletteForm';
import seedColors from './seedColors';
import {generatePalettes} from './colorHelpers';
// import palette from './palette';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      palettes: seedColors
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  findPalette(id){
    return this.state.palettes.find(palette => {
      return palette.id === id
    });
  }

  savePalette(newPalette){
    this.setState({palettes: [...this.state.palettes, newPalette]})
  }

  render(){
    return (
      <Switch>
        <Route exact path='/palette/new' render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps}/>}/>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps}/>}/>
        <Route exact path='/palette/:id' render={(routProps) => <Palette palette={generatePalettes(this.findPalette(routProps.match.params.id))}/>}/>
        <Route exact path='/palette/:paletteId/:colorId' render={(routeProps) => 
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalettes(this.findPalette(routeProps.match.params.paletteId)
        )}/>}/>
      </Switch>
    )
  }
}

export default App;
