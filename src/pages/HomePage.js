import { fetchTrendingMovies } from 'components/apiRequest';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Loader } from 'components/loader/loader';
import ListOfMovies from 'components/listOfMovies/ListOfMovies';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetchTrendingMovies();
        const trendMovies = response.data.results;

        if (trendMovies.length === 0) {
          toast.error('Oops! Something went wrong!');
        } else {
          setMovies([...trendMovies]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <div>Cannot display any movies. Please try again.</div>}
      {movies.length > 0 && <ListOfMovies movies={movies} />}
      {loading && <Loader />}
    </div>
  );
}
