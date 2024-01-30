import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Routes';
import Authprovider from './Providers/Authprovider';
import { LocationProvider } from './context/LocationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <LocationProvider>
        <RouterProvider router={Router} />
      </LocationProvider>
    </Authprovider>
  </React.StrictMode>
);
