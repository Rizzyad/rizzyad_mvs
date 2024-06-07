import { useState, useEffect } from "react";
import { getMovielist, searchMovie } from "./api";
import "./App.css";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovielist().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>RIZZYAD MVS</h1>
          <input
            type="text"
            onChange={({ target }) => search(target.value)}
            placeholder="Cari film kesayangan..."
            className="Movie-search"
          />
          <div className="Movie-container">
            {popularMovies.length > 0 ? (
              popularMovies.map((movie) => (
                <div className="Movie-wrapper" key={movie.id}>
                  <div className="Movie-title">{movie.title}</div>
                  <img
                    src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}${
                      movie.poster_path
                    }`}
                    alt={movie.title}
                    className="Movie-image"
                  />
                  <div className="Movie-date">
                    release: {movie.release_date}
                  </div>
                  <div className="Movie-rate">{movie.vote_average}</div>
                </div>
              ))
            ) : (
              <h1>No data</h1>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
