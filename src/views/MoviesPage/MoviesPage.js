import React, { Component } from 'react';

import { fetchMovieWithQuery } from 'services/fetchApi';
import MoviesList from 'components/MoviesList';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    query: '',
  };

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);

    if (searchParams.get('query')) {
      fetchMovieWithQuery(searchParams.get('query'))
        .then(response => {
          this.setState({ movies: response.data.results });
        })
        .catch(error => this.setState({ error }));
    }
  }

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value, movies: [] });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    fetchMovieWithQuery(query.trim())
      .then(response => {
        this.setState({ movies: response.data.results });
        this.onQueryChange();
      })
      .catch(error => this.setState({ error }));
  };

  onQueryChange = () => {
    const { history, location } = this.props;

    history.push({
      pathname: location.pathname,
      search: `query=${this.state.query.trim()}`,
    });
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
