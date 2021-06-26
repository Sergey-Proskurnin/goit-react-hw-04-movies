import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(film => (
        <li key={film.id}>
          {/* <NavLink to={`/movies/${film.id}`}>{film.title || film.name}</NavLink> */}
          <NavLink
            to={{
              pathname: `/movies/${film.id}`,
              state: { from: location },
            }}
          >
            {film.title || film.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
