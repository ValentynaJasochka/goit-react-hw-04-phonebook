import { BackLink, Title, NotFoundContainer } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Title>Sorry, something wrong</Title>
      <BackLink to="/">Back to HOME page</BackLink>
    </NotFoundContainer>
  );
};
export default NotFound;
