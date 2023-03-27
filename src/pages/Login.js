import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase_config';
import {useNavigate} from "react-router-dom";

function Login({setIsAuth}) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then( (result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/home");
    });
  };  

  return (
    <div>
        <p>Sign in with Google</p>
        <button className='login-btn-google' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login;