import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './palette';
import seedColors from './seedColors';
import {generatePalettes} from './colorHelpers';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Palette List goes here</h1>}/>
      <Route exact path='/palette/:id' render={() => <h1>Palette goes here</h1>}/>
    </Switch>
    
    // <div className="App">
    //   <Palette palette={generatePalettes(seedColors[0])}/>
    // </div>
  );
}

export default App;
