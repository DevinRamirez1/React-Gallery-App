import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SearchForm extends Component {
    state = {
        searchText: ''
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        let path = `/search/${this.state.searchText}`;
        this.props.history.push(path);
        e.currentTarget.reset();
    }

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