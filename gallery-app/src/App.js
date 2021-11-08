import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import apiKey from './Components/Config';
import {rivers, mountains, dogs} from './Components/DefaultOptions';

import Header from './Components/Header';
import SearchForm from './Components/SearchForm';
import NotFound from './Components/NotFound';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component {

  constructor() {
    super();
    this.state ={
      photos: [],
      title: [],
      query: [],
      loading: true,
      search: ''
    }
  }

  componentDidMount() {
    this.getPics();
  }

  getPics = (query) => {
    this.setState({loading: true});
    axios.get(axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`))
    .then(response => {
      this.setState ({
        photos: response.data.photos.photo,
        title: query,
        search: query,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
      this.setState({loading: false})

    });
  }


  
  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.getPics} />
          <Header />
          { (this.state.loading)
          ? <p>loading...</p>
          : <Switch>
            <Route exact path="/" component={ () => <Redirect to="/rivers"/>} />
            <Route path="/rivers" component={ () => 
              <PhotoContainer data={rivers} title={"rivers"} /> }/>
            <Route path="/mountains" component={ () => 
              <PhotoContainer data={mountains} title={"mountains"} /> }/>
            <Route path="/dogs" component={ () => 
              <PhotoContainer data={dogs} title={"dogs"} /> }/>
            <Route path="/:query" render={  () => 
              <PhotoContainer data={this.state.photos} title={this.state.title} /> } />
            <Route component={NotFound}/>
          </Switch>
          }
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
