/*

Functionality
● Dropdown menu to select a genre (e.g., Action, Comedy, Drama).
● Button to "Fetch Movies" for the selected genre.
● Display a list of movies after "fetching."
● Show a loading spinner while fetching data.
● Display an error message if no genre is selected.

*/

import { useState } from 'react'
import './App.css'
import MovieSelector from './components/MovieSelector'


function App() {

  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  const movieListByGenre = {
    action: ["Sherlock Holmes", "Harry Potter", "John Wick"],
    comedy: ["Happy Gilmore", "Office Space", "Napoleon Dynamite"],
    drama: ["Gone Girl", "Forrest Gump", "The Godfather"]
  };

  const fetchMovies = () => {
    if (!selectedGenre) {
      setError("A genre needs to be selected.");
      setMovies([]);
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setMovies(movieListByGenre[selectedGenre]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Movie App</h1>
      <MovieSelector
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <br />
      <button id="fetch-movies" onClick={fetchMovies}>Fetch Movies</button>

      {isLoading && <p className="loading-spinner"></p>}

      <p className="error-message">{error}</p>

      {!isLoading && movies.length > 0 && (
        <div>
          {movies.map((movie, index) => (
            <p key={index}>{movie}</p>
          ))}
        </div>

      )}
    </div>
  );
}

export default App;