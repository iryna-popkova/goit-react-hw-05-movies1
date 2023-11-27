import { ListContainer, MoviesList, Movie } from './ListOfMovies.styled';
import { useLocation, Link } from 'react-router-dom';

export default function ListOfMovies({ movies }) {
  const location = useLocation();
  return (
    <ListContainer>
      <MoviesList>
        {movies.map(movie => (
          <Movie key={movie.id}>
            <Link state={{ from: location }} to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </Movie>
        ))}
      </MoviesList>
    </ListContainer>
  );
}
