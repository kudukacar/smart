import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/about';
import Services from './components/service';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/services" component={Services} />
    </Switch>
  </div>
)

export default App;
