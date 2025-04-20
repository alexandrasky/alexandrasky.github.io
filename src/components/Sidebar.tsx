
const Sidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <nav>
        <ul className="space-y-4">
          <li>
          <a
            href="#intro"
            className="text-xl text-gray-200 hover:text-teal-500 transition-all duration-300 relative py-1"
          >
              Welcome
              <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-500 scale-x-0 transform transition-all duration-300 origin-left hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="#one"
              className="text-xl text-gray-200 hover:text-teal-500 transition-all duration-300 relative py-1"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-500 scale-x-0 transform transition-all duration-300 origin-left hover:scale-x-100"></span>
            </a>
          </li>
          <li>
            <a
              href="#two"
              className="text-xl text-gray-200 hover:text-teal-500 transition-all duration-300 relative py-1"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-1 bg-teal-500 scale-x-0 transform transition-all duration-300 origin-left hover:scale-x-100"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;