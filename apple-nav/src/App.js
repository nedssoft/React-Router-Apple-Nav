import React from 'react';
import GlobalStyle from './theme/GlobalStyle'
import Navigation from './components/Navigation/NavWrapper'
import SubNavigation from './components/Navigation/SubNav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="App">
        <Router>
          <Navigation />
          <Route path="/:name" render={(props) => <SubNavigation  {...props} />} />
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
