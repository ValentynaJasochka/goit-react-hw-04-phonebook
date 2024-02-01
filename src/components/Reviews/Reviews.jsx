import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieReview } from 'fetchAPI';
import { Loader } from 'components/Loader/Loader';

const negativeStatement = "We don't have any reviews for this movie.";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchReview = async () => {
      try {
        const { results } = await fetchMovieReview(movieId);

        setReviews(results);
      } catch (error) {
        toast.warn('No available reviews information ');
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, [movieId]);

  return !reviews.length ? (
    <h3>{negativeStatement}</h3>
  ) : (
    <>
      {loading && <Loader />}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
              <span>Author:</span> {author}
            </p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Reviews;
