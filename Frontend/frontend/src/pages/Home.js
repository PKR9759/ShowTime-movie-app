import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import Corousel from '../components/Corousel';

const Home = () => {
  // Sample data for movie list
  const movies = [
    { id: 1, title: 'Movie 1', imageUrl: 'https://via.placeholder.com/150', rating: 8.5 },
    { id: 2, title: 'Movie 2', imageUrl: 'https://via.placeholder.com/150', rating: 7.8 },
    { id: 3, title: 'Movie 3', imageUrl: 'https://via.placeholder.com/150', rating: 9.0 },
    // Add more movie data as needed
  ];

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
            <Col md={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
  