import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './layouts/root';
import NavigationLayout from './layouts/withNavigation';
import HomePage from './pages/Home';
import SignupPage from './pages/Signup';
import SubscribedPage from './pages/Subscribed';
import ErrorPage from './pages/error';

// Clear the existing HTML content
document.body.innerHTML = `<div id='app'></div>`;

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  {
    path: '/subscribed',
    element: <SubscribedPage />
  },
  {
    element: <NavigationLayout />,
    children: [{
      errorElement: <ErrorPage />,
        children: [
          {
            path: 'signup',
            element: <SignupPage />,
          },
        ],
      },
    ],
  }
]);

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);