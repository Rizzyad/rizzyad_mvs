import { useState, useEffect } from "react";
import { getMovielist, searchMovie } from "./api";
import Header from "./components/Header";
import { Heading } from "./components/Header";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";
import { Movie } from "./components/Movies";

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
      <Header>
        <Heading />
        <SearchBar search={search}/>
        <Movies>
          <Movie popularMovies={popularMovies}/>
        </Movies>
      </Header>
    </>
  );
}

export default App;
