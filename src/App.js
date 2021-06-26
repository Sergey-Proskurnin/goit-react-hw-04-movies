import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import routes from 'routes';
import AppBar from 'components/AppBar';

const HomePage = lazy(() =>
  import('views/HomePage' /*webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('views/MoviesPage' /*webpackChunkName: "movies-view" */),
);
const MoviesDetailesPage = lazy(() =>
  import(
    'views/MoviesDetailesPage' /*webpackChunkName: "movies-detailes-view" */
  ),
);

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MoviesDetailesPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
