// AdminMovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AdminMovieCard = ({ movie, onDelete }) => {
  
  const handleDelete = () => {
    onDelete(movie.id);
  };

  return (
    <Card style={styles.card}>
      <CardImg top src={movie.imageUrl} alt={movie.title} style={styles.image} />
      <CardBody style={styles.cardBody}>
        <CardTitle tag="h5" style={styles.cardTitle}>{movie.title}</CardTitle>
        <Link to={`/admin/movies/${movie.id}`} style={styles.editButton}><FaEdit /> Edit</Link>
        <Button color="danger" onClick={handleDelete} style={styles.deleteButton}><FaTrash /> Delete</Button>
      </CardBody>
    </Card>
  );
};

const styles = {
  card: {
    border: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '20px',
  },
  cardTitle: {
    marginBottom: '10px',
  },
  editButton: {
    marginRight: '10px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff',
    padding: '5px 10px',
    borderRadius: '5px',
  },
  deleteButton: {
    padding: '5px 10px',
    borderRadius: '5px',
  },
};

export default AdminMovieCard;
