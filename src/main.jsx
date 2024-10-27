import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainLayout from './Layout/MainLayout';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Toaster />
    <MainLayout />
  </StrictMode>
);
