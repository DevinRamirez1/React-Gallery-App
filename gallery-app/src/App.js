import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import apiKey from './Components/Config';

import Home from './Components/Home';
import Header from './Components/Header';
import NotFound from './Components/NotFound';

class App extends Component {

  constructor() {
    super();
    this.state ={
      clouds: [],
      mountains: [],
      dogs: [],
      query: [],
      loading: true,
      search: ""
    }
  }

  getClouds() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState ({
        clouds: response.data.data,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    });
  }

  getMountains() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState ({
        mountains: response.data.data,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    });
  }

  getDogs() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState ({
        dogs: response.data.data,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    });
  }
  
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={} />
          <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/clouds" component={}/>
            <Route path="/mountains" component={}/>
            <Route path="/dogs" component={}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
