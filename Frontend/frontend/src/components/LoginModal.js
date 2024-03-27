// LoginModal.js
import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import base_url from '../api/Springboot_api';
const LoginModal = ({ isOpen, toggle }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    
    if(localStorage.getItem('isLoggedIn')===true){//alreddy login
      navigate('/admin');
    }
    // Verify the entered username and password
    else if (username === "kuldip" && password === "9759") {
      localStorage.setItem('isLoggedIn', true); // Set flag in local storage
      // toggle(); // Close the modal
      navigate('/admin');

    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Login</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleLogin}>Login</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginModal;
