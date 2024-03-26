import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/add', {
        name,
        email,
        password,
      });
      console.log(response.data); // Handle success response
      toast.success('Registration successful!', { position: 'top-right' });
    } catch (error) {
      console.error(error.response.data); // Handle error response
      toast.error('Registration failed. Please try again.', { position: 'top-right' });
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Register</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormGroup>
        <Button color="primary">Register</Button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default Register;
