import { Link, useLocation } from 'react-router-dom';

const API_URL_IMG = 'https://image.tmdb.org/t/p/original';

const MovieListItem = ({ id, title, name, image }) => {
    const location = useLocation();
    const currentPage = location.pathname === '/' ? 'movies' : location.pathname;
  return (
    <li>
      <Link to={`${currentPage}/${id}`} state={{from: location}}>
        <img src={API_URL_IMG + image} alt={title ?? name} />
        <p>{title ?? name}</p>
      </Link>
    </li>
  );
};

export default MovieListItem;
