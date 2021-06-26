import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

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

export default withRouter(MoviePageBar);
