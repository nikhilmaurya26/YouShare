import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { gapi } from "gapi-script";
import { useEffect } from 'react';

function App() {

  return (
    <GoogleOAuthProvider clientId='748428699897-1na02su3dt4dgv40f35aio88ea0co3b7.apps.googleusercontent.com'>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
