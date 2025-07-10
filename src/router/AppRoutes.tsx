
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import About from "../pages/Dashboard/About";
import Categories from "../pages/Dashboard/Categories";
import Favorites from "../pages/Dashboard/Favorites";
import Feedback from "../pages/Dashboard/Feedback";
import Home from "../pages/Dashboard/Home";
import LayoutDashboard from "../pages/Dashboard/LayoutDashboard";
import MyResults from "../pages/Dashboard/MyResults";
import Ranking from "../pages/Dashboard/Ranking";
import StartGame from "../pages/Dashboard/StartGame";
import Support from "../pages/Dashboard/Support";


export const AppRoutes = [
    {   
        path: "/",
        element: <h1>Hello world!✌</h1>
    },
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
        element: <LayoutDashboard />,
        children: [
            {
                index: true,
                path: "",
                element: <Home />
            },
            {
                path: "start-game",
                element: <StartGame />
            },
            {
                path: "categories",
                element: <Categories />
            },
            {
                path: "ranking",
                element: <Ranking />
            },
            {
                path: "my-results",
                element: <MyResults />
            },
            {
                path: "favorites",
                element: <Favorites />
            },
            {
                path: "support",
                element: <Support />
            },
            {
                path: "feedback",
                element: <Feedback />
            },
            {
                path: "about",
                element: <About />
            }
        ]
    },
]