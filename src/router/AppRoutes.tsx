
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Home from "../pages/Dashboard/Home";


export const AppRoutes = [
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
      path: "/dashboard",
      element: <Home />,
      children: [
        {
            path: "start-game",
            element: <div>Começar o Jogo</div>
        },
        {
            path: "support",
            element: <div>Suporte</div>
        },

      ]
  },
]