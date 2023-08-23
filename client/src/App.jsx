import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { HomeLayout,Register,Login,Dashboard } from "./pages";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children: [
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'dashboard',
        element:<Dashboard/>
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
