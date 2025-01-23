import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignIn from './Sign';
import SignUp from './SignUp';
import ForgotPassword from './Forget';

const AuthModal = ({ show, handleClose }) => {
  const [authMode, setAuthMode] = useState('signin'); // initial mode is 'signin'

  const switchToSignUp = () => setAuthMode('signup');
  const switchToSignIn = () => setAuthMode('signin');
  const switchToForgotPassword = () => setAuthMode('forgotpassword');

  const renderAuthComponent = () => {
    switch (authMode) {
      case 'signin':
        return <SignIn switchToSignUp={switchToSignUp} switchToForgotPassword={switchToForgotPassword} handleClose={handleClose} />;
      case 'signup':
        return <SignUp switchToSignIn={switchToSignIn} handleClose={handleClose} />;
      case 'forgotpassword':
        return <ForgotPassword switchToSignIn={switchToSignIn} handleClose={handleClose} />;
      default:
        return <SignIn switchToSignUp={switchToSignUp} switchToForgotPassword={switchToForgotPassword} handleClose={handleClose} />;
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      {renderAuthComponent()}
    </Modal>
  );
};

export default AuthModal;




