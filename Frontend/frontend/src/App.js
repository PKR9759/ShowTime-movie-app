import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../../frontend/src/components/Navbar';
import Home from '../../frontend/src/pages/Home';
import Admin from './pages/Admin';
import AddMoviePage from './pages/AddMoviePage'; 
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieUpdatePage from './pages/MovieUpdatePage'
import './App.css';

function App() {
  // Function to check if the user is logged in
  const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Route for Admin page, only accessible if logged in */}
        <Route path="/admin" element={isLoggedIn() ? <Admin /> : <Navigate to="/" />} />
        {/* Route for Add Movie page, only accessible if logged in */}
        <Route path="/admin/add" element={isLoggedIn() ? <AddMoviePage /> : <Navigate to="/" />} />
        {/* Route for Update Movie page, only accessible if logged in */}
        <Route path="/admin/movies/:id" element={isLoggedIn() ? <MovieUpdatePage /> : <Navigate to="/" />} />
        {/* Route for Movie Details page */}
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
