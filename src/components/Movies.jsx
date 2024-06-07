const Movies = ({ children }) => {
  return <div className="Movie-container">{children}</div>;
};

export default Movies;

export const Movie = ({popularMovies}) => {
  return (
    <>
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
            <div className="Movie-date">release: {movie.release_date}</div>
            <div className="Movie-rate">{movie.vote_average}</div>
          </div>
        ))
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
};
