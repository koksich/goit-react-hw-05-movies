import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';


import { Img, Item, MovieLink, Title } from './MovieListItem.styled';

const API_URL_IMG = 'https://image.tmdb.org/t/p/original';

const MovieListItem = ({ id, title, name, image }) => {
    const location = useLocation();
    const currentPage = location.pathname === '/' ? 'movies' : location.pathname;
  return (
    <Item>
      <MovieLink to={`${currentPage}/${id}`} state={{from: location}}>
        <Img src={API_URL_IMG + image} alt={title ?? name} />
        <Title>{title ?? name}</Title>
      </MovieLink>
    </Item>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
};


export default MovieListItem;
