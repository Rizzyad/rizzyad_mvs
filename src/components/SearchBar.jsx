const SearchBar = ({ search }) => {
  return (
    <input
      type="text"
      onChange={({ target }) => search(target.value)}
      placeholder="Cari film favoritmu..."
      className="Movie-search"
    />
  );
};

export default SearchBar;
