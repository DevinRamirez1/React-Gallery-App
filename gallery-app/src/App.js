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
      photos: [],
      clouds: [],
      mountains: [],
      dogs: [],
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
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=rest&auth_token=72157720821088818-eae52052a6d88353&api_sig=8e0b2e89e566af42a28aa17f860e199c`)
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
            <Route exact path="/" component={ () => <Redirect to="/clouds"/>} />
            <Route path="/clouds" component={ () => 
              <PhotoContainer data={this.state.clouds} title={"clouds"} /> }/>
            <Route path="/mountains" component={ () => 
              <PhotoContainer data={this.state.mountains} title={"mountains"} /> }/>
            <Route path="/dogs" component={ () => 
              <PhotoContainer data={this.state.dogs} title={"dogs"} /> }/>
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
