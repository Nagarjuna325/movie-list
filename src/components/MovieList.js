import React from 'react';
import RatingStars from './RatingStars';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.title} className="movie-item">
          <div className="movie-title">{movie.title}</div>
           {/* <div className="movie-category">{movie.rating} </div> */}
           <RatingStars rating={movie.rating} />
          <div className="movie-category">{movie.category}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
