// MovieUpdatePage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/Springboot_api';
import { useNavigate } from 'react-router-dom';

const MovieUpdatePage = () => {

  const navigate = useNavigate();

  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    director: '',
    actors: '',
    releaseDate: '',
    type: '',
    imdbRating: '',
    duration: '',
    language: '',
    country: '',
    imageUrl: '' // Add imageUrl field
  });

  useEffect(() => {
    // Fetch movie details from backend when component mounts
    axios.get(`${base_url}/api/movies/getmoviebyid/${id}`)
      .then(response => {
        const { title, description, director, actors, releaseDate, type, imdbRating, duration, language, country, imageUrl } = response.data;
        setFormData({ title, description, director, actors, releaseDate, type, imdbRating, duration, language, country, imageUrl });
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
    axios.put(`${base_url}/api/movies/update/${id}`, formData)
      .then(response => {
        console.log('Movie details updated successfully:', response.data);
        // Redirect to admin page or show success message
        navigate('/admin');
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
          <Label for="description">Description</Label>
          <Input type="textarea" name="description" id="description" value={formData.description} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="director">Director</Label>
          <Input type="text" name="director" id="director" value={formData.director} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="actors">Actors</Label>
          <Input type="text" name="actors" id="actors" value={formData.actors} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="releaseDate">Release Date</Label>
          <Input type="date" name="releaseDate" id="releaseDate" value={formData.releaseDate} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input type="text" name="type" id="type" value={formData.type} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="imdbRating">IMDb Rating</Label>
          <Input type="number" name="imdbRating" id="imdbRating" value={formData.imdbRating} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="duration">Duration</Label>
          <Input type="text" name="duration" id="duration" value={formData.duration} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="language">Language</Label>
          <Input type="text" name="language" id="language" value={formData.language} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="country">Country</Label>
          <Input type="text" name="country" id="country" value={formData.country} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="imageUrl">Image URL</Label>
          <Input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        </FormGroup>
        <Button color="primary">Update Movie</Button>
      </Form>
    </Container>
  );
};

export default MovieUpdatePage;
