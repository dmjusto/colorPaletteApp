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
  findPalette(id){
    return seedColors.find(palette => {
      return palette.id === id
    });
  }

  render(){
    return (
      <Switch>
        <Route exact path='/palette/new' render={() => <NewPaletteForm/>}/>
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>}/>
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
