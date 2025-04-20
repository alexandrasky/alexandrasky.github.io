import React from 'react';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Home from './pages/Home';
import Contact from './components/Contact';
//import './main.css';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen text-white bg-blue-500">
      
      {/* Sidebar on the left */}
      <aside className="w-64 bg-gray-800 shadow-xl p-6 ">
        <div className="h-full fixed">
          <Sidebar />
        </div>
      </aside>

      {/* Main content on the right */}
      <main className="flex-1 p-8 overflow-y-auto bg-gray-700">
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
