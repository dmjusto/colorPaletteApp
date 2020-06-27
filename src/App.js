import React from 'react';
import Palette from './palette';
import seedColors from './seedColors';
import {generatePalettes} from './colorHelpers';

function App() {
  console.log(generatePalettes(seedColors[4]))
  return (
    <div className="App">
      <Palette {...seedColors[2]}/>
    </div>
  );
}

export default App;
