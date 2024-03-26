// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../../frontend/src/components/Navbar';
import Home from '../../frontend/src/pages/Home';
import Admin from './pages/Admin';
import AddMoviePage from './pages/AddMoviePage'; 
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieUpdatePage from './pages/MovieUpdatePage'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add" element={<AddMoviePage />} /> 
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/admin/movies/:id" element={<MovieUpdatePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
