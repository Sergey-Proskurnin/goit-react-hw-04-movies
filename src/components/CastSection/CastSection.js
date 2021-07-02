import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import OnLoader from 'components/OnLoader';
import { fetchCastId } from 'services/fetchApi';
import { makeId } from 'components/slugId';
import sA from './animationCast.module.css';

export class CastSection extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };
  state = {
    cast: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    fetchCastId(makeId(movieId))
      .then(response => this.setState({ cast: response.data.cast }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {this.state.isLoading && <OnLoader />}
        <TransitionGroup component="ul">
          {cast.length > 0 ? (
            cast.map(({ cast_id, character, name, profile_path }) => (
              <CSSTransition key={cast_id} timeout={1000} classNames={sA}>
                <li key={cast_id}>
                  {profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                      alt={name}
                    />
                  )}
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </li>
              </CSSTransition>
            ))
          ) : (
            <p>We don't have any reviews for this movie.</p>
          )}
        </TransitionGroup>
      </>
    );
  }
}

export default CastSection;
