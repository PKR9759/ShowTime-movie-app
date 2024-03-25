// App.js
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from '../../frontend/src/components/Navbar';
import Home from '../../frontend/src/pages/Home';
import Favorites from './pages/Favourites';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
 
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
