const Modal = ({ movie, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[80vh] overflow-y-auto relative">
      <button
        className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white rounded-lg text-sm"
        onClick={closeModal}
      >
        X
      </button>
      <div className="text-center">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-lg shadow-md w-40 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
        <p className="text-gray-600 italic">
          {movie.Year} | {movie.Runtime}
        </p>
      </div>

      <div className="mt-4">
        <p className="mb-1">
          <strong className="text-lg">Genre:</strong> {movie.Genre}
        </p>
        <p className="mb-1">
          <strong className="text-lg">Director:</strong> {movie.Director}
        </p>
        <p className="mb-1">
          <strong className="text-lg">Actors:</strong> {movie.Actors}
        </p>
        <p className="mb-1">
          <strong className="text-lg">Language:</strong> {movie.Language}
        </p>
        <p className="mb-1">
          <strong className="text-lg">Country:</strong> {movie.Country}
        </p>
        <p className="mb-4">
          <strong className="text-lg">Plot:</strong> {movie.Plot}
        </p>
      </div>

      <div className="mt-4">
        <p className="mb-1 font-semibold">Ratings:</p>
        <ul className="list-disc list-inside text-gray-700">
          {movie.Ratings.map((rating, index) => (
            <li key={index}>
              {rating.Source}: {rating.Value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p>
          <strong className="text-lg">IMDB Rating:</strong> {movie.imdbRating}(
          {movie.imdbVotes} votes)
        </p>
        {movie.Awards && (
          <p className="mt-2">
            <strong className="text-lg">Awards:</strong> {movie.Awards}
          </p>
        )}
      </div>

      <div className="flex justify-end mt-6">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
