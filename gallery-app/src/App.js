import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import apiKey from './Components/Config';

import Home from './Components/Home';
import NotFound from './Components/NotFound';

class App extends Component {
  
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={} />
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cloud" component={}/>
            <Route path="/mountain" component={}/>
            <Route path="/dogs" component={}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
