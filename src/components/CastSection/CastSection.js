import React, { Component } from 'react';
// import PropTypes from 'prop-types'

import OnLoader from 'components/OnLoader';


import { fetchCastId } from 'services/fetchApi';

export class CastSection extends Component {
  static propTypes = {};
  state = {
    cast: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    fetchCastId(movieId)
      .then(response =>
        this.setState({ cast: response.data.cast, isLoading: false }),
      )
      .catch(error => this.setState({ error }));
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        {this.state.isLoading && (
          <OnLoader/>
        )}
        <ul>
          {cast.map(({ cast_id, character, name, profile_path }) => (
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
          ))}
        </ul>
      </>
    );
  }
}

export default CastSection;
