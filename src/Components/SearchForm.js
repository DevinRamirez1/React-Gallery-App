import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SearchForm extends Component {
    state = {
        searchText: ''
    }
    
    //allows the history to fetch previous images again
    componentDidUpdate(prevProps) {
        if(prevProps.location.pathname !== this.props.location.pathname) {
            if(this.props.location.pathname.includes('/search')){
                const searchText = this.props.location.pathname.replace('/search/', '');
                this.props.onSearch(searchText);
            }
        }
    }

    //changes searchText to target value
    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    //handles submission of the request
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        let path = `/search/${this.state.searchText}`;
        this.props.history.push(path);
        e.currentTarget.reset();
    }

    //renders the search bar
    render() {
        return(
            <form className="search-form" onSubmit={this.handleSubmit} >
                <label className="is-hidden" htmlFor="search"></label>
                <input type="search"
                    onChange={this.onSearchChange}
                    name="search"
                    ref ={(input) => this.query = input}
                    placeholder="Search..."/>
                <button type="submit" id="submit" className="search-button">search</button>
            </form>
        );
    }
}

export default withRouter(SearchForm);