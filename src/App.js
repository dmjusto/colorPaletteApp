import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './palette';
import PaletteList from './paletteList';
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
        <Route exact path='/' render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps}/>}/>
        <Route exact path='/palette/:id' render={(routProps) => <Palette palette={generatePalettes(this.findPalette(routProps.match.params.id))}/>}/>
        <Route exact path='/palette/:paletteId/:colorId' render={() => <h1>Single Color Page</h1>}/>
      </Switch>
    )
  }
}

export default App;
