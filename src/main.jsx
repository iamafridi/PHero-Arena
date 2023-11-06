import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Shop from './pages/Shop/Shop';
import Features from './pages/Features/Features';
import AboutUs from './pages/Services/AboutUs';
import AuthProvider from './routes/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/features",
        element: <Features></Features>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
