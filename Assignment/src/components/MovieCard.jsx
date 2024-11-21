import React from "react";

const MovieCard = ({ movie, showDetails }) => (
  <div
    className="p-4 bg-white rounded shadow hover:shadow-lg cursor-pointer"
    onClick={() => showDetails(movie)}
  >
    <h2 className="font-bold">{movie.Title}</h2>
    <p>{movie.Year}</p>
  </div>
);

export default MovieCard;
