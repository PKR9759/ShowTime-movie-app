import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import { FaPlus } from 'react-icons/fa'; // Import the plus icon
import AdminMovieCard from '../components/AdminMovieCard';
import Navbar from '../components/Navbar';
import axios from 'axios';

const AdminPage = () => {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    rating: ''
  });

  // Fetch movie data from backend upon component mount
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    axios.get('/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie data:', error);
      });
  };

  const toggleModal = () => setModal(!modal);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post('/api/movies', formData)
      .then(response => {
        fetchMovies(); // Fetch updated movie list
        toggleModal();
      })
      .catch(error => {
        console.error('Error adding movie:', error);
      });
  };

  const handleUpdate = (id, updatedData) => {
    axios.put(`/api/movies/${id}`, updatedData)
      .then(response => {
        fetchMovies(); // Fetch updated movie list
      })
      .catch(error => {
        console.error('Error updating movie:', error);
      });
  };

  const handleDelete = id => {
    axios.delete(`/api/movies/${id}`)
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
        <Button color="primary" className="mb-3 position-fixed top-0 end-0 me-3" style={{ zIndex: 999, marginTop: '100px' }} onClick={toggleModal}>
          <FaPlus className="me-1" /> Add New Movie
        </Button>
        <Row>
          {movies.map(movie => (
            <Col sm="6" md="4" lg="3" key={movie.id}>
              <AdminMovieCard movie={movie} onUpdate={handleUpdate} onDelete={handleDelete} />
            </Col>
          ))}
        </Row>
        <Link to="/admin/add">
          <Button color="primary" className="mb-3 position-fixed top-0 end-0 me-3" style={{ zIndex: 999, marginTop: '100px' }}>
            <FaPlus className="me-1" /> Add New Movie
          </Button>
        </Link>

      </Container>
    </div>
  );
}

export default AdminPage;
