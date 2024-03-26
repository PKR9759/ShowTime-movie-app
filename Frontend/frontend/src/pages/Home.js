import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import Corousel from '../components/Corousel';
import axios from 'axios';

const Home = () => {
  const [movies, setMovies] = useState([]);

  // Fetch movie data from backend upon component mount
  useEffect(() => {
    axios.get('/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  }, []);

  // Function to handle click on a movie card
  const handleMovieClick = (movie) => {
    // Implement your logic to show all details of the selected movie
    console.log('Clicked Movie:', movie);
  };

  return (
    <div className="home-page">
      <Navbar />

      <Container fluid className="py-5">
        <h2 className="text-center mb-4">Trending Movies</h2>
        <Corousel />
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">All Movies</h2>
        <Row>
          {movies.map(movie => (
            <Col md={3} key={movie.id} onClick={() => handleMovieClick(movie)}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
