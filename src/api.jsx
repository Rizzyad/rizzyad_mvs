import axios from "axios";

export const getMovielist = async () => {
  const url = `${import.meta.env.VITE_REACT_APP_BASEURL}/movie/popular`;
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  };
  const movie = await axios.get(url, { headers: headers });
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const url = `${import.meta.env.VITE_REACT_APP_BASEURL}/search/movie`;
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`,
    "Content-Type": "application/json;charset=utf-8",
  };
  const search = await axios.get(url, {
    params: {
      query: q,
    },
    headers: headers,
  });
  return search.data;
};
