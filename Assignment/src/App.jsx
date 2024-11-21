import { useEffect, useState } from "react";
import useFetchMovies from "./hooks/useFetchMovies";
import useFetchMovieDetails from "./hooks/useFetchMovieDetails";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Modal from "./components/Modal";
import Loading from "./components/Loading";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const {
    movies,
    fetchMovies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetchMovies();

  const {
    selectedMovie,
    fetchMovieDetails,
    closeModal,
    loading: detailsLoading,
    error: detailsError,
  } = useFetchMovieDetails();

  useEffect(() => {
    fetchMovies("Popular");
  }, []);

  const handleHeaderClick = () => {
    setSearchTerm("");
    fetchMovies("Popular");
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 relative">
      <header className="text-center py-4 bg-blue-500 text-white cursor-pointer">
        <h1 className="text-2xl font-bold" onClick={handleHeaderClick}>
          Movie Search App
        </h1>
      </header>

      <main className="p-4">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          fetchMovies={() => fetchMovies(searchTerm)}
        />

        {moviesLoading ? (
          <Loading />
        ) : moviesError ? (
          <div className="text-center text-red-500">{moviesError}</div>
        ) : (
          <MovieList
            movies={movies}
            showDetails={(movie) => fetchMovieDetails(movie.imdbID)}
          />
        )}
      </main>

      {detailsLoading ? (
        <Loading />
      ) : selectedMovie ? (
        <div className="">
          <Modal movie={selectedMovie} closeModal={closeModal} />
        </div>
      ) : detailsError ? (
        <div className="text-center text-red-500">{detailsError}</div>
      ) : null}

      <footer className="text-center py-2 bg-gray-200 text-gray-700 absolute w-full bottom-0">
        <p>© 2024 Movie Search App</p>
      </footer>
    </div>
  );
};

export default App;
