import React from 'react';
import './App.css';
import Title from './components/Title';
import { Grid } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Grid />
        <p>WTF!</p>
      </header>
    </div>
  );
}

export default App;
