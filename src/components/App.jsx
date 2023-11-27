import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import NotFoundPage from 'pages/NotFoundPage.js';
import Cast from './cast/cast';
import Reviews from './reviews/reviews';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const SearchMovies = lazy(() => import('pages/SearchMoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetailsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchMovies />} />
        <Route path="movie/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
