// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { useAuth } from './AuthContext';

// const ForgotPassword = ({ show, handleClose }) => {
//   const [email, setEmail] = useState('');
//   const { resetPassword } = useAuth();

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       await resetPassword(email);
//       handleClose();
//       alert('Password reset email sent. Please check your inbox.');
//     } catch (error) {
//       console.error('Error resetting password:', error.message);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Forgot Password</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleResetPassword}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address *</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </Form.Group>
//           <Button variant="dark" type="submit" className="w-100">
//             Reset Password
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ForgotPassword;
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useAuth } from './AuthContext';

const ForgotPassword = ({ handleClose, switchToSignIn }) => {
  const [email, setEmail] = useState('');
  const { resetPassword } = useAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      handleClose();
      alert('Password reset email sent. Please check your inbox.');
    } catch (error) {
      console.error('Error resetting password:', error.message);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleResetPassword}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address *</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100">
            Reset Password
          </Button>
        </Form>
        <div className="text-center mt-3">
          <small>
            <span className="text-muted" onClick={switchToSignIn} style={{ cursor: 'pointer' }}>
              Back to Sign In
            </span>
          </small>
        </div>
      </Modal.Body>
    </>
  );
};

export default ForgotPassword;



