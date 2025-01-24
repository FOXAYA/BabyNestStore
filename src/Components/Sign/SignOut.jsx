import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import { supabase } from './supabaseClient';
import { Button } from 'react-bootstrap'; // Ensure Bootstrap is installed and imported

const SignOut = () => {
  const navigate = useNavigate(); // For navigation after sign-out

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error.message);
        alert('Error signing out. Please try again.');
        return;
      }

      // Redirect the user after successful sign-out
      navigate('/signin'); // Adjust the route based on your app
    } catch (err) {
      console.error('Unexpected error signing out:', err.message);
      alert('Unexpected error. Please try again.');
    }
  };

  return (
    <Button variant="dark" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOut;
