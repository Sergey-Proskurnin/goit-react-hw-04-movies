import axios from 'axios';

const API_KEY = '7c7852d89a1cbff8e4a803b290e6dbdc';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovieWithQuery = (searchParam) => {
  const searchParams = new URLSearchParams({
    language: 'en-US',
    page: 1,
    include_adult: false,
    query: searchParam,
    api_key: API_KEY,
  });
  return axios.get(`${BASE_URL}/search/movie?${searchParams}`);
};

const fetchTrendingDayMovie = () => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
    });
    return axios.get(`${BASE_URL}/trending/all/day?${searchParams}`);
  };



export { fetchMovieWithQuery, fetchTrendingDayMovie };