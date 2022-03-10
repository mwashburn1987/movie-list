//Movie List
import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map(movie =>
      <MovieListEntry movie={ movie } onWatchedMovieClick= {props.onWatchedMovieClick} />)}
  </div>

);

export default MovieList;
//PropTypes
// MovieList.propTypes = {
//   movies: PropTypes.array.isRequired
// };