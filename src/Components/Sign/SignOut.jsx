import { supabase } from './supabaseClient';

const SignOut = () => {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error signing out:', error.message);
  };

  return (
    <Button variant="dark" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOut;
