// MovieUpdatePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

const MovieUpdatePage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    rating: ''
    // Add other fields here as needed
  });

  useEffect(() => {
    // Fetch movie details from backend when component mounts
    axios.get(`/api/movies/${id}`)
      .then(response => {
        const { title, rating } = response.data;
        setFormData({ title, rating });
        // Set other form data fields here based on the response
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Update movie details via backend API call
    axios.put(`/api/movies/${id}`, formData)
      .then(response => {
        console.log('Movie details updated successfully:', response.data);
        // Redirect to admin page or show success message
      })
      .catch(error => {
        console.error('Error updating movie details:', error);
        // Show error message to the user
      });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Update Movie</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input type="number" name="rating" id="rating" value={formData.rating} onChange={handleChange} />
        </FormGroup>
        {/* Add other form fields here */}
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
};

export default MovieUpdatePage;
