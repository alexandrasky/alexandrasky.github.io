import React from 'react';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Home from './pages/Home';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen text-white bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">
      
      {/* Sidebar on the left bg-gray-800*/}
      <aside className="w-64  bg-black bg-opacity-70 shadow-xl p-6">
        <div className="h-full fixed">
          <Sidebar />
        </div>
      </aside>

      {/* Main content on the right */}
      <main className="flex-1  overflow-y-auto">
        <Intro />
        <Home />
        {/* Contact information */}
        <div className="w-full">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;
