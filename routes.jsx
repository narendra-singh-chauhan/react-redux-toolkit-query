// packages
import { Navigate, useRoutes } from 'react-router-dom';
// layout
import Layout from './src/layout';
// pages
import Home from './src/pages/Home';
import Todos from './src/pages/Todos';
import Profile from './src/pages/Profile';


const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: '/todos', element: <Todos /> },
                { path: '/profile', element: <Profile /> },
            ],
        },
        {
            path: '*',
            element: <Navigate to='/' replace />
        },
    ]);
};

export default Routes;