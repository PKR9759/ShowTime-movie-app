import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon
import AdminMovieCard from '../components/AdminMovieCard';
import Navbar from '../components/Navbar';
const AdminPage = () => {
  // Dummy data for movies
  const [movies, setMovies] = useState([
    { id: 1, title: 'The Shawshank Redemption', rating: 9.3, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, title: 'The Godfather', rating: 9.2, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, title: 'The Dark Knight', rating: 9.0, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Pulp Fiction', rating: 8.9, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Fight Club', rating: 8.8, imageUrl: 'https://via.placeholder.com/150' }
  ]);

  // State for modal (to add new movie)
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [formData, setFormData] = useState({
    title: '',
    rating: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Add new movie based on form data
    // Here you can perform backend API calls to update the database
    // For simplicity, we'll just update the state with the new movie
    const newMovie = { ...formData, id: movies.length + 1, imageUrl: 'placeholder_url' }; // Add imageUrl dynamically or pass it from the form
    setMovies([...movies, newMovie]);
    toggleModal();
  };

  const handleUpdate = (id, updatedData) => {
    // Update movie details based on ID
    // Here you can perform backend API calls to update the database
    // For simplicity, we'll just update the state with the updated movie details
    const updatedMovies = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, ...updatedData };
      }
      return movie;
    });
    setMovies(updatedMovies);
  };

  const handleDelete = id => {
    // Delete movie based on ID
    // Here you can perform backend API calls to delete the movie from the database
    // For simplicity, we'll just update the state by filtering out the movie to be deleted
    const updatedMovies = movies.filter(movie => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <div className="admin-page">
      <Navbar />
    <Container className="mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>

      <Button color="primary" className="mb-3 position-fixed top-0 end-0 me-3" style={{ zIndex: 999,marginTop:'100px' }} onClick={toggleModal}>
        <FaPlus className="me-1" /> Add New Movie
      </Button>

      {/* Display movie cards */}
      <Row>
        {movies.map(movie => (
          <Col sm="6" md="4" lg="3" key={movie.id}>
            <AdminMovieCard movie={movie} onUpdate={handleUpdate} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>

      {/* Modal for adding new movie */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add New Movie</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input type="number" name="rating" id="rating" value={formData.rating} onChange={handleChange} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>Add Movie</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Container>
    </div>
  );
}

export default AdminPage;
