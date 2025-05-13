import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ name: "mahesh", token: "1234" });
    navigate("/");
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="p-8 rounded shadow-md w-full max-w-sm bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
        >
          Login Now
        </button>
      </div>
    </div>
  );
};

export default Login;
