import React, { useState } from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Prev from './pages/Prev';
import Nextpage from './pages/Nextpage';
import { signOut } from 'firebase/auth';
import {auth} from './firebase_config';

export default function App() {

  const [isAuth, setIsAuth] = useState(false);
  
  const signUserOut = () => {
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
    })
  }

  const checkLogin = () => {
    console.log(isAuth);
    if({isAuth}){
     return (
        <div>
          <Router>
          {!isAuth ? <Link to="/login">Login</Link> : <button onClick={ signUserOut }>Log Out</button>}
          <Routes>
            <Route path="/login" element={<Login  setIsAuth={setIsAuth} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/prev" element={<Prev />} />
          <Route path="/next" element={<Nextpage />} />
          </Routes>
          </Router>
        </div>
      );
    }
   
  }
  return (    
    checkLogin() 
  );
}
