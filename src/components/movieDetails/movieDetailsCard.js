import {
  BackPageLink,
  MovieDiv,
  MovieImg,
  MovieInfoDiv,
  MovieTitle,
  UserScore,
  Overview,
  Genres,
  GenresList,
  NavList,
  MovieLink,
} from './movieDetailsCard.styled';

export default function MovieDetailsCard({
  moviePoster,
  title,
  name,
  overview,
  genres,
  score,
  location,
}) {
  return (
    <>
      <BackPageLink to={location?.from ?? '/'}>Back to movies</BackPageLink>
      <MovieDiv>
        {moviePoster ? (
          <MovieImg
            src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
            alt="Movie Poster"
          />
        ) : (
          <span>No image is available</span>
        )}
        <MovieInfoDiv>
          <MovieTitle>{title || name}</MovieTitle>
          <UserScore>User Score: {Math.round(score)}%</UserScore>
          <Overview>Overview: {overview}</Overview>
          <Genres>Genres</Genres>
          <GenresList>
            {genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
          <NavList>
            <li>
              <MovieLink to="cast">Cast</MovieLink>
            </li>
            <li>
              <MovieLink to="reviews">Reviews</MovieLink>
            </li>
          </NavList>
        </MovieInfoDiv>
      </MovieDiv>
    </>
  );
}
