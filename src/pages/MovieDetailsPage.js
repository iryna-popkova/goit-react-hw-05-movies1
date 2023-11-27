import { fetchMovieById } from 'components/apiRequest';
import MovieDetailsCard from 'components/movieDetails/movieDetailsCard';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/loader/loader';

export default function MoviesDetailsPage() {
  const location = useLocation();
  const params = useParams();
  const backLinkRef = useRef(location);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMovieById(params.id);
        setMovie(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieDetails();
  }, [params.id]);

  return (
    <div>
      {loading && <Loader />}
      {error && <div>Cannot display any movie. Please try again.</div>}
      <Link to={backLinkRef.current.state?.from ?? '/movie'}></Link>
      <div>
        <MovieDetailsCard
          moviePoster={movie.poster_path}
          title={movie.title}
          name={movie.name}
          overview={movie.overview}
          genres={movie.genres}
          score={movie.vote_average}
          location={backLinkRef.current.state}
        />
      </div>
      <Outlet />
    </div>
  );
}
