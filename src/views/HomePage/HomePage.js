import React, { Component } from 'react';

import OnLoader from 'components/OnLoader';
import { fetchTrendingDayMovie } from 'services/fetchApi';
import MoviesList from 'components/MoviesList';

export default class HomePage extends Component {
  state = {
    films: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchTrendingDayMovie()
      .then(response =>
        this.setState({ films: response.data.results, isLoading: false }),
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        {this.state.isLoading && <OnLoader />}
        <MoviesList movies={this.state.films} />
      </>
    );
  }
}
