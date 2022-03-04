import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Navigation from './navigation/navigation';
import Footer from './navigation/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Investments from './pages/investments';
import Portfolio from './pages/portfolio';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>

          <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/investments" component={Investments}/>
            <Route exact path="/portfolio" component={Portfolio}/>

          </Switch>

          <Footer/>

        </Router>

      </div>
    );
  }
}
