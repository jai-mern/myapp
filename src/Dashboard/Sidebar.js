import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside>
      <ul>
        
        <li><Link to="/Register">Sign Up</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <li><Link to="/Billing">Billing</Link></li>

      </ul>
    </aside>
  );
};

export default Sidebar;