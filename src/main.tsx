import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login.tsx';
import SignUp from './SignUp.tsx';

const router = createBrowserRouter([
  {
      path: "/login",
      element: <Login />
  },
  {
      path: "/signup",
      element: <SignUp />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
