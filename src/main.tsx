import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from './router/AppRoutes';

const router = createBrowserRouter(AppRoutes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
