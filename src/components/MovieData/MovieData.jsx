import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BtnLink, BtnList, Img, InfoBlock, Text, Wrapper } from './MovieData.styled';


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
      <Wrapper>
        <Img src={API_URL_IMG + poster_path} alt={title ?? name} />
        <div>
          <h1>{title && name}</h1>
          <p>Average score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres: </h3>
          <p>{getGenres(genres)}</p>
        </div>
      </Wrapper>

      <InfoBlock>
        <Text>Additional information</Text>
        <BtnList>
          <BtnLink to="cast">Cast</BtnLink>
          <BtnLink to="reviews">Reviews</BtnLink>
        </BtnList>
      </InfoBlock>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieData.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieData;
