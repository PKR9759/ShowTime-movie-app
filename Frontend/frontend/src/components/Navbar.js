import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as RSNavbar, Nav, NavItem, NavLink as RSNavLink } from 'reactstrap';
import { FaCog, FaHome, FaStar,FaSignOutAlt } from 'react-icons/fa';

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
          <NavLink to="/favorites" className="nav-link" activeClassName="active">
            <FaStar className="nav-icon" /> Favorites
          </NavLink>
        </NavItem>
      </Nav>


      //right side
      <Nav className="ml-auto" navbar>
        <NavItem>
        <NavLink to="/admin" className="nav-link" activeClassName="active">
            <FaCog className="nav-icon" /> Admin
          </NavLink>
        </NavItem>
        <NavItem>
        <NavLink to="/logout" className="nav-link" activeClassName="active">
          <FaSignOutAlt className="nav-icon" /> Logout
        </NavLink>
      </NavItem>
      </Nav>
    </RSNavbar>
  );
}

export default Navbar;
