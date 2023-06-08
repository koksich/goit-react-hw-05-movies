import MovieListItem from 'components/MovieListItem/MovieListItem';
import { nanoid } from 'nanoid';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, name, poster_path }) => (
        <MovieListItem key={nanoid(6)} id={id} title={title} name={name} image={poster_path}></MovieListItem>
      ))}
    </ul>
  );
};

export default MoviesList;
