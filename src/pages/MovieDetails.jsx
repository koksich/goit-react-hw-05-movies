import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

import { fetchMovieData } from 'API';
import MovieData from 'components/MovieData/MovieData';
import HandleError from 'components/HandleError/HandleError';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState();
  const [error, setError] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

  const backToMovies = () => {
    navigate(backLinkHref);
  };

  useEffect(() => {
    setError(false);
    const fetchMovies = async () => {
      try {
        const response = await fetchMovieData(movieId);
        if (response.length === 0) setError(true);
        setMovieData(response);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <button type="button" onClick={backToMovies}>
        Back to movies
      </button>
          {movieData && <MovieData data={movieData} />}
          {error && <HandleError title="Something went wrong"/>}
    </div>
  );
};

export default MovieDetails;
