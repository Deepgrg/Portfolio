// core and third party modules
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

// project modules
import './App.css';
import Home from './components/Home';
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
      {/* Content of the body */}
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
