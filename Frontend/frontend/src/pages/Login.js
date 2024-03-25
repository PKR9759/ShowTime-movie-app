import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = () => {
  return (
    <Container className="mt-4">
      <h1>Login</h1>
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Enter your password" />
        </FormGroup>
        <Button color="primary">Login</Button>
      </Form>
    </Container>
  );
}

export default Login;
