import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '66ffca4bf6633f27f0e4a1c9952ef8cd';

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return await response;
  } catch (error) {
    return new Error('Sorry, somithing is wrong. Please try again later');
  }
}

export async function fetchSearchMovies(queryString) {
  try {
    const response = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${queryString}&language=en-US&page=1&include_adult=false`
    );
    return await response;
  } catch (error) {
    return new Error(
      'Sorry, there are no movies matching your search query. Please try another search'
    );
  }
}

export async function fetchMovieById(id) {
  try {
    const response = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return await response;
  } catch (error) {
    return new Error('Sorry, something is wrong. Please try again later');
  }
}

export async function fetchMovieCast(id) {
  try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return await response.data.cast;
  } catch (error) {
    return new Error('Sorry, something is wrong. Please try again later');
  }
}

export async function fetchMovieReviews(id) {
  try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return await response.data;
  } catch (error) {
    return new Error('Sorry, something is wrong. Please try again later');
  }
}
