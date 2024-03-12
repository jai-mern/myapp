import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const history = useHistory(); // Initialize useHistory hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your validation logic here
    if (!formData.email || !formData.password) {
      setErrors({ message: 'Email and password are required' });
      return;
    }
    // If all validations pass, make a POST request to login endpoint
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log(response.data); // Assuming server responds with success message
      // Redirect to dashboard after successful login
      history.push('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {errors.message && <div className="error">{errors.message}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
