import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { logout } = useAuth();
  const { theme } = useTheme();

  const linkClasses = (path) =>
    `block p-2 rounded ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "hover:bg-gray-300 dark:hover:bg-gray-700"
    }`;

  return (
    <div
      className={`fixed md:static top-0 left-0 h-full w-60 z-50 p-4 space-y-4 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 ${
        theme === "dark" ? "bg-gray-9 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Close Icon for mobile */}
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h2 className="text-xl font-bold">Job Tracker</h2>
        <button onClick={onClose} className="p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-300">
          <X size={24} />
        </button>
      </div>

      {/* Nav Links */}
      <Link to="/" className="text-xl font-bold hidden md:block mb-8">
        Job Tracker
      </Link>
      <Link to="/" className={linkClasses("/")}>
        Dashboard
      </Link>
      <Link to="/add-job" className={linkClasses("/add-job")}>
        Add Job
      </Link>
      <button
        onClick={() => {
          logout();
          onClose();
        }}
        className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-left w-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
