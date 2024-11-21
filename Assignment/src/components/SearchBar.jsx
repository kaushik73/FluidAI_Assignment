const SearchBar = ({ searchTerm, setSearchTerm, fetchMovies }) => (
  <div className="flex justify-center mt-6">
    <input
      type="text"
      className="border border-gray-300 p-2 rounded-lg w-3/4 md:w-1/2"
      placeholder="Search for a movie..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button
      onClick={fetchMovies}
      className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Search
    </button>
  </div>
);

export default SearchBar;
