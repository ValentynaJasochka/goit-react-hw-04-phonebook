import axios from 'axios';
import { toast } from 'react-toastify';

export const URL = 'https://api.themoviedb.org/3';
const API_KEY = '1458aa5a0f3768251d977a5078bcec84';

export async function fetchTrendingMovies() {
  const url = `${URL}/trending/movie/day?api_key=${API_KEY}&page=1&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovie(id) {
  const url = `${URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchSearchMovies(search) {
  const url = `${URL}/search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=1&include_adult=false`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchMovieCast(id) {
  const url = `${URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url);
  return response.data;
}
export async function fetchMovieReview(id) {
  const url = `${URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
}

export function onFetchError() {
  toast.error(
    'Oops! Something went wrong! Try reloading the page or make another choice!'
  );
}
