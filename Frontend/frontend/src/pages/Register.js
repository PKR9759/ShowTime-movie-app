import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Register = () => {
  return (
    <Container className="mt-4">
      <h1>Register</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password" />
        </FormGroup>
        <Button color="primary">Register</Button>
      </Form>
    </Container>
  );
}

export default Register;
