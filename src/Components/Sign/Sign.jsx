import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { supabase } from './supabaseClient';

const SignIn = ({ handleClose, switchToSignUp, switchToForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const [error, setError] = useState('');
  const [resentEmail, setResentEmail] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log('SignIn button clicked');  // للتحقق من استدعاء الدالة
    try {
      await signIn(email, password);
      handleClose();
    } catch (error) {
      if (error.message === 'Email not confirmed') {
        setError('Email not confirmed. Please check your email to confirm your account.');
      } else {
        setError('Error logging in: ' + error.message);
      }
      console.error('Error logging in:', error.message);
    }
  };

  const handleResendConfirmation = async () => {
    try {
      await supabase.auth.api.resendConfirmationEmail(email);
      setResentEmail(true);
    } catch (error) {
      console.error('Error resending confirmation email:', error.message);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username or email address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
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
            Sign In
          </Button>
          {error === 'Email not confirmed. Please check your email to confirm your account.' && (
            <Button variant="outline-dark" className="w-100 mt-2" onClick={handleResendConfirmation}>
              Resend Confirmation Email
            </Button>
          )}
          {resentEmail && <p style={{ color: 'green' }}>Confirmation email resent. Please check your inbox.</p>}
        </Form>
        <div className="text-center mt-3">
          <small>
            <span className="text-muted" onClick={switchToForgotPassword} style={{ cursor: 'pointer' }}>
              Lost your password?
            </span>
          </small>
        </div>
        <hr />
        <Button variant="outline-dark" className="w-100" onClick={switchToSignUp}>
          Create an account
        </Button>
      </Modal.Body>
    </>
  );
};

export default SignIn;
