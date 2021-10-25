import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import apiKey from './Components/Config';

class App extends Component {
  
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={} />
          <Header />

          <Switch>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
