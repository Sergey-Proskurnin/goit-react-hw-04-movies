import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { fetchMovieId } from 'services/fetchApi';
import routes from 'routes';
import MoviePageBar from 'components/MoviePageBar';
import MovieCard from 'components/MovieCard';
import contextProps from 'context/context';

const CastSection = lazy(() =>
  import('components/CastSection' /*webpackChunkName: "cast-view" */),
);
const ReviewsSection = lazy(() =>
  import('components/ReviewsSection' /*webpackChunkName: "reviews-view" */),
);

export default class MoviesDetailesPage extends Component {
  state = {
    poster_path: null,
    vote_average: null,
    title: null,
    genres: [],
    overview: null,
    release_date: null,
    handleGoBack: () => { 
      const { location, history } = this.props;

      if (location.state && location.state.from) {
        return history.push(location.state.from);
      }
      history.push(routes.home);
     
    },
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieId(movieId)
      .then(response =>
        this.setState({
          ...response.data,
          poster_path: `https://image.tmdb.org/t/p/w300${
            response.data.poster_path && response.data.poster_path
          }`,
          release_date: response.data.release_date.slice(0, 4),
        }),
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const { match } = this.props;
    const { poster_path } = this.state;

    return (
      <contextProps.Provider value={this.state}>
        <>
          {poster_path ? (
            <>
              <MovieCard />
              <MoviePageBar />
              <Suspense fallback={<h1>Loading...</h1>}>
                <Switch>
                  <Route
                    exact
                    path={`${match.path}/cast`}
                    component={CastSection}
                  />
                  <Route
                    exact
                    path={`${match.path}/reviews`}
                    component={ReviewsSection}
                  />
                </Switch>
              </Suspense>
            </>
          ) : (
            <p>We don't have any description for this movie.</p>
          )}
        </>
      </contextProps.Provider>
    );
  }
}
