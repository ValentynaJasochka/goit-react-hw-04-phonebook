import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies, onFetchError } from 'fetchAPI';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from './Home.styled';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPage = async () => {
      try {
        const { results } = await fetchTrendingMovies();
        if (!results.length) {
          toast.warn('No trending movies!!!');
          return;
        }
        setTrendingMovies(results);
      } catch (error) {
        onFetchError();
      } finally {
        setLoading(false);
      }
    };
    fetchPage();
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <ToastContainer autoClose={2000} position="top-center" />
      {loading && <Loader />}
      <MoviesList movies={trendingMovies} />
    </div>
  );
};
export default Home;
