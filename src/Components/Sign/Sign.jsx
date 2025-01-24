import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useAuth } from "./AuthContext";


const SignIn = ({ handleClose, switchToSignUp, switchToForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password); // Call signIn function from context
      handleClose(); // Close modal on success
    } catch (err) {
      setError(`SignIn failed: ${err.message}`); // Display error message
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSignIn}>
          {/* Email field */}
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

          {/* Password field */}
          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password *</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          {/* Error message */}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {/* Sign In button */}
          
          <Button variant="dark" type="submit" className="w-100 mt-3">
            Sign In
          </Button>
        </Form>

        {/* Forgot password link */}
        <div className="text-center mt-3">
          <span
            className="text-muted"
            role="button"
            tabIndex={0}
            onClick={switchToForgotPassword}
            style={{ cursor: "pointer" }}
          >
            Lost your password?
          </span>
        </div>

        <hr />

        {/* Sign Up button */}
        <Button
          variant="outline-dark"
          className="w-100"
          onClick={switchToSignUp}
        >
          Create an account
        </Button>
      </Modal.Body>
    </>
  );
};

export default SignIn;
