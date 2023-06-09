import  { Suspense } from 'react';
import  {  Outlet } from 'react-router-dom';
import { Container, Header, Link, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;