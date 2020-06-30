import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './palette';
import seedColors from './seedColors';
import {generatePalettes} from './colorHelpers';
import palette from './palette';

class App extends Component {
  findPalette(id){
    return seedColors.find(palette => {
      return palette.id === id
    });
  }

  render(){
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Palette List goes here</h1>}/>
        <Route exact path='/palette/:id' render={(routProps) => <Palette palette={generatePalettes(this.findPalette(routProps.match.params.id))}/>}/>
      </Switch>
      
      // <div className="App">
      //   <Palette palette={generatePalettes(seedColors[0])}/>
      // </div>
    )
  }
}

export default App;
