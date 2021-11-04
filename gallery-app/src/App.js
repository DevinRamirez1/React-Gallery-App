import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import apiKey from './Components/Config';

import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import NotFound from './Components/NotFound';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component {

  constructor() {
    super();
    this.state ={
      clouds: [],
      mountains: [],
      dogs: [],
      query: [],
      loading: true,
      search: []
    }
  }

  getPics = (query = 'clouds') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState ({
        query: response.data.data,
        search: query,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    });
  }

  componentDidMount() {
    const defaultPictures = ["clouds", "mountains", "dogs"];
    defaultPictures.forEach( search => this.getPics(search, true));
    this.setState({ loading: false })
  }
  
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.getPics} />
          <Header />

          <Switch>
            <Route exact path="/" component={ () => <Redirect to="/clouds"/>} />
            <Route path="/clouds" component={ () => 
              <PhotoContainer data={this.state.clouds} title={"clouds"} /> }/>
            <Route path="/mountains" component={ () => 
              <PhotoContainer data={this.state.mountains} title={"mountains"} /> }/>
            <Route path="/dogs" component={ () => 
              <PhotoContainer data={this.state.dogs} title={"dogs"} /> }/>
            <Route path="/:query" render={  () => 
              <PhotoContainer data={this.state.query} title={this.state.title} /> } />
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
