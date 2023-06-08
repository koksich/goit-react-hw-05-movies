import axios from "axios";

const API_KEY = '71d3c9744b233f536e82db6c03830bc2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async page => {
    const response = await axios.get(`/trending/all/day?api_key=${API_KEY}&page=${page}`);
    return response.data.results;
}

export const fetchSearchMovies = async (value, page) => {
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      language: 'en-US',
      page: page,
      include_adult: false,
      query: value,
    });

    const response = await axios.get(`/search/movie?${searchParams}`);
    return response.data;
}

export const fetchMovieData = async id => {
    const response = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US'`);
    return response.data;
}
 
export const fetchMovieCast = async id => {
    const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US'`);
    return response.data.cast;
}

export const fetchMovieReviews = async id => { 
    const searchParams = new URLSearchParams({
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
    })
    const response = await axios.get(`/mpvie/&{id}/reviews?${searchParams}`);
    return response.data.results;

}