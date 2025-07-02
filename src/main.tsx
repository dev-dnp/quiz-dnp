import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login.tsx';
import SignUp from './SignUp.tsx';
import ForgotPassword from './ForgotPassword.tsx';
import Home from './Home.tsx';

const router = createBrowserRouter([
  {
      path: "/login",
      element: <Login />
  },
  {
      path: "/signup",
      element: <SignUp />
  },
  {
      path: "/forgot-password",
      element: <ForgotPassword />
  },
  {
      path: "/dashboard/home",
      element: <Home />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
