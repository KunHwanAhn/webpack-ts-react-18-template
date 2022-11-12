import React from 'react';
import {
  Navigate,
  RouteObject,
} from 'react-router-dom';

import { ROUTE } from '@/constants';

import App from '@/App';
import Home from '@/views/Home';
import Detail from '@/views/Detail';

const routes: RouteObject[] = [
  {
    path: ROUTE.ROOT,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTE.TODO_DETAIL,
        element: <Detail />,
      },
      {
        path: '*',
        element: <Navigate to={ROUTE.ROOT} replace />,
      },
    ],
  },
];

export default routes;
