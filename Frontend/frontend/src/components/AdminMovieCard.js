// MovieCard for Admin Page
import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons for update and delete buttons

const AdminMovieCard = ({ movie, onUpdate, onDelete }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const [formData, setFormData] = useState({
    title: movie.title,
    rating: movie.rating
  });
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = () => {
    onUpdate(movie.id, formData);
    toggleModal();
  };

  const handleDelete = () => {
    onDelete(movie.id);
  };

  return (
    <Card>
      <CardImg top width="100%" src={movie.imageUrl} alt={movie.title} />
      <CardBody>
        <CardTitle tag="h5">{movie.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Rating: {movie.rating}</CardSubtitle>
        <Button color="info" onClick={toggleModal}><FaEdit /> Edit</Button>
        {' '}
        <Button color="danger" onClick={handleDelete}><FaTrash /> Delete</Button>

        {/* Modal for updating movie details */}
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Edit Movie</ModalHeader>
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
            <Button color="primary" onClick={handleSubmit}>Save</Button>{' '}
            <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default AdminMovieCard;
