import React from 'react';
import "animate.css"

const Intro: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 bg-cover bg-center overflow-hidden"
    >
      {/* Content Section */}
      <div className="relative m-10 text-center text-white px-8 py-16 md:px-16 md:py-20 bg-black bg-opacity-60 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Alexandra Skyvová
        </h1>
        <p className="mt-4 text-lg md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Recent computer science graduate with experience in data analytics and a growing interest in web-app development.
        </p>
        <a
          href="#one"
          className="mt-8 inline-block text-lg px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-400 transition-transform transform hover:scale-105 ease-in-out duration-300 animate__animated animate__fadeIn animate__delay-3s"
        >
          Check my work
        </a>
      </div>
    </section>
  );
};

export default Intro;
