import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register'; // Corrected import statement
import Login from './components/Login'; // Corrected import statement
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register } />
          <Route path="/login" component={Login } />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
