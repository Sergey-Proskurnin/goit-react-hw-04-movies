import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./App.css";

import HomePage from 'views/HomePage';
import MoviesPage from 'views/MoviesPage';
import MoviesDetailesPage from 'views/MoviesDetailesPage';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="movies/:movieId" component={MoviesDetailesPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
