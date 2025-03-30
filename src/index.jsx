import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@mui/material/styles';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);