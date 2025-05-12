import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddJob from './pages/AddJob';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    errorElement: <NotFound />,
    children: [
      {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/add-job", element: <AddJob /> },
      ],
      }]
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <NotFound />,
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <NotFound />,
    }
  ]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
