import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [userDetailsList, setUserDetailsList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Edit existing user details
      const updatedList = [...userDetailsList];
      updatedList[editIndex] = { name, selectedDate, mobile, address };
      setUserDetailsList(updatedList);
      setEditIndex(null);
    } else {
      // Add new user details
      setUserDetailsList([...userDetailsList, { name, selectedDate, mobile, address }]);
    }

    // Clear the form fields
    setName('');
    setSelectedDate(null);
    setMobile('');
    setAddress('');
  };

  const handleEdit = (index) => {
    // Set the form fields with the selected user details for editing
    const userDetails = userDetailsList[index];
    setName(userDetails.name);
    setSelectedDate(userDetails.selectedDate);
    setMobile(userDetails.mobile);
    setAddress(userDetails.address);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    // Delete user details
    const updatedList = userDetailsList.filter((_, i) => i !== index);
    setUserDetailsList(updatedList);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>customer details</h2>
        </div>
        <div className="card-body">
          <p>Welcome </p>

          <div className="charts-container">
            {/* Add your charts or visualizations here */}
            <p>customerName</p>
            <p>customer address</p>
          </div>

          <div className="notifications mt-4">
            <p>Latest notifications or updates</p>
          </div>

          <div className="user-details-form mt-4">
            <h3>Enter User Details</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Date:</label>
                <DatePicker
                  className="form-control"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  isClearable
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile:</label>
                <input
                  type="text"
                  className="form-control"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Address:</label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {editIndex !== null ? 'Edit' : 'Submit'}
              </button>
            </form>
          </div>

          {/* Display entered user details */}
          {userDetailsList.length > 0 && (
            <div className="mt-4" style={{ backgroundColor: 'orange', padding: '10px', borderRadius: '8px' }}>
              <h3>User Details List</h3>
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetailsList.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.selectedDate?.toLocaleDateString()}</td>
                      <td>{user.mobile}</td>
                      <td>{user.address}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info btn-sm"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm ml-2"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;