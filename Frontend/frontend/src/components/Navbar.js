import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as RSNavbar, Nav, NavItem, NavLink as RSNavLink } from 'reactstrap';
import { FaHome, FaFilm, FaStar, FaUser, FaCog, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <RSNavbar color="dark" dark expand="md" className="navbar">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            <FaHome className="nav-icon" /> Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/movies" className="nav-link" activeClassName="active">
            <FaFilm className="nav-icon" /> Movies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/reviews" className="nav-link" activeClassName="active">
            <FaStar className="nav-icon" /> Reviews
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/favorites" className="nav-link" activeClassName="active">
            <FaStar className="nav-icon" /> Favorites
          </NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <RSNavLink to="/admin" className="nav-link" activeClassName="active">
            <FaCog className="nav-icon" /> Admin
          </RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink to="/login" className="nav-link" activeClassName="active">
            <FaSignInAlt className="nav-icon" /> Login
          </RSNavLink>
        </NavItem>
        <NavItem>
          <RSNavLink to="/register" className="nav-link" activeClassName="active">
            <FaUserPlus className="nav-icon" /> Register
          </RSNavLink>
        </NavItem>
      </Nav>
    </RSNavbar>
  );
}

export default Navbar;
