// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as RSNavbar, Nav, NavItem, NavLink as RSNavLink, Button } from 'reactstrap';
import { FaCog, FaHome } from 'react-icons/fa';
import LoginModal from './LoginModal';


const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <RSNavbar color="dark" dark expand="md" className="navbar">
        <NavLink to="/" className="navbar-brand">
          
          <span className="brand-name">ShowTime</span> {/* Display brand name */}
        </NavLink>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              <FaHome className="nav-icon" /> Home
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button color="primary" className="admin-btn" onClick={toggleModal}>
              <FaCog className="admin-icon" /> Admin
            </Button>
          </NavItem>
        </Nav>
      </RSNavbar>
      <LoginModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default Navbar;
