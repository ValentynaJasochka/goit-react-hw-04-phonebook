import { useState } from 'react';

import { Form, Input, SearchButton } from './SearchForm.styled';
import { toast } from 'react-toastify';

const SearchForm = ({ searchMovie }) => {
  const [movie, setMovie] = useState('');
  const handleMovie = event => {
    setMovie(event.target.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!movie) {
      toast.warn('Enter your request, please!');
      return;
    }
    searchMovie({ movie });
    setMovie('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search movies"
        autoFocus
        value={movie}
        name="movie"
        onChange={handleMovie}
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

export default SearchForm;
