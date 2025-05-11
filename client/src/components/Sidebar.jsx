import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-900 text-white min-h-screen p-4 space-y-4">
      <h2 className="text-xl font-bold mb-8">Menu</h2>
      <Link to="/" className="block hover:bg-gray-700 p-2 rounded">Dashboard</Link>
      <Link to="/add-job" className="block hover:bg-gray-700 p-2 rounded">Add Job</Link>
      <Link to="/login" className="block hover:bg-gray-700 p-2 rounded">Login</Link>
      <Link to="/signup" className="block hover:bg-gray-700 p-2 rounded">Signup</Link>
    </div>
  )
}

export default Sidebar
