import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { fetchMovieId } from 'services/fetchApi';
import routes from 'routes';
import MoviePageBar from 'components/MoviePageBar';

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
  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const { match } = this.props;
    const { poster_path, vote_average, title, genres, overview, release_date } =
      this.state;

    return (
      <>
        <button
          type="button"
          // onClick={this.props.history.goBack}>
          onClick={this.handleGoBack}
        >
          Go back
        </button>

        {poster_path ? (
          <>
            <img src={poster_path} alt={title} />
            <h2>{`${title} (${release_date})`}</h2>
            <p>User Score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            {genres.length > 0 && <h3>Genres</h3>}
            {genres.length > 0 && genres.map(({ name }) => name).join(' ')}
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
    );
  }
}
