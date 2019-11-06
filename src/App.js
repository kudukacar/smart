import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/footer';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Footer} />
    </Switch>
  </div>
)

export default App;
