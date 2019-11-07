import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/about';
import Services from './components/service';
import Insurance from './components/insurance';
import Contact from './components/contact';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/insurance" component={Insurance} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </div>
)

export default App;
