import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MoviePageBar.module.css'

const MoviePageBar = ({ match }) => {
  return (
    <section className={s.MovieBar}>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink
            exact
            to={`${match.url}/cast`}
            className={s.NavLink}
            activeClassName="NavLink--active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${match.url}/reviews`}
            className={s.NavLink}
            activeClassName="NavLink--active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      </section>
  );
};

MoviePageBar.prototype = {
  match: PropTypes.object.isRequired,
};
export default withRouter(MoviePageBar);
