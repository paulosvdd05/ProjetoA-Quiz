import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

import transicao from '../components/Transicao';

import Loading from '../components/Loading';
import App from '../screens/App';
import Login from './Login';
import { AnimatePresence } from 'framer-motion';
import Fim from './Fim';


function AuthOrApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {

    //api 

    setTimeout(() => {
      const loggedIn = true
      setIsLoggedIn(loggedIn);
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    
     <AnimatePresence mode='await'>
         <Routes>
        <Route path="/" element={isLoggedIn ? <App /> : <Login />} />
        <Route path="/fim" element={<Fim />} />
      </Routes>
     </AnimatePresence>
    
  );
}

export default AuthOrApp;