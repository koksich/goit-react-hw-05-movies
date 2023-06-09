import { fetchSearchMovies } from 'API';
import HandleError from 'components/HandleError/HandleError';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import Section from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setError(false);
    const searchValue = searchParams.get('query');

    if (!searchValue) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await fetchSearchMovies(searchValue, pages);
        const { results, total_pages } = response;

        if (results.length === 0) setError(true);

        setMovies(prev => [...prev, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        setError(true);
        console.error(error.message);
      }
    };

    fetchMovies();
  }, [pages, searchParams]);

  const handleFormSubmit = value => {
    setMovies([]);
    setPages(1);
    setTotalPages(1);
    // необходимо ли делать проверку на повторяющийся квери запрос ?
    setSearchParams({ query: value });
  };

  return (
    <>
      <Search onSubmit={handleFormSubmit} />
      {movies.length > 0 && (
        <Section title="List of movies by searchword: ">
          <MoviesList movies={movies} />
          {pages < totalPages && <LoadMoreBtn onClick={()=> setPages(prevPage => prevPage + 1)} />}
        </Section>
          )}
          {error && <HandleError title="Something went wrong :(. Please, tray again."/>}
    </>
  );
};

export default Movies;
