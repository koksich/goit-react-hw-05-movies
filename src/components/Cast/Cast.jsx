import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'API';
import HandleError from 'components/HandleError/HandleError';
import { List, Img, Character, Name } from './Cast.styled';

const API_URL_IMG = `https://image.tmdb.org/t/p/w300/`;

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    const fetchActors = async () => {
      try {
        const response = await fetchMovieCast(movieId);
        if (response.length === 0) setError(true);
        setActors(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchActors();
  }, [movieId]);

  return (
    <div>
      {actors.length > 0 && (
        <List>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <Img src={API_URL_IMG + profile_path} alt={name} />
                <Name>{name}</Name>
                <Character>{character}</Character>
              </li>
            );
          })}
        </List>
      )}
      {error && <HandleError title="Sorry, there is no cast information" />}
    </div>
  );
};

export default Cast;
