import React from 'react';
import GlobalStyle from './theme/GlobalStyle'
import Navigation from './components/Navigation/NavWrapper'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <Navigation />
      </div>
    </React.Fragment>
  );
}

export default App;
