import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { fetchMovie } from 'fetchAPI';
import {
  InformationNav,
  InformationLink,
  MovieInformation,
  Title,
  ListItem,
  GenresList,
  BackLink,
} from './MoviesDetails.styled';
import { Loader } from 'components/Loader/Loader';

const placeholder = 'https://placehold.jp/300x450.png';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const BackLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setLoading(true);
    const fetchMovieID = async () => {
      try {
        const movie = await fetchMovie(movieId);
        setMovie({ ...movie });
      } catch (error) {
        toast.warn('No available movie information ');
      } finally {
        setLoading(false);
      }
    };
    fetchMovieID();
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <BackLink to={BackLinkLocationRef.current}>Go back</BackLink>
      <ToastContainer autoClose={2000} position="top-center" />
      {loading && <Loader />}
      <MovieInformation>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : placeholder
          }
          alt={title}
        />
        <div>
          <Title>{title}</Title>
          <p>Rating: {Math.round(vote_average)}</p>

          {overview && (
            <>
              <Title>Overview</Title>
              <p>{overview}</p>
            </>
          )}
          <Title>Genres</Title>
          <GenresList>
            {genres?.map(genre => (
              <ListItem key={genre.id}>{genre.name}</ListItem>
            ))}
          </GenresList>
        </div>
      </MovieInformation>
      <div>
        <Title>Additional information</Title>
        <InformationNav>
          <ListItem>
            <InformationLink to="cast">Cast</InformationLink>
          </ListItem>
          <ListItem>
            <InformationLink to="reviews">Reviews</InformationLink>
          </ListItem>
        </InformationNav>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetails;
