import { useState } from "react";
import { OMDB_API_KEY } from "../../constants";

const useFetchMovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async (movieId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${movieId}&apikey=${OMDB_API_KEY}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setSelectedMovie(data);
      } else {
        setError(data.Error || "Failed to fetch movie details");
      }
    } catch (err) {
      setError("An error occurred while fetching movie details");
    } finally {
      setLoading(false);
    }
  };

  return { selectedMovie, fetchMovieDetails, loading, error };
};

export default useFetchMovieDetails;
