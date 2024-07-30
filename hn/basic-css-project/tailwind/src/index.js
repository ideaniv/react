import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import PointPage from './pages/PointPage/PointPage';
import MainPage from './pages/MainPage/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/point",
    element: <PointPage/>,
  },
  {
    path : '*',
    loader : ()=> {
      return redirect('/')
    }
  }
]);

root.render(  
  <React.StrictMode>
    <div className="app-container flex flex-col min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

