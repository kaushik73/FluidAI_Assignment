import React from "react";

const Modal = ({ movie, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-xl font-bold">{movie.Title}</h2>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  </div>
);

export default Modal;
