// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MovieCard = ({ movie }) => {
  return (
    <Card style={styles.card}>
      <Link to={`/movies/${movie.id}`} style={styles.link}>
        <div style={styles.imageContainer}>
          <CardImg src={movie.imageUrl} alt={movie.title} style={styles.image} />
        </div>
        <CardBody style={styles.cardBody}>
          <CardTitle tag="h5" style={styles.cardTitle}>{movie.title}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
};

const styles = {
  card: {
    border: 'none',
    borderRadius: '10px',
    overflow: 'hidden', // Hide any overflow from the image
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  imageContainer: {
    width: '100%',
    height: '500px', // Fixed height for the image container
    overflow: 'hidden', // Hide any overflow from the image
  },
  image: {
    width: '100%',
    height: '100%', // Make the image fill the container
    objectFit: 'cover', // Ensure the image covers the container while maintaining aspect ratio
  },
  cardBody: {
    padding: '20px',
  },
  cardTitle: {
    margin: '0',
  },
};

export default MovieCard;
