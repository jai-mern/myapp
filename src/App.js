import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Billing from './Dashboard/Billing';
import Dashboard from './Dashboard/Dashboard'; // Corrected import statement
import Sidebar from './Dashboard/Sidebar'; // Corrected import statement
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer /> {/* Add ToastContainer for displaying toast notifications */}
        <Switch>
          <Route path="/" component={Register} /> {/* Corrected path */}
          <Route path="/Login" component={Login} />
          <Route path="/Billing" component={Billing} /> {/* Corrected path */}
          <Route path="/Dashboard" component={Dashboard} /> {/* Corrected path */}
          <Route path="/Sidebar" component={Sidebar} /> {/* Corrected path */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
