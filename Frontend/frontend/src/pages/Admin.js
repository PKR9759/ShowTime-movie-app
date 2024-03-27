import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'; 
import { FaPlus } from 'react-icons/fa'; 
import AdminMovieCard from '../components/AdminMovieCard';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import axios from 'axios';
import base_url from '../api/Springboot_api';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const AdminPage = () => {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    rating: ''
  });
  const [searchQuery, setSearchQuery] = useState('');

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
    setSearchQuery(e.target.value);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const handleSubmit = () => {
  //   axios.post(`${base_url}/api/movies/addmovie`, formData)
  //     .then(response => {
        
  //       fetchMovies();
  //       toggleModal();
  //     })
  //     .catch(error => {
  //       console.error('Error adding movie:', error);
  //     });
  // };

  const handleUpdate = (id, updatedData) => {
    axios.put(`${base_url}/api/movies/update/${id}`, updatedData)
      .then(response => {
        toast.success(`Movie updated successfully!`, { // Toast message for successful movie update
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchMovies();
      })
      .catch(error => {
        console.error('Error updating movie:', error);
      });
  };

  const handleDelete = id => {
    axios.delete(`${base_url}/api/movies/delete/${id}`)
      .then(response => {
        toast.success(`Movie deleted successfully!`, { // Toast message for successful movie deletion
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchMovies();
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
        <Search setSearchQuery={setSearchQuery} />
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
