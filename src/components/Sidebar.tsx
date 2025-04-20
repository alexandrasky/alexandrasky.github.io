import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#intro" className="text-xl hover:text-gray-400 transition-colors">Welcome</a>
          </li>
          <li>
            <a href="#one" className="text-xl hover:text-gray-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#two" className="text-xl hover:text-gray-400 transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Sidebar;
