import React from 'react';
import Palette from './palette';
import seedColors from './seedColors';
import {generatePalettes} from './colorHelpers';

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalettes(seedColors[0])}/>
    </div>
  );
}

export default App;
