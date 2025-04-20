import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="intro" className="flex items-center justify-center min-h-screen bg-cover bg-center" >  
      <div className="text-center text-white px-12 py-12 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold">Alexandra Skyvová</h1>
        <p className="mt-4 text-xl md:text-2xl px-20">
          Recent computer science graduate with experience in data analytics and a growing interest in web-app development.    
        </p>
        <a href="#one" className="mt-8 inline-block text-lg px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-400 transition-all">Check my work</a>
      </div>
    </section>
  );
};

export default Intro;

