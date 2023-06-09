import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import MovieListItem from 'components/MovieListItem/MovieListItem';
import { List } from './MovieList.styled';



const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, name, poster_path }) => (
        <MovieListItem
          key={nanoid(6)}
          id={id}
          title={title}
          name={name}
          image={poster_path}
        ></MovieListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
