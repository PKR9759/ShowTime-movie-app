import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardImg top width="100%" src={movie.imageUrl} alt={movie.title} />
      <CardBody>
        <CardTitle tag="h5">{movie.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Rating: {movie.rating}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
