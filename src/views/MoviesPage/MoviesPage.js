import React, { Component } from 'react';

import { NavLink, Route } from 'react-router-dom';

import { fetchMovieWithQuery } from 'services/fetchApi';

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

        <ul>
          {this.state.movies.map(film => (
            <li key={film.id}>
              <NavLink to="">{film.title || film.name}</NavLink>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
