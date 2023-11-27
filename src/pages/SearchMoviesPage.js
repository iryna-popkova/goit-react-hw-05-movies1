import { fetchSearchMovies } from 'components/apiRequest';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesSearchForm from 'components/movieSearchForm/movieSearchForm';
import ListOfMovies from 'components/listOfMovies/ListOfMovies';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const onSearchMovie = async () => {
      try {
        const searchMoviesResponce = await fetchSearchMovies(currentQuery);
        setMovies(searchMoviesResponce.data.results);
      } catch (error) {
        setError(true);
      }
    };
    onSearchMovie();
  }, [searchParams]);

  return (
    <>
      <MoviesSearchForm
        setSearchParams={setSearchParams}
        initialValue={searchParams.get('query')}
      />
      {movies.length > 0 && <ListOfMovies movies={movies} />}
    </>
  );
}
