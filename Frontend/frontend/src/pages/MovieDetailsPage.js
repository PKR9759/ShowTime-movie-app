// MovieDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import base_url from '../api/Springboot_api';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details from the backend based on the movie ID
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${base_url}/api/movies/getmoviebyid/${id}`);
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
        <Row>
          <Col md={6}>
            <Card className="shadow-lg">
              <CardImg top src={movie.imageUrl} alt={movie.title} />
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-lg">
              <CardBody>
                <CardTitle tag="h2" className="text-center">{movie.title}</CardTitle>
                <CardText>
                  <strong>Description:</strong> {movie.description}<br />
                  <strong>Director:</strong> {movie.director}<br />
                  <strong>Actors:</strong> {movie.actors}<br />
                  <strong>Release Date:</strong> {movie.releaseDate}<br />
                  <strong>Type:</strong> {movie.type}<br />
                  <strong>IMDB Rating:</strong> {movie.imdbRating}<br />
                  <strong>Duration:</strong> {movie.duration}<br />
                  <strong>Language:</strong> {movie.language}<br />
                  <strong>Country:</strong> {movie.country}<br />
                  <strong>Image URL:</strong> {movie.imageUrl}<br />
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieDetailsPage;
