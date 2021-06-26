import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviePageBar = ({ match }) => {
  return (
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
  );
};

MoviePageBar.prototype = {
  match: PropTypes.object.isRequired,
};
export default withRouter(MoviePageBar);
