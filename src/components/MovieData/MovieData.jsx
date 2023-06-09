import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const API_URL_IMG = `https://image.tmdb.org/t/p/original`;

const MovieData = ({ data }) => {
  const { poster_path, title, name, vote_average, overview, genres } = data;

  const getGenres = genres => {
    if (genres) {
      const genresName = genres.map(genre => genre.name);
      return genresName.join(', ');
    }
    return;
  };

  return (
    <div>
      <div>
        <img src={API_URL_IMG + poster_path} alt={title ?? name} />
        <div>
          <h1>{title && name}</h1>
          <p>Average score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres: </h3>
          <p>{getGenres(genres)}</p>
        </div>
      </div>

      <div>
        <h4>Additional information</h4>
        <ul>
          <NavLink to="cast">Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </ul>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieData;
