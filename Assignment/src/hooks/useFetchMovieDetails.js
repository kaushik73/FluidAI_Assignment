import { useState } from "react";

const useFetchMovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async (imdbID) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=${imdbID}&apikey=49774136`
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

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return { selectedMovie, fetchMovieDetails, closeModal, loading, error };
};

export default useFetchMovieDetails;
