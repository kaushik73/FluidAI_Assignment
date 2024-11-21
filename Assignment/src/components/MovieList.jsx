import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, showDetails }) => {
  if (!movies.length) {
    return (
      <div className="text-center mt-6 text-gray-600">
        <p>No movies found. Start searching for a movie!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} showDetails={showDetails} />
      ))}
    </div>
  );
};

export default MovieList;
