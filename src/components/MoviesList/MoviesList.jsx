import { useLocation } from 'react-router-dom';
import { List, ListItem, LinkString, FilmTitle } from './MoviesList.styled';
const placeholder = 'https://placehold.jp/300x450.png';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <ListItem key={`${id}`}>
          <LinkString to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : placeholder
              }
              alt={title}
            />
            <FilmTitle>{title}</FilmTitle>
          </LinkString>
        </ListItem>
      ))}
    </List>
  );
};
export default MoviesList;
