// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as RSNavbar, Nav, NavItem, NavLink as RSNavLink } from 'reactstrap';
import { FaCog, FaHome } from 'react-icons/fa';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <RSNavbar color="dark" dark expand="md" className="navbar">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink to="/" className="nav-link" activeClassName="active" exact>
              <FaHome className="nav-icon" /> Home
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <RSNavLink href="#" className="nav-link" onClick={toggleModal}>
              <FaCog className="nav-icon" /> Admin
            </RSNavLink>
          </NavItem>
        </Nav>
      </RSNavbar>
      <LoginModal isOpen={isModalOpen} toggle={toggleModal} />
    </>
  );
};

export default Navbar;
