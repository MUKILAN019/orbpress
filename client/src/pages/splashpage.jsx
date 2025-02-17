import React from 'react';
import { ImageHandler } from '../utils/imagehandler';
import Navbar from '../components/navbar';
import AboutSection from '../components/about';
import Footer from '../components/footer';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashPage() {
  const nav = useNavigate();
   useEffect(()=>{
      const token = localStorage.getItem("token");
      if (token){
       nav('/home')
      }
   },[])
  return (
   <>
   <Navbar/>
    <div className='bg-blue-500 min-h-screen flex flex-col justify-center items-center w-full'>

      {/* Heading and Intro Text */}
      <div className='text-white text-center space-y-4 px-4'>
        <h1 className='font-bold text-6xl sm:text-4xl lg:text-6xl'>Outdoors Limits</h1>
        <p className='text-3xl sm:text-xl lg:text-3xl'>Everything you need to build and grow all in</p>
        <p className='text-4xl font-extrabold sm:text-2xl lg:text-4xl'>OrbPress</p>
      </div>

      {/* Content Section */}
      <div className='flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mt-10 px-6'>

        {/* Image Section */}
        <img 
          src={ImageHandler.Cat} 
          alt="Splash image" 
          className='lg:1/2 w-full max-w-md rounded-3xl border-2 border-amber-50'
        />

        {/* Text Section */}
        <div className='lg:w-1/2 lg:px-10 text-center lg:text-left space-y-4 mt-6 lg:mt-0'>
          <h1 className='text-4xl font-bold text-amber-50'>Welcome to OrbPress!</h1>
          <p className='font-semibold text-xl text-yellow-300'>
            Discover engaging stories, insightful articles, and expert opinions on topics that matter to you.
            Join our community and explore a world of ideas, inspiration, and creativity.
          </p>
          <h1 className='font-bold text-cyan-200'>🚀 Read. Learn. Create.</h1>
          <h1 className='font-bold text-cyan-200'>📖 Start exploring now!</h1>
        </div>

      </div>
    </div>
    <AboutSection/>
    
    <Footer/>
    </>
  );
}

export default SplashPage;
