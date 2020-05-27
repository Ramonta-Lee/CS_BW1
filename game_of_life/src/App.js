import React from 'react';
import GridContainer from './components/GridContainer.js';
import './App.css';
import Title from './components/Title';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
        <Title />
      <header className="App-header">
        <Grid />
        <p>WTF!</p>
      </header>
    </div>
  );
}

export default App;
