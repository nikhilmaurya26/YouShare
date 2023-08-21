import React, { useState } from 'react';
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import logo from '../assets/logo.png'
import axios from 'axios'; // Import axios library
import useCreateOrGetUser from '../utils'; 



const Login = () => {
  const createOrGetUser = useCreateOrGetUser();
  // const responseGoogle = (response) => {
  //   console.log(response)
  //   localStorage.setItem('user',JSON.stringify(response.credential));
  //   const {clientId} = response.credential;
  //   console.log(clientId);
  // }
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
          src={shareVideo}
          typeof='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 bottom-0 left-0 bg-blackOverlay '>
          <div className='p-5'>
            <img src={logo} alt="" />
            <div className='shadow-2xl'>
              <GoogleLogin
                onSuccess={(response)=>createOrGetUser(response)}
                // onFailure={responseGoogle}
                cookiePolicy='single_host_origin'
                cors={'*'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
