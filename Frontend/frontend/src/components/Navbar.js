import React from 'react';
import { Navbar as RSNavbar, Nav, NavItem, NavLink, Input, InputGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <RSNavbar color="dark" dark expand="md" className="mb-4">
      <Link to="/" className="navbar-brand">My Movies App</Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/movies">Movies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/reviews">Reviews</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/users">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/favorites">Favorites</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/admin">Admin</NavLink>
        </NavItem>
      </Nav>
      <InputGroup>
        <Input placeholder="Search movies..." />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">Search</span>
        </div>
      </InputGroup>
    </RSNavbar>
  );
}

export default Navbar;
