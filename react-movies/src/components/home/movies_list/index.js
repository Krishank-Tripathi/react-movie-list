
import React from 'react';
import MovieBlock from '../movie_block';
import Loading from '../../../components/common/loading';

import './styles.scss';

const MovieList = (props) => {
  return props.movies.length === 0 ? (
    <Loading />
  ) : (
      <div className="box">
        <h1>{props.title}</h1>
        <section className="movie-list">
          {props.movies.map((movie) => (
            <MovieBlock
              movie={movie}
              genres={props.genres}
              key={`movie-${movie.id}`}
            />
          ))}
        </section>
      </div>
    )
}
export default MovieList;
