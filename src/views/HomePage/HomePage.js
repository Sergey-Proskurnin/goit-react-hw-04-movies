import React, { Component } from 'react';

import { fetchTrendingDayMovie } from 'services/fetchApi';
import MoviesList from 'components/MoviesList';

export default class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    fetchTrendingDayMovie()
      .then(response => this.setState({ films: response.data.results }))
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <MoviesList movies={this.state.films} />
      </>
    );
  }
}
