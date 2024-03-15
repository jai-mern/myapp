import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import default toast style
import './Login.css'; // Import CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors({ message: 'Email and password are required' });
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      console.log(response.data);
      // Display toast notification upon successful login
      toast.success('Login successful');
      // Redirect to dashboard
      history('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error.response.data);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        {errors.message && <div className="error">{errors.message}</div>}
        <button type="submit" className="btn-login">Login</button>
      </form>
    </div>
  );
};

export default Login;
