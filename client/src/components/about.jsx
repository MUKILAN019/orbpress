import React from 'react';
import { ImageHandler } from '../utils/imagehandler';

function AboutSection() {
  return (
    <div className="bg-blue-500 py-4 px-6 flex flex-col items-center justify-center w-full">
      {/* About Heading */}
      <h2 className="text-5xl font-bold text-white text-center mb-6">About OrbPress</h2>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full gap-10">
        {/* Image Section */}
        <img 
          src={ImageHandler.AboutImage} 
          alt="About OrbPress" 
          className="w-full max-w-md lg:max-w-sm rounded-3xl shadow-lg border-4 border-amber-200"
        />

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-5">
          <h3 className="text-3xl font-semibold text-amber-200">Empowering Creativity</h3>
          <p className="text-lg text-white leading-relaxed">
            OrbPress is your go-to platform for discovering inspiring stories, insightful blogs, 
            and expert perspectives across various topics.
          </p>
          <p className="text-lg text-yellow-300 leading-relaxed">
            Whether you're a writer, a reader, or an explorer of ideas, 
            OrbPress provides a seamless experience to engage with meaningful content.
          </p>

          {/* Call to Action */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold shadow-md transition hover:bg-pink-100">
              Join Us Today 🚀
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;
