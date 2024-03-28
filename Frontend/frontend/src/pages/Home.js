import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import Corousel from '../components/Corousel';
import Search from '../components/Search'; // Import the Search component
import axios from 'axios';
import base_url from '../api/Springboot_api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch movie data from backend upon component mount
  useEffect(() => {
    axios.get(`${base_url}/api/movies/getallmovies`)
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  }, []);


  // Filter movies based on search query
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (
    <div className="home-page">
      <Navbar />

      <Container fluid className="py-5">
        <h2 className="text-center mb-4">Trending Movies</h2>
        <Corousel />
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">All Movies</h2>

        {/* Pass setSearchQuery function as prop */}
        <Search setSearchQuery={setSearchQuery} />

        <Row>
          {filteredMovies.map(movie => (
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
