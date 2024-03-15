import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import BillingForm from './Dashboard/BillingForm';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './Dashboard/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Billing from './Dashboard/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/BillingForm" element={<BillingForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route patch="/Billing"element={<Billing/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;