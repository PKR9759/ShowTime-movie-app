import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  // State variables to store form field values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Options object for toast notifications
  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (!name.trim()) {
      toast.error('Please enter your name', toastOptions);
      console.log('Please enter');
      return;
    }
    if (!email.trim()) {
      toast.error('Please enter your email', toastOptions);
      return;
    }
    if (!password.trim()) {
      toast.error('Please enter your password', toastOptions);
      return;
    }
    // Password length validation
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters long', toastOptions);
      return;
    }

    // If all validations pass, submit the form
    // You can add further logic here, such as sending the form data to the server
    console.log('Form submitted successfully');
  };

  return (
    <>
      <Container className="mt-4">
        <h1 className="mb-4">Register</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button color="primary">Register</Button>
        </Form>
      </Container>
      <ToastContainer />
    </>

  );
};

export default Register;
