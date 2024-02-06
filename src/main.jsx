import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routes/Routes';
import Authprovider from './Providers/Authprovider';
import { LocationProvider } from './context/LocationContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Darkmode } from './context/Darkmode';
import { Provider } from 'react-redux';
import store from './redux/store';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Authprovider>
          <Darkmode>
            <LocationProvider>
              <RouterProvider router={Router} />
            </LocationProvider>
          </Darkmode>
        </Authprovider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
