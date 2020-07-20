import React from 'react';
import PropTypes from 'prop-types';
import {
  pure,
  compose,
  withHandlers,
} from 'recompose';

import { movieType, genresObjType, selectedOptionType } from '../../types';
import Browse from './search';
import MovieList from './movies_list';


/*
  Overview
1. You have to create a layout to list out movies (latest, now playing, upcoming) you can find details here (https://developers.themoviedb.org/3/getting-started/introduction)
2. When the user clicks on the movie's card it should display the details of the movies.
3. The user should have the functionality of searching for movies.

Designing

1.The Application must be in React.
2. You are free to use any design library, but the design must be responsive.
3. For Styling the SCSS is preferred.
4. Better architecture and optimal code have their merits.

*/

const Home = (props) => {
  const {
    movies,
    latestMovies,
    upcomingMovies,
    nowplayingMovies,
    searchMovie,
    genres,
    selectDropdown,
    selected,
  } = props;



  return (
    <React.Fragment>
      <Browse
        searchMovie={searchMovie}
        selectDropdown={selectDropdown}
        selected={selected}
      />

      {
        movies.length > 0 ? <MovieList movies={movies} title='Search Results...' genres={genres} /> :
          <div><MovieList movies={nowplayingMovies} title='Now Playing' genres={genres} />
            <MovieList movies={upcomingMovies} title='Upcoming Movies' genres={genres} />
            <MovieList movies={latestMovies} title='Latest Movies' genres={genres} /></div>
      }

    </React.Fragment>
  );
};


//latest, now playing, upcoming
Home.defaultProps = {
  movies: [],
  latestMovies: [],
  nowplayingMovies: [],
  upcomingMovies: [],
  genres: {}
};

Home.propTypes = {
  latestMovies: PropTypes.arrayOf(movieType),
  nowplayingMovies: PropTypes.arrayOf(movieType),
  upcomingMovies: PropTypes.arrayOf(movieType),
  genres: genresObjType,
  searchMovie: PropTypes.func.isRequired,
  selectDropdown: PropTypes.func.isRequired,
  selected: selectedOptionType.isRequired,
};

export default compose(
  withHandlers({

  }),
  pure
)(Home);
