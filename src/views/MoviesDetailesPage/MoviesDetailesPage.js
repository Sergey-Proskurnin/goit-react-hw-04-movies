import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import { fetchMovieId } from 'services/fetchApi';
import CastSection from 'components/CastSection';
import ReviewsSection from 'components/ReviewsSection';


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
          poster_path: `https://image.tmdb.org/t/p/w300${response.data.poster_path}`,
          release_date: response.data.release_date.slice(0, 4),
        }),
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const { match } = this.props;
    const { poster_path, vote_average, title, genres, overview, release_date } =
      this.state;

    return (
      <>
        <button type="button" onClick={this.props.history.goBack}>
          Go back
        </button>
        <img src={poster_path} alt={title}/>
        <h2>{`${title} (${release_date})`}</h2>
        <p>User Score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        {genres.length > 0 && <h3>Genres</h3>}
        {genres.length > 0 && genres.map(({ name }) => name).join(' ')}

        <ul>
        <li>
          <NavLink
            exact
            to={`${match.url}/cast`}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/reviews`}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Switch>
 <Route exact path={`${match.path}/cast`} component={CastSection} />
 <Route exact path={`${match.path}/reviews`} component={ReviewsSection} />
      </Switch>
      </>
    );
  }
}


