import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useAuth } from './AuthContext'; // Import the useAuth hook

const SignUp = ({ handleClose, switchToSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const { signUp } = useAuth(); // Access the signUp function from context
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.includes('@') || password.length < 6) {
      setError('Invalid email or password (min 6 characters)');
      return;
    }
    if (!firstName || !lastName || !username) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      // Call signUp function passed from AuthContext
      await signUp(email, password, {
        firstName,
        lastName,
        username,
      });
      switchToSignIn();
    } catch (err) {
      setError(`Sign up failed: ${err.message}`);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSignUp}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label>Username *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button variant="dark" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>
        <div className="text-center mt-3">
          <span
            className="text-muted"
            role="button"
            tabIndex={0}
            onClick={switchToSignIn}
            style={{ cursor: 'pointer' }}
          >
            Already have an account? Sign In
          </span>
        </div>
      </Modal.Body>
    </>
  );
};

export default SignUp;
