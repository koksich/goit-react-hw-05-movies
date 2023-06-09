import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout/Layout";

const HomePage = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

// import HomePage from "pages/HomePage";
// import Movies from "pages/Movies";
// import MovieDetails from "pages/MovieDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
