import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import OnLoader from 'components/OnLoader';
import { fetchTrendingDayMovie } from 'services/fetchApi';
import MoviesList from 'components/MoviesList';
import sA from './HomePage.module.css';

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
        <CSSTransition
          in={true}
          appear={true}
          timeout={750}
          classNames={sA}
          unmountOnExit
        >
          <h1>Trending today</h1>
        </CSSTransition>

        {this.state.isLoading && <OnLoader />}
        <MoviesList movies={this.state.films} />
      </>
    );
  }
}
