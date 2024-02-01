import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieCast } from 'fetchAPI';
import { Loader } from 'components/Loader/Loader';
import { CastItem, CastList, Text } from './Cast.styled';

const placeholder = 'https://placehold.jp/200x300.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCast = async () => {
      try {
        const { cast } = await fetchMovieCast(movieId);
        if (!cast.length) {
          toast.warn('No available cast information ');
          return;
        }
        setCast(cast);
      } catch (error) {
        toast.warn('No available cast information ');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      <CastList>
        {cast.map(({ id, profile_path, original_name, character }) => (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : placeholder
              }
              alt={original_name}
            />
            <Text>{original_name}</Text>
            <Text>{`Character:   ${character}`}</Text>
          </CastItem>
        ))}
      </CastList>
    </>
  );
};
export default Cast;
