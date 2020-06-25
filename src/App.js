import React from 'react';
import Palette from './palette';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[2]}/>
    </div>
  );
}

export default App;
