import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthorizationPage from '@/pages/AuthorizationPage';

import App from './App';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/authenticate',
        element: <AuthorizationPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
