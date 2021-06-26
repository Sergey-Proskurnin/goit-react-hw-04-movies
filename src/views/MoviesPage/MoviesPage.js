import React, { Component } from 'react';

import { fetchMovieWithQuery } from 'services/fetchApi';
import MoviesList from 'components/MoviesList';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    fetchMovieWithQuery(query)
      .then(response => this.setState({ movies: response.data.results }))
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <>
        <form className={'form'} onSubmit={this.handleSubmit}>
          <label htmlFor={''} className="lable">
            <input
              className={'input'}
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              id={''}
            />
          </label>

          <button className={'button'} type="submit">
            Search
          </button>
        </form>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
