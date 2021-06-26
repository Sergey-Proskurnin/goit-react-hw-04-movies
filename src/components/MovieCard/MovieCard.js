import React from 'react';

import contextProps from 'context/context';

const MovieCard = () => {
  return (
    <contextProps.Consumer>
      {({
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        genres,
        handleGoBack,
      }) => {
        return (
          <>
          <button
            type="button"
            // onClick={this.props.history.goBack}>
            onClick={handleGoBack}
          >
            Go back
          </button>
            <img src={poster_path} alt={title} />
            <h2>{`${title} (${release_date})`}</h2>
            <p>User Score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            {genres.length > 0 && <h3>Genres</h3>}
            {genres.length > 0 && genres.map(({ name }) => name).join(' ')}
          </>
        );
      }}
    </contextProps.Consumer>
  );
};

export default MovieCard;
