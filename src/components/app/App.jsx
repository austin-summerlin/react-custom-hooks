import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HPCharactersContainer from '../../containers/HPCharactersContainer';
import Home from '../Home';
import Header from '../Header';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:name" component={HPCharactersContainer} />
        </Switch>
      </Router>
    </>
  );
}
