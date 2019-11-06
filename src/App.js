import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/about';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={About} />
    </Switch>
  </div>
)

export default App;
