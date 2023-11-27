import { fetchMovieCast } from 'components/apiRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { StyledList, ListItem } from './cast.styled';

export default function Cast() {
  const params = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      try {
        const castResponse = await fetchMovieCast(params.id);
        setCast(castResponse);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    }
    fetchCast();
  }, [params.id]);

  return (
    <StyledList>
      {cast.map(({ id, profile_path, original_name, character }) => (
        <ListItem key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={original_name}
          />
          <p>
            <span> Actor:</span> {original_name}
            <span>Character:</span> {character}
          </p>
        </ListItem>
      ))}
    </StyledList>
  );
}
