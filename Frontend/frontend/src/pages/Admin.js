import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import { FaPlus } from 'react-icons/fa'; // Import the plus icon
import AdminMovieCard from '../components/AdminMovieCard';
import Navbar from '../components/Navbar';
import Search from '../components/Search'; // Import the Search component
import axios from 'axios';
import base_url from '../api/Springboot_api';

const AdminPage = () => {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    rating: ''
  });
  const [searchQuery, setSearchQuery] = useState(''); // Add state for search query

  // Fetch movie data from backend upon component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios.get(`${base_url}/api/movies/getallmovies`)
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  };

  const toggleModal = () => setModal(!modal);

  const handleChange = e => {
    setSearchQuery(e.target.value); // Update search query
  };

  // Filter movies based on search query
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = () => {
    axios.post(`${base_url}/api/movies/addmovie`, formData)
      .then(response => {
        fetchMovies(); // Fetch updated movie list
        toggleModal();
      })
      .catch(error => {
        console.error('Error adding movie:', error);
      });
  };

  const handleUpdate = (id, updatedData) => {
    axios.put(`${base_url}/api/movies/update/${id}`, updatedData)
      .then(response => {
        fetchMovies(); // Fetch updated movie list
      })
      .catch(error => {
        console.error('Error updating movie:', error);
      });
  };

  const handleDelete = id => {
    axios.delete(`${base_url}/api/movies/delete/${id}`)
      .then(response => {
        fetchMovies(); // Fetch updated movie list
      })
      .catch(error => {
        console.error('Error deleting movie:', error);
      });
  };

  return (
    <div className="admin-page">
      <Navbar />
      <Container className="mt-5">
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <Search setSearchQuery={setSearchQuery} /> {/* Pass setSearchQuery function as prop */}
        <Button color="primary" className="mb-3 position-fixed top-0 end-0 me-3" onClick={toggleModal}>
          <FaPlus className="me-1" /> Add New Movie
        </Button>
        <Row>
          {filteredMovies.map(movie => (
            <Col sm="6" md="4" lg="3" key={movie.id}>
              <AdminMovieCard movie={movie} onUpdate={handleUpdate} onDelete={handleDelete} />
            </Col>
          ))}
        </Row>
        <Link to="/admin/add">
          <Button color="primary" className="mb-3 position-fixed top-0 end-0 me-3">
            <FaPlus className="me-1" /> Add New Movie
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default AdminPage;
