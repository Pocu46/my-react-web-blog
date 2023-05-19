import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {RouterProvider} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {router} from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
