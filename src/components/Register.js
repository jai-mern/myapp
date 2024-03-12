import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const history = useHistory(); // Initialize useHistory hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your validation logic here
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setErrors({ message: 'All fields are required' });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setErrors({ message: 'Passwords do not match' });
      return;
    }
    // If all validations pass, make a POST request to register endpoint
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      console.log(response.data); // Assuming server responds with success message
      // Redirect to login page after successful registration
      history.push('/login');
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        {errors.message && <div className="error">{errors.message}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
