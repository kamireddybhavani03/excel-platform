import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, logout } from '../features/auth/authSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    // Simulate login
    dispatch(setUser({ name: 'Bhavya', email: 'bhavya@example.com' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Profile</h2>
      {isAuthenticated ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
