import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { fetchSearchMovies, onFetchError } from 'fetchAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentMovie = search.get('movie');

  useEffect(() => {
    if (!currentMovie) {
      return;
    }
    setLoading(true);
    const fetchSearch = async () => {
      try {
        const { results } = await fetchSearchMovies(currentMovie);

        if (!results.length) {
          setMovies([]);
          toast.warn('No movie was found for your request');
          return;
        }

        setMovies(results);
      } catch (error) {
        onFetchError();
      } finally {
        setLoading(false);
      }
    };
    fetchSearch();
  }, [currentMovie]);

  return (
    <>
      <SearchForm searchMovie={setSearch} />
      <ToastContainer autoClose={2000} position="top-center" />
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
export default Movies;
