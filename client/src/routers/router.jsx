import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import Settings from '../pages/setting/Settings';
import Single from '../pages/single/Single';
import Write from '../pages/home/write/Write';

const user = false;
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: user ? <Home /> : <Register />,
  },
  {
    path: '/login',
    element: user ? <Home /> : <Login />,
  },
  {
    path: '/write',
    element: user ? <Write/> : <Register />,
  },
  {
    path: '/settings',
    element: user ? <Settings /> : <Login />,
  },
  {
    path: '/post/:postId',
    element: <Single />,
  },
]);

export default router;
