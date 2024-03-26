// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Link to={`/movies/${movie.id}`}>
        <CardImg top width="100%" src={movie.imageUrl} alt={movie.title} />
        <CardBody>
          <CardTitle tag="h5">{movie.title}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
};

export default MovieCard;
