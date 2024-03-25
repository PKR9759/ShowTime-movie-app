// App.js
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from '../../frontend/src/components/Navbar';
import Home from '../../frontend/src/pages/Home';
// import Movies from './pages/Movies';
// import Reviews from './pages/Reviews';
// import Users from './pages/Users';
// import Favorites from './pages/Favorites';
// import Admin from './pages/Admin';
import Login from '../../frontend/src/pages/Login';
import Register from '../../frontend/src/pages/Register';
import './App.css';

function App() {
 
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/movies" element={<Movies />} /> */}
          {/* <Route path="/reviews" element={<Reviews />} /> */}
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          {/* <Route path="/admin" element={<Admin />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
