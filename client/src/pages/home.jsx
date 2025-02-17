import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import AboutSection from '../components/about';
import Dialog from '../utils/dialogCenter'

function Home() {
  return (
    <>
      <Navbar />
      <AboutSection />
      <div className="bg-blue-500 min-h-screen w-full pt-20"> 
        <h1 className="text-3xl font-bold text-amber-50 m-5">You're Posts 🚀 :</h1>

      </div>
      
      <Footer />
    </>
  );
}

export default Home;
