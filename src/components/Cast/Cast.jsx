import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from 'API';
import HandleError from 'components/HandleError/HandleError';

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
        <ul>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img src={API_URL_IMG + profile_path} alt={name} />
                <h4>{name}</h4>
                <p>{character}</p>
              </li>
            );
          })}
        </ul>
      )}
      {error && <HandleError title="Sorry, there is no cast information" />}
    </div>
  );
};

export default Cast;
