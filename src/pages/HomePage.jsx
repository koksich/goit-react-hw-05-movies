import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'API';


import HandleError from 'components/HandleError/HandleError';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import MoviesList from 'components/MoviesList/MoviesList';
import Section from 'components/Section/Section';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies(page);
        if (response.length === 0) setError(true);

        setMovies(prev => [...prev, ...response]);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <>
      <Section title="Trending today">
        {!error && (
          <>
            <MoviesList movies={movies} />
            <LoadMoreBtn onClick={() => setPage(prevPage => prevPage + 1)} />
          </>
        )}
      </Section>
      {error && (
        <HandleError title="Sorry, there are no matching results. Please, try again" />
      )}
    </>
  );
};

export default HomePage;
