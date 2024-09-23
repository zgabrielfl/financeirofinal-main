import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { TransactionProvider } from './context/TransactionContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import Login from './pages/Login';
import './App.css';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <TransactionProvider>
      <Router>
        <header>
          <Link to="/">
            <button>Início</button>
          </Link>
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>

          {isAuthenticated ? (
            <Link to="/login">
              <button>LogOut</button>
            </Link>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </Router>
    </TransactionProvider>
  );
};

export default App;
