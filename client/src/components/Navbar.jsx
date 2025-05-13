import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu } from "lucide-react";

const Navbar = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-4 flex justify-between items-center shadow ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800"
      }`}
    >
      {/* Left: Brand + Hamburger */}
      <div className="flex items-center space-x-4">
        <button
          className={`md:hidden p-2 rounded ${theme === "light"?"hover:bg-gray-300" :"hover:bg-gray-700"}`}
          onClick={onMenuClick}
        >
          <Menu size={22} />
        </button>
        <h1 className="text-lg font-bold">Job Tracker</h1>
      </div>

      {/* Right: Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`p-2 rounded ${theme === "light"?"hover:bg-gray-200":"hover:bg-gray-700"} transition`}
      >
        {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
      </button>
    </div>
  );
};

export default Navbar;
