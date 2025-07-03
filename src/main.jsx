import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // ইমপোর্ট না করলে টেল উইন্ড কাজ করবে না ইনডেক্স সিএসএস
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
        <RouterProvider router={router} />
  </ React.StrictMode >
);