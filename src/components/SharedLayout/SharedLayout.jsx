import { Outlet } from 'react-router-dom';
import { Link, Container, Navigation } from './SharedLayout.styled';

import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Container>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Navigation>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default SharedLayout;
