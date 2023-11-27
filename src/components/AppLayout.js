import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';
import { NavLink, Outlet } from 'react-router-dom';
import { Layout } from './Layout';
import { Suspense } from 'react';

export const AppLayout = () => {
  return (
    <Layout>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HomePage</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </Layout>
  );
};
