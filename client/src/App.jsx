import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import {
  HomeLayout,
  Register,
  Login,
  Dashboard,
  Landing,
  MainPage,
} from "./pages";

import { action as loginAction } from "./pages/Login";
import { action as registerAction } from "./pages/Register";
import { loader as dashboardLoader } from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: dashboardLoader ,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
