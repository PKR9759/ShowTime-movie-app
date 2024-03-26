// AdminMovieCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons for update and delete buttons

const AdminMovieCard = ({ movie, onDelete }) => {
  const handleDelete = () => {
    onDelete(movie.id);
  };

  return (
    <Card>
      <CardImg top width="100%" src={movie.imageUrl} alt={movie.title} />
      <CardBody>
        <CardTitle tag="h5">{movie.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Rating: {movie.rating}</CardSubtitle>
        <Link to={`/admin/movies/${movie.id}`} className="btn btn-info"><FaEdit /> Edit</Link> {/* Redirect to movie update page */}
        {' '}
        <Button color="danger" onClick={handleDelete}><FaTrash /> Delete</Button>
      </CardBody>
    </Card>
  );
};

export default AdminMovieCard;
