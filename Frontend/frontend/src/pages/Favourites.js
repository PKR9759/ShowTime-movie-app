// src/pages/Favorites.js

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavBar from '../components/Navbar';
import MovieCard from '../components/MovieCard'; // Import the MovieCard component

const Favorites = () => {
  // Dummy data for favorite movies
  const favoriteMovies = [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      year: 1994,
      posterUrl: 'https://via.placeholder.com/150',
      synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      id: 2,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      year: 1972,
      posterUrl: 'https://via.placeholder.com/150',
      synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
    },
    // Add more favorite movies here
  ];

  return (
    <div>
      <NavBar />
      <Container className="mt-5">
        <h1 className="text-center mb-4">Favorite Movies</h1>

        {/* Display favorite movies using MovieCard component */}
        <Row>
          {favoriteMovies.map(movie => (
            <Col sm="6" md="4" lg="3" key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Favorites;
