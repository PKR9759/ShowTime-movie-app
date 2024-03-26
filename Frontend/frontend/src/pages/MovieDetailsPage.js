// MovieDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details from the backend based on the movie ID
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/movies/${id}`); // Adjust the URL as per your backend API
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <Container className="mt-5">
      {movie && (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.imageUrl} alt={movie.title} style={{ width: '300px' }} />
          <p>Description: {movie.description}</p>
          <p>Director: {movie.director}</p>
          <p>Actors: {movie.actors}</p>
          {/* Add other movie details here */}
        </div>
      )}
    </Container>
  );
};

export default MovieDetailsPage;
