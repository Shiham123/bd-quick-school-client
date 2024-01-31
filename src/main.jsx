import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Routes';
import Authprovider from './Providers/Authprovider';
import { LocationProvider } from './context/LocationContext';
import { Darkmode } from './context/Darkmode';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <Darkmode>
        <LocationProvider>
          <RouterProvider router={Router} />
        </LocationProvider>
      </Darkmode>
    </Authprovider>
  </React.StrictMode>
);
