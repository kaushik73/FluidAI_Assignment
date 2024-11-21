import { useState } from "react";
import { OMDB_API_KEY } from "../../constants";

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchTerm) => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=${OMDB_API_KEY}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setError(data.Error || "Failed to fetch movies");
        setMovies([]);
      }
    } catch (err) {
      setError("An error occurred while fetching movies");
    } finally {
      setLoading(false);
    }
  };

  return { movies, fetchMovies, loading, error };
};

export default useFetchMovies;
