
// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { useAuth } from './AuthContext';

// const SignUp = ({ handleClose, switchToSignIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { signUp } = useAuth();

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       await signUp(email, password);
//       handleClose();
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//     }
//   };

//   return (
//     <>
//       <Modal.Header closeButton>
//         <Modal.Title>Sign Up</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSignUp}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Username or email address *</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password *</Form.Label>
//             <Form.Control
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Button variant="dark" type="submit" className="w-100">
//             Sign Up
//           </Button>
//         </Form>
//         <div className="text-center mt-3">
//           <small>
//             <span className="text-muted" onClick={switchToSignIn} style={{ cursor: 'pointer' }}>
//               Already have an account? Sign In
//             </span>
//           </small>
//         </div>
//       </Modal.Body>
//     </>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useAuth } from './AuthContext';

const SignUp = ({ handleClose, switchToSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = useAuth();
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log('SignUp button clicked');
    try {
      if (!email.includes('@')) {
        setError('Invalid email address');
        return;
      }
      await signUp(email, password);
      switchToSignIn();
    } catch (error) {
      setError('Error signing up: ' + error.message);
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSignUp}>
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
            Sign Up
          </Button>
        </Form>
        <div className="text-center mt-3">
          <small>
            <span className="text-muted" onClick={switchToSignIn} style={{ cursor: 'pointer' }}>
              Already have an account? Sign In
            </span>
          </small>
        </div>
      </Modal.Body>
    </>
  );
};

export default SignUp;


