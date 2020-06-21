import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import { CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route path='/aboutMe' component={AboutMe} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default App;
