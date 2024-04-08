import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Detail from './Detail';
import Home from './Home';

const router = createBrowserRouter([
    {
        id: 1,
        path: "/detail/:detailText",
        element: <Detail/>,
    },
    {
        path: "/",
        element: <Home/>
    },
]);

export default router;