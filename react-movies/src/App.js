import React from 'react';
import './App.css';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';

import configureStore from "./appRedux/store";
import { Provider } from 'react-redux';
import { CommonRoute } from './components/common/layout';
import Home from './containers/home_container';
import Movie from './containers/movie_container';
import './assets/styles/style.scss';

export const stores = configureStore();

/*Fetch Store & send it to Provider in Redux
  Add Routing by adding default route to Home page i.e List of Movies
  On Click of Component is handled inside specific component
*/
function App() {
  return (
    <Provider store={stores}>
      <BrowserRouter basename="/react-movie-list">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <CommonRoute path="/home" component={Home} />
          <CommonRoute path="/movie/:movieId" component={Movie} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
