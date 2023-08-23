import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { HomeLayout,Register,Login,Dashboard, Landing } from "./pages";

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
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
        element:<Dashboard/>,
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
