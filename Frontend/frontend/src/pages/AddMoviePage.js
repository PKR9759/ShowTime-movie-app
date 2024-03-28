import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import base_url from '../api/Springboot_api';
import { useNavigate } from 'react-router-dom';


const AddMoviePage = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    director: '',
    actors: '',
    genre: '',
    releaseDate: '',
    rating: '',
    imageUrl: '' // Include imageUrl field in the state
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Send a POST request to your backend API to add the movie
      await axios.post(`${base_url}/api/movies/addmovie`, formData);
      navigate('/admin');
     
    } catch (error) {
      console.error('Error adding movie:', error);
      
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Add New Movie</h1>
      <Form>
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
          <Label for="genre">Genre</Label>
          <Input type="text" name="genre" id="genre" value={formData.genre} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="releaseDate">Release Date</Label>
          <Input type="date" name="releaseDate" id="releaseDate" value={formData.releaseDate} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input type="number" name="rating" id="rating" value={formData.rating} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="imageUrl">Image URL</Label>
          <Input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        </FormGroup>

        <Button color="primary" onClick={handleSubmit}>Add Movie</Button>
      </Form>
    </Container>
  );
};

export default AddMoviePage;
