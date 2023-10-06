"use client"
import React from 'react'
import { GoogleOAuthProvider, useGoogleOneTapLogin, GoogleLogin } from '@react-oauth/google';
import Classes from "./login.module.css"
import Header from "../landingpage/Header"
import Router from 'next/router'
import axios from 'axios';
import Image from 'next/image';
import getConfig from 'next/config';

const LogIn = () => {
   
    const { publicRuntimeConfig } = getConfig();


    const clientId = publicRuntimeConfig.GOOGLE_CLIENT_ID;

    const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;

    
    console.log(backendURL);

    const handleFailure = (error) => {
      console.log("Authentication failed",error);
    };

    const handleLogin = async (credentialResponse) => {

        try {
            console.log("handleLogin invoked",credentialResponse);
            const response=await axios.post(backendURL+"/api/google-login", {
                token: credentialResponse.credential,
                audience: clientId,
            });
            console.log("axios data",response);

            // const response1 = await fetch(backendURL+"/api/google-login", {
            //     method: 'POST',
            //     headers: {
            //         Authorization: `Bearer ${credentialResponse.credential}`,
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({  
            //         token: credentialResponse.credential,
            //         audience: clientId,
            //     }),
            // });
        //    console.log("fetch",response1)
            if (response.status === 200) {
                // const data = await response.data.json();
                // console.log(data);

                sessionStorage.setItem('token', credentialResponse.credential);

                const isNewUser = credentialResponse.select_by === "btn";
                sessionStorage.setItem('isNewUser', isNewUser);


                if (isNewUser) {
                  Router.push('/register'); 
              } else {
                  Router.push('/dashboard'); 
              }
            } else {
                console.error('Authentication failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
};


    return (
        <>
 <section class="flex min-h-screen w-screen "
     style={{
       backgroundImage: `url(${require("./static/loginbg.png")})`,
       backgroundSize: 'cover',  // Adjust as needed
       backgroundPosition: 'center',  // Adjust as needed
       position:'relative',
     }}
>
  <div className=' top-0'>
   <Header/>
   </div>
   <div className=" mt-28 mx-auto p-2">
   
      <div class=" flex-1  h-auto max-w-4xl mx-auto bg-white rounded-3xl shadow-xl">
        <div class="flex flex-col md:flex-row">
          <div  className=' md:w-1/2 '>
          
              <Image
                  src={require("./static/clip.png")}
                  width={100}
                  height={100}
                  className=" md:h-full sm:h-fit w-screen "
                  alt="signup"
                />
                <h1 class="absolute text-5xl w-7 text-white font-semibold top-20 mt-40 md:mt-40 px-14 tracking-wide">
                    Login to your Account</h1>  
            
             
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            
            <div class="w-full">
              
              <h1 class="mb-12 text-6xl font-bold text-center text-black tracking-normal">
                Login
              </h1>
              <div className={Classes.authenticateButton}>
                    <GoogleOAuthProvider
                        auto_select
                        clientId={clientId}
                        className={Classes.gButton}
                    >
                        {
                            console.log(clientId)
                        }
                        <GoogleLogin
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy="single_host_origin"
                            onError={error => {
                                console.error('Login Failed:', error);
                            }}
                            useOneTap
                        />
                    </GoogleOAuthProvider>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  
</section> 
        </>
    )
}

export default LogIn