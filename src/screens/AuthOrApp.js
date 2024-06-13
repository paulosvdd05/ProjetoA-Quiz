import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from '../components/Loading';
import App from '../screens/App';
import Login from './Login';

function AuthOrApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    //api 

    setTimeout(() => {
      const loggedIn = true
      setIsLoggedIn(loggedIn);
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <App /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default AuthOrApp;