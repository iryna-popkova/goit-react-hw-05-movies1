import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchMovieReviews } from 'components/apiRequest';
import { StyledList, ListItem, ReviewsText } from './reviews.styled';

export default function Reviews() {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await fetchMovieReviews(params.id);
        setReviews(reviews.results);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    }
    fetchReviews();
  }, [params.id]);

  return reviews.length === 0 ? (
    <h3>Sorry, this movie doesn't have any review yet...</h3>
  ) : (
    <StyledList>
      {reviews.map(({ id, author, content }) => (
        <ListItem key={id}>
          <p>
            <span>Author:</span> {author}
          </p>
          <ReviewsText>{content}</ReviewsText>
        </ListItem>
      ))}
    </StyledList>
  );
}
